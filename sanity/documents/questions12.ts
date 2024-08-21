export default {
  name: "round12",
  title: "Round 12",
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
