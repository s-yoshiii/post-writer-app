import { PrismaClient } from "./generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  var cachePrisma: PrismaClient;
}

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  return new PrismaClient({ adapter });
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = createPrismaClient();
} else {
  if (!global.cachePrisma) {
    global.cachePrisma = createPrismaClient();
  }
  prisma = global.cachePrisma;
}

export const db = prisma;
