import { type SchemaTypeDefinition } from "sanity";
import questions from "./questions";
import questions2 from "./questions2";
import questions3 from "./questions3";
import questions4 from "./questions4";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [questions, questions2, questions3, questions4],
};

// export const schema2: { types: SchemaTypeDefinition[] } = {
//   types: [questions2],
// };
