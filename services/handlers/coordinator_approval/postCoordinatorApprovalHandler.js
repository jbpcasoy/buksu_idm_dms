import userAbility from "@/services/abilities/defineAbility";
import readCoordinator from "@/services/api/coordinator/readCoordinator";
import createCoordinatorApproval from "@/services/api/coordinator_approval/createCoordinatorApproval";
import readDepartmentApproval from "@/services/api/department_approval/readDepartmentApproval";
import readIM from "@/services/api/im/readIM";

export default async function postCoordinatorApprovalHandler(req, res) {
  const { departmentApprovalId, coordinatorId } = req.body;
  const user = await getServerUser(req, res);
  const ability = await userAbility(user);

  const departmentApproval = await readDepartmentApproval(departmentApprovalId);
  const iM = await readIM({
    id: departmentApproval.iMId,
    ability,
  });

  const coordinator = await readCoordinator({
    ability,
    filter: {
      ActiveCoordinator: {
        departmentId: {
          equals: iM.owner.departmentId,
        },
      },
    },
  });

  const coordinatorApproval = await createCoordinatorApproval({
    departmentApprovalId,
    coordinator: coordinator.id,
  });
  return res.status(201).json(coordinatorApproval);
}
