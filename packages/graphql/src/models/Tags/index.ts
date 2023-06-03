import { builder } from "../../schema/builder";
import { db } from "@esrevinu/db";

builder.prismaObject("Tag", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    mojis: t.relation("moji"),
    createdAt: t.expose("createdAt", {
      type: "Date",
    }),
  }),
});

builder.queryField("tags", (t) =>
  t.prismaField({
    type: ["Tag"],
    resolve: async (query, root, args, ctx, info) => {
      return db.tag.findMany({ ...query });
    },
  })
);
