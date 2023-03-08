/**
 * Rules:
 *  !!!
 *  !IMPORTANT - don't delete questions, set active = false instead.
 *  !!!
 *
 *  1. Section titles must be unique.
 *  2. Question labels must be unique.
 *  3. Question ids must be unique.
 *  4. run `npm run validate` each time this file was updated to validate for unique values such as titles, questions, and ids.
 */

const sections = [
  {
    title: "The title",
    active: true,
    questions: [
      {
        id: "5179c011-286d-4ab8-bc7f-8b118b16a4e3",
        label: "The title is definite.",
        active: true,
      },
      {
        id: "76d47fd0-35a0-4db3-8dc6-75bf5aed53b6",
        label:
          "The title is relevant to the contents of the instructional material.",
        active: true,
      },
    ],
  },
  {
    title: "The Preface",
    active: true,
    questions: [
      {
        id: "0199b859-f09f-44be-bf25-588d1f5093cb",
        label:
          "The preface is written by the author/s himself/herself/themselves.",
        active: true,
      },
      {
        id: "434d6a01-d2f2-4841-88b2-73fa3435fb7d",
        label: "It includes reasons for creating the material.",
        active: true,
      },
      {
        id: "577fd743-374f-466a-b039-6d2fa15da760",
        label: "It states the importance to the users.",
        active: true,
      },
      {
        id: "75b68c35-8d15-4e75-b1b3-5df498515b90",
        label: "It introduces what the material is about.",
        active: true,
      },
    ],
  },
  {
    title: "The Introduction in Every Chapter/Unit",
    active: true,
    questions: [
      {
        id: "13e902e7-20bc-492d-82bf-3b896f489d75",
        label:
          "The introduction in every chapter/unit gives the overview of the coverage.",
        active: true,
      },
    ],
  },
  {
    title: "The Learning Outcomes",
    active: true,
    questions: [
      {
        id: "a9ac8ba8-b3a9-48ff-b071-c20ebac32ebb",
        label:
          "The content, activities, and assessment and aligned with the LOs.",
        active: true,
      },
      {
        id: "b5698869-ad2e-431c-862a-9454b6ce1fd3",
        label:
          "The learning outcomes (COs and SLOs) are addressed in the instructional material.",
        active: true,
      },
      {
        id: "9b8702ed-f394-43ff-9d95-940162d4b9b9",
        label: "The learning outcomes are appropriate for the topics covered.",
        active: true,
      },
    ],
  },
  {
    title: "The Discussion/Presentation of the Concepts",
    active: true,
    questions: [
      {
        id: "fcc68947-a645-441d-9860-f291412a845c",
        label: "The concepts are explicitly discussed.",
        active: true,
      },
      {
        id: "87bc043a-8ba9-4128-ba16-59553ad00dad",
        label: "All terms are understandable to the learners.",
        active: true,
      },
      {
        id: "2e68dc87-4c4f-4875-9fda-ba2083a4fe24",
        label: "The content is free from gender-bias.",
        active: true,
      },
    ],
  },
  {
    title: "The Examples for the Application of the Concepts",
    active: true,
    questions: [
      {
        id: "3aa0d914-bcbd-44ec-a517-8976df64254b",
        label: "Examples are provided to illustrate the concepts discussed.",
        active: true,
      },
      {
        id: "fe4a95d9-5571-40f2-8f95-331bb8a2ad19",
        label: "The examples are consistent with the concepts discussed.",
        active: true,
      },
      {
        id: "2fdff4c1-9225-46be-b37a-c568ffa89b3f",
        label: "They relate to real-world situations.",
        active: true,
      },
      {
        id: "f7fae16f-0547-455f-9b02-d081e9873ec3",
        label: "They motivate students to participate in the learning process.",
        active: true,
      },
      {
        id: "747b2c1a-7abb-4237-b389-b67aefaacb28",
        label: "They illustrate attainment of learning outcomes.",
        active: true,
      },
    ],
  },
  {
    title: "The Exercises/Activities",
    active: true,
    questions: [
      {
        id: "40e1f2e7-38b3-4b19-b6dc-19dfca4c7e58",
        label:
          "The exercises/activities are appropriate for demonstrating the learned concepts.",
        active: true,
      },
      {
        id: "bbddf781-e67b-449a-993c-f67b1aee114f",
        label:
          "There are provisions that encourage students to work collaboratively.",
        active: true,
      },
      {
        id: "3c50f965-4395-47fe-b65b-5358534e8aba",
        label:
          "The exercises/activities develop creativity, critical thinking, and problem-solving skills of the students.",
        active: true,
      },
      {
        id: "714d007d-bb80-4628-a843-8fe46532051d",
        label: "They encourage students to communicate effectively.",
        active: true,
      },
      {
        id: "94c35810-0141-4425-a89a-72536cd40d21",
        label: "They are prepared within the capability of the students.",
        active: true,
      },
    ],
  },
  {
    title: "The Rubrics (if applicable)",
    active: true,
    questions: [
      {
        id: "c7a4f29a-f6cf-4b47-9473-f28370b62b43",
        label: "The rubrics are appropriate for the assessment.",
        active: true,
      },
      {
        id: "b91bf8a9-a630-49c1-ad8b-943424354c9f",
        label:
          "The rubrics describe the criteria through which the learners' outputs are rated.",
        active: true,
      },
      {
        id: "53dc05ac-5088-41b9-b238-f825cfdf7325",
        label:
          "The rubrics show the levels of achievements of quality of the assessment outputs.",
        active: true,
      },
    ],
  },
];

export default function countQuestions(sections) {
  let total = 0;

  for (let section of sections) {
    for (let question of section.questions) {
      total += 1;
    }
  }

  return total;
}

//  don't change format, used by /validator.js
module.exports = { sections, countQuestions };
