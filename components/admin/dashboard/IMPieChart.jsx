import { Card, CardContent, CardHeader, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import DepartmentSelectField from "../form/DepartmentSelectField";
import CollegeSelectField from "../form/CollegeSelectField";
import frontendGetIMCount from "@/services/frontend/chart/im/frontendGetIMCount";
import moment from "moment";

export default function IMPieChart() {
  const [filter, setFilter] = useState({
    collegeId: "",
    departmentId: "",
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getCount({ departmentId, collegeId, status }) {
      return frontendGetIMCount({
        departmentId,
        year: moment().year(),
        status,
        collegeId,
      });
    }

    async function getStatusCounts({ departmentId, collegeId }) {
      const draft = await getCount({
        departmentId,
        collegeId,
        status: "DRAFT",
      });
      const submitted = await getCount({
        departmentId,
        collegeId,
        status: "SUBMITTED",
      });
      const department_reviewed = await getCount({
        departmentId,
        collegeId,
        status: "DEPARTMENT_REVIEWED",
      });
      const department_revised = await getCount({
        departmentId,
        collegeId,
        status: "DEPARTMENT_REVISED",
      });
      const department_endorsed = await getCount({
        departmentId,
        collegeId,
        status: "DEPARTMENT_ENDORSED",
      });
      const citl_reviewed = await getCount({
        departmentId,
        collegeId,
        status: "CITL_REVIEWED",
      });
      const citl_revised = await getCount({
        departmentId,
        collegeId,
        status: "CITL_REVISED",
      });
      const citl_endorsed = await getCount({
        departmentId,
        collegeId,
        status: "CITL_ENDORSED",
      });

      return [
        draft,
        submitted,
        department_reviewed,
        department_revised,
        department_endorsed,
        citl_reviewed,
        citl_revised,
        citl_endorsed,
      ];
    }

    let subscribe = true;
    getStatusCounts({
      collegeId: filter.collegeId,
      departmentId: filter.departmentId,
    }).then((res) => {
      if (!subscribe) return;

      setData(res);
    });

    return () => {
      subscribe = false;
    };
  }, [filter]);

  return (
    <Container maxWidth='sm' sx={{ height: "100%" }}>
      <Card variant='outlined' sx={{ height: "100%" }}>
        <CardHeader title='Number of IMs' />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <CollegeSelectField
                fullWidth
                onChange={(collegeId) =>
                  setFilter((prev) => ({ ...prev, collegeId }))
                }
              />
            </Grid>
            <Grid item xs={6}>
              <DepartmentSelectField
                fullWidth
                collegeId={filter.collegeId}
                onChange={(departmentId) =>
                  setFilter((prev) => ({ ...prev, departmentId }))
                }
              />
            </Grid>
          </Grid>
          <Doughnut
            data={{
              labels: [
                "Draft",
                "Submitted",
                "Department Reviewed",
                "Department Revised",
                "Department Endorsed",
                "CITL Reviewed",
                "CITL Revised",
                "CITL Endorsed",
              ],
              datasets: [
                {
                  label: "# of IMs",
                  data: data,
                  backgroundColor: [
                    "#008FFB", //Draft
                    "#FEB019", //Submitted
                    "#00E396", //Department Reviewed
                    "#775DD0", //Department Revised
                    "#ED553B", //Department Endorsed
                    "#046865", //CITL Reviewed
                    "#EEAC99", //CITL Revised
                    "#66A7C5", //CITL Endorsed
                  ],
                  borderColor: [
                    "#008FFB", //Draft
                    "#FEB019", //Submitted
                    "#00E396", //Department Reviewed
                    "#775DD0", //Department Revised
                    "#ED553B", //Department Endorsed
                    "#046865", //CITL Reviewed
                    "#EEAC99", //CITL Revised
                    "#66A7C5",
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </CardContent>
      </Card>
    </Container>
  );
}
