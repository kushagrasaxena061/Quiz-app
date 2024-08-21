import { type SchemaTypeDefinition } from "sanity";
import round1 from "./documents/questions1";
import round2 from "./documents/questions2";
import round3 from "./documents/questions3";
import round4 from "./documents/questions4";
import round5 from "./documents/questions5";
import round6 from "./documents/questions6";
import round7 from "./documents/questions7";
import round8 from "./documents/questions8";
import round9 from "./documents/questions9";
import round10 from "./documents/questions10";
import round11 from "./documents/questions11";
import round12 from "./documents/questions12";
import round13 from "./documents/questions13";
import round14 from "./documents/questions14";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    round1,
    round2,
    round3,
    round4,
    round5,
    round6,
    round7,
    round8,
    round9,
    round10,
    round11,
    round12,
    round13,
    round14,
  ],
};

// export const schema2: { types: SchemaTypeDefinition[] } = {
//   types: [questions2],
// };
