import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import raw from "./units.json";

async function main() {
  await prisma.moji.deleteMany({});
  await prisma.tag.deleteMany({});

  await prisma.$transaction([
    //@ts-ignore
    ...raw.map((item, idx) => {
      const tag = item.tag.toLocaleLowerCase().trim();
      const moji = item.moji ?? "FUCK";
      return prisma.moji.upsert({
        where: {
          title: moji,
        },
        create: {
          title: moji,
          tags: {
            connectOrCreate: {
              where: { title: tag },
              create: {
                title: tag,
              },
            },
          },
        },
        update: {
          title: moji,
          tags: {
            connectOrCreate: {
              create: {
                title: tag,
              },
              where: {
                title: tag,
              },
            },
          },
        },
      });
    }),
  ]);
}

main().then(() => {
  console.log("Data seeded...");
});
