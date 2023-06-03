import type _PrismaTypes from "@pothos/plugin-prisma/generated";
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = db;

export type PrismaTypes = _PrismaTypes;
