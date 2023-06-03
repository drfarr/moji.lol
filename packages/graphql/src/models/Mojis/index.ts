import { builder } from "../../schema/builder";
import { db } from "@esrevinu/db";

builder.prismaObject("Moji", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    tags: t.relation("tags"),
  }),
});

builder.queryType({
  fields: (t) => ({
    mojis: t.prismaField({
      type: ["Moji"],
      resolve: async (query, root, args, ctx, info) => {
        return db.moji.findMany({ ...query });
      },
    }),
  }),
});
