import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Stack,
  Toolbar,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import CollegeSelectField from "../form/CollegeSelectField";
import YearRange from "../form/YearRange";
import { useEffect, useState } from "react";
import moment from "moment";
import frontendGetIMCount from "@/services/frontend/chart/im/frontendGetIMCount";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      align: "start",
    },
  },
  // cubicInterpolationMode: "monotone",
};

export default function EndorsedIM() {
  const [filter, setFilter] = useState({
    startYear: moment().year() - 6,
    endYear: moment().year(),
    collegeId: "",
  });

  const [counts, setCounts] = useState({
    draft: [],
    submitted: [],
    department_reviewed: [],
    department_revised: [],
    department_endorsed: [],
    citl_reviewed: [],
    citl_revised: [],
    citl_endorsed: [],
  });

  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const newLabels = [];

    for (let i = filter.startYear; i <= filter.endYear; i++) {
      newLabels.push(i);
    }

    setData((prev) => ({ ...prev, labels: newLabels }));
  }, [filter]);

  async function getCounts({ years, status, collegeId }) {
    console.log({
      getCounts: {
        years,
        status,
        collegeId,
      },
    });
    const counts = [];

    for (let year of years) {
      const count = await frontendGetIMCount({
        year,
        status: status,
        collegeId,
      });
      counts.push(count);
    }

    return counts;
  }

  async function getStatusCounts({ years, collegeId }) {
    console.log({
      getStatusCounts: {
        years,
        collegeId,
      },
    });
    const draft = await getCounts({
      collegeId: collegeId,
      status: "DRAFT",
      years,
    });
    const submitted = await getCounts({
      collegeId: collegeId,
      status: "SUBMITTED",
      years,
    });
    const department_reviewed = await getCounts({
      collegeId: collegeId,
      status: "DEPARTMENT_REVIEWED",
      years,
    });
    const department_revised = await getCounts({
      collegeId: collegeId,
      status: "DEPARTMENT_REVISED",
      years,
    });
    const department_endorsed = await getCounts({
      collegeId: collegeId,
      status: "DEPARTMENT_ENDORSED",
      years,
    });
    const citl_reviewed = await getCounts({
      collegeId: collegeId,
      status: "CITL_REVIEWED",
      years,
    });
    const citl_revised = await getCounts({
      collegeId: collegeId,
      status: "CITL_REVISED",
      years,
    });
    const citl_endorsed = await getCounts({
      collegeId: collegeId,
      status: "CITL_ENDORSED",
      years,
    });

    return {
      draft,
      submitted,
      department_reviewed,
      department_revised,
      department_endorsed,
      citl_reviewed,
      citl_revised,
      citl_endorsed,
    };
  }

  useEffect(() => {
    let subscribe = true;
    const { labels } = data;
    if (labels.length < 1) return;

    getStatusCounts({
      collegeId: filter.collegeId,
      years: data.labels,
    }).then((res) => {
      if (!subscribe) return;

      setCounts(res);
    });

    return () => {
      subscribe = false;
    };
  }, [data.labels, filter.collegeId]);

  useEffect(() => {
    console.log({ counts });

    setData((prev) => ({
      ...prev,
      datasets: [
        {
          label: "Draft",
          fill: true,
          data: counts.draft,
          borderColor: "rgb(0, 143, 251)",
          backgroundColor: "rgb(0, 143, 251, 0.1)",
          tension: 0.4,
        },

        {
          label: "Submitted",
          fill: true,
          data: counts.submitted,
          borderColor: "rgb(254, 176, 25)",
          backgroundColor: "rgb(254, 176, 25, 0.1)",
          tension: 0.4,
        },
        {
          label: "Department Reviewed",
          fill: true,
          data: counts.department_reviewed,
          borderColor: "rgb(0, 227, 150)",
          backgroundColor: "rgb(0, 227, 150, 0.1)",
          tension: 0.4,
        },
        {
          label: "Department Revised",
          fill: true,
          data: counts.department_revised,
          borderColor: "rgb(119, 93, 208)",
          backgroundColor: "rgb(119, 93, 208, 0.2)",
          tension: 0.4,
        },
        {
          label: "Department Endorsed",
          fill: true,
          data: counts.department_endorsed,
          borderColor: "rgb(237,85,59)",
          backgroundColor: "rgb(237,85,59, 0.2)",
          tension: 0.4,
        },
        {
          label: "CITL Reviewed",
          fill: true,
          data: counts.citl_reviewed,
          borderColor: "rgb(4,104,101)",
          backgroundColor: "rgb(4,104,101, 0.2)",
          tension: 0.4,
        },
        {
          label: "CITL Revised",
          fill: true,
          data: counts.citl_revised,
          borderColor: "rgb(238,172,153)",
          backgroundColor: "rgb(238,172,153, 0.2)",
          tension: 0.4,
        },
        {
          label: "CITL Endorsed",
          fill: true,
          data: counts.department_endorsed,
          borderColor: "rgb(102, 167, 197)",
          backgroundColor: "rgb(102, 167, 197, 0.2)",
          tension: 0.4,
        },
      ],
    }));
  }, [counts]);

  return (
    <Container maxWidth='md'>
      <Card variant='outlined'>
        <CardHeader title="College IM's" />
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={8}>
              <CollegeSelectField
                fullWidth
                onChange={(collegeId) =>
                  setFilter((prev) => ({ ...prev, collegeId }))
                }
              />
            </Grid>
            <Grid item xs={4}>
              <YearRange
                startYear={filter.startYear}
                endYear={filter.endYear}
                onChange={(state) => {
                  console.log("filter changed");
                  setFilter((prev) => ({
                    ...prev,
                    startYear: state.startYear,
                    endYear: state.endYear,
                  }));
                }}
              />
            </Grid>
          </Grid>
          <Line options={options} data={data} />
        </CardContent>
      </Card>
    </Container>
  );
}
