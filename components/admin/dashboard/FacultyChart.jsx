import frontendReadColleges from "@/services/frontend/admin/college/frontendReadColleges";
import { Card, CardContent, CardHeader, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function FacultyChart() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    let subscribe = true;

    frontendReadColleges({}).then((res) => {
      console.log({ res });
      setColleges(res.data);
    });

    return () => {
      subscribe = false;
    };
  }, []);

  return (
    <Container maxWidth='lg'>
      <Card variant='outlined'>
        <CardHeader title='Number of Faculties' />
        <CardContent>
          <Grid container spacing={1}>
            {colleges.map((college) => {
              return college.Department.map((department) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={department.id}>
                    <div
                      className='mt-1 border rounded-md py-3 px-2.5 flex justify-start w-full'
                      style={{ borderColor: "#008ffb" }}
                    >
                      <h3
                        className='font-bold text-3xl'
                        style={{ color: "#008ffb" }}
                      >
                        {department._count.ActiveFaculty}
                      </h3>
                      <h3
                        className='font-medium text-left mt-1 ml-3'
                        style={{ color: "#008ffb" }}
                      >
                        {department.name}
                      </h3>
                    </div>
                  </Grid>
                );
              });
            })}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
