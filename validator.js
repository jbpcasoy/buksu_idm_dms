const { default: pino } = require("pino");
const { default: PinoPretty } = require("pino-pretty");
const { sections } = require("./constants/questions");

function validateQuestions(sections) {
  let ids = new Set();
  let labels = new Set();
  let titles = new Set();

  for (const section of sections) {
    const sectionTitle = section.title.trim();
    if (titles.has(sectionTitle)) {
      throw new Error(`Error: Duplicate section title found: ${sectionTitle}`);
      return false;
    }
    titles.add(sectionTitle);

    for (const question of section.questions) {
      const questionId = question.id.trim();
      const questionLabel = question.label.trim();
      if (ids.has(questionId)) {
        throw new Error(`Error: Duplicate question id found: ${questionId}`);
        return false;
      }
      ids.add(questionId);

      if (labels.has(questionLabel)) {
        throw new Error(
          `Error: Duplicate question label found: ${questionLabel}`
        );
        return false;
      }
      labels.add(questionLabel);
    }
  }

  console.log("Validation successful!");
  return true;
}
try {
  validateQuestions(sections);
} catch (error) {
  pino(PinoPretty()).error(error);
  throw error;
}
