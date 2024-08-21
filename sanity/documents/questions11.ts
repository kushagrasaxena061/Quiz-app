export default {
  name: "round11",
  title: "Round 11",
  type: "document",
  fields: [
    {
      name: "url",
      title: "Url",
      type: "string",
    },
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
