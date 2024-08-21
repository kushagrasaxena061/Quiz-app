export default {
  name: "round1",
  title: "Round 1",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Question",
      type: "string",
    },
    {
      name: "answers",
      title: "Answers",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "correctAnswer",
      title: "Correct Answer",
      type: "string",
    },
  ],
};
