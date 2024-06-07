const { PrismaClient } = require("@prisma/client");

let prisma;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

const db = prisma;

async function main() {
  await db.user.createMany({
    data: [
      { name: "Sawana", email: "sawana@example.com" },
      { name: "Alice", email: "alice@example.com" },
      { name: "Bob", email: "bob@example.com" },
      { name: "Charlie", email: "charlie@example.com" },
      { name: "David", email: "david@example.com" },
      { name: "Eve", email: "eve@example.com" },
      { name: "Frank", email: "frank@example.com" },
      { name: "Grace", email: "grace@example.com" },
      { name: "Heidi", email: "heidi@example.com" },
      { name: "Ivan", email: "ivan@example.com" },
      { name: "Judy", email: "judy@example.com" },
    ],
  });
}

main()
  .catch((err) => {
    console.error(
      "An error occurred while attempting to seed the database:",
      err,
    );
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
