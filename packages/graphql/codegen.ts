import { printSchema } from "graphql";
import schema from "./src/schema";
module.exports = {
  overwrite: true,
  schema: printSchema(schema),
  generates: {
    "src/generated/index.ts": {
      documents: ["./src/models/**/*.gql"],
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
    "src/generated/schema.graphql": { plugins: ["schema-ast"] },
  },
};
