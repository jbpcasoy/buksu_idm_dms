import userAbility from "@/services/abilities/defineAbility";
import readIM from "@/services/api/im/readIM";
import updateIM from "@/services/api/im/updateIM";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";
import { permittedFieldsOf } from "@casl/ability/extra";
import _ from "lodash";

export default async function putImHandler(req, res) {
  const { id } = req.query;
  const { title, serialNumber, authors, status, type } = req.body;

  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  async function findSubject({ id }) {
    const subject = await readIM({
      id,
      ability: ability,
    });
    return subject;
  }

  const iM = await findSubject({ id });
  const caslSubject = subject("IM", iM);
  const fields = permittedFieldsOf(ability, "update", caslSubject, {
    fieldsFrom: (rule) =>
      rule.fields || ["title", "serialNumber", "authors", "status", "type"],
  });
  const data = _.pick({ title, serialNumber, authors, status, type }, fields);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      if (data?.status) {
        const { status: dataStatus } = data;

        switch (dataStatus) {
          case "SUBMITTED":
            if (iM.status !== "DRAFT") {
              throw statusError({
                statusCode: 400,
                message: `Can only move IM to \"SUBMITTED\" from \"DRAFT\"`,
              });
            }
            break;
          case "DRAFT":
            if (iM.status !== "SUBMITTED") {
              throw statusError({
                statusCode: 400,
                message: `Can only move IM to \"DRAFT\" from \"SUBMITTED\"`,
              });
            }
            break;
          case "DEPARTMENT_REVIEWED":
            if (iM.status === "SUBMITTED") {
              throw statusError({
                statusCode: 400,
                message: `Cannot move IM to \"DEPARTMENT_REVIEWED\" from \"SUBMITTED\" manually`,
              });
            }
            if (iM.status !== "DEPARTMENT_REVISED") {
              throw statusError({
                statusCode: 400,
                message: `Can only move IM to \"DEPARTMENT_REVIEWED\" from \"DEPARTMENT_REVISED\"`,
              });
            }
            break;
          case "DEPARTMENT_REVISED":
            if (iM.status !== "DEPARTMENT_REVIEWED") {
              throw statusError({
                statusCode: 400,
                message: `Can only move IM to \"DEPARTMENT_REVISED\" from \"DEPARTMENT_REVIEWED\"`,
              });
            }
            break;
          case "DEPARTMENT_ENDORSED":
            if (iM.status === "DEPARTMENT_REVISED") {
              throw statusError({
                statusCode: 400,
                message: `Cannot move IM to \"DEPARTMENT_ENDORSED\" from \"DEPARTMENT_REVISED\"`,
              });
            }
            break;
          case "CITL_REVIEWED":
            if (iM.status === "DEPARTMENT_ENDORSED") {
              throw statusError({
                statusCode: 400,
                message: `Cannot move IM to \"CITL_REVIEWED\" from \"DEPARTMENT_ENDORSED\" manually`,
              });
            }
            if (iM.status !== "CITL_REVISED") {
              throw statusError({
                statusCode: 400,
                message: `Can only move IM to \"CITL_REVIEWED\" from \"CITL_REVISED\"`,
              });
            }
          case "CITL_REVISED":
            if (iM.status !== "CITL_REVIEWED") {
              throw statusError({
                statusCode: 400,
                message: `Can only move IM to \"CITL_REVISED\" from \"CITL_REVIEWED\"`,
              });
            }
          case "CITL_ENDORSED":
            if (iM.status === "CITL_REVISED") {
              throw statusError({
                statusCode: 400,
                message: `Cannot move IM to \"CITL_ENDORSED\" from \"CITL_REVISED\" manually`,
              });
            }
          default:
            throw statusError({
              statusCode: 400,
              message: `Status unknown: ${dataStatus}`,
            });
        }
      }

      const updatedIm = await updateIM(id, data, ability);

      return res.status(200).json(updatedIm);
    },
    action: "update",
    subject: caslSubject,
    fields: Object.keys(data),
    type: "IM",
  });
}
