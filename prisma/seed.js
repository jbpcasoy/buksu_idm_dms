const { PrismaClient } = require("@prisma/client");

const colleges = [
  "College of Administration",
  "College of Arts and Sciences",
  "College of Business",
  "College of Education",
  "College of Law",
  "College of Nursing",
  "College of Technologies",
  "No College",
];

const departments = {
  "College of Administration": [
    "College of Administration",
    "Public Administration",
  ],
  "College of Arts and Sciences": [
    "College of Arts and Sciences",
    "Community Development",
    "Development Communication",
    "Economics",
    "General Education",
    "Language and Letters",
    "Mathematics",
    "Natural Sciences",
    "Philosophy",
    "Social Sciences",
    "Sociology",
  ],
  "College of Business": [
    "Accountancy",
    "Business Administration",
    "College of Business",
    "Hospitality",
  ],
  "College of Education": [
    "College of Education",
    "Early Childhood Education",
    "Elementary Education",
    "Elementary Laboratory School",
    "Physical Education",
    "Secondary Education",
    "Secondary Laboratory School",
  ],
  "College of Law": ["Law"],
  "College of Nursing": ["Nursing"],
  "College of Technologies": [
    "Automotive Technology",
    "College of Technologies",
    "Electronics Technology",
    "Food Technology",
    "Information Technology",
  ],
  "No College": ["National Service Training Program"],
};

const prisma = new PrismaClient();
async function seedCollege(name) {
  try {
    const college = await prisma.college.create({
      data: {
        name,
      },
    });

    console.log("College created:");
    console.log(college);
  } catch (error) {
    switch (error.code) {
      case "P2002":
        console.log(`College '${name}' already exists.`);
        break;
      default:
        throw error;
    }
  }
}

async function seedDepartment(name, collegeId) {
  try {
    const department = await prisma.department.create({
      data: {
        name,
        collegeId,
      },
    });

    console.log("Department created:");
    console.log(department);
  } catch (error) {
    switch (error.code) {
      case "P2002":
        console.log(`Department '${name}' already exists.`);
        break;
      default:
        throw error;
    }
  }
}

async function main() {
  // Seed Colleges
  for (let college of colleges) {
    await seedCollege(college);
  }

  // Seed Departments
  const prismaColleges = await prisma.college.findMany();
  for (let college of prismaColleges) {
    for (let department of departments[college.name]) {
      await seedDepartment(department, college.id);
    }
  }
}

main()
  .then(() => {
    console.log("Seeding finished successfully");
  })
  .catch((e) => {
    console.log("Seeding failed, err: ", e);
    process.exit();
  });
