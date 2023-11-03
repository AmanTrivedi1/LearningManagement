const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Cyber Security" },
        { name: "Guitar" },
        { name: "React Js" },
        { name: "TypeScript" },
        { name: "Motivation" },
        { name: "Hacking" },
        { name: "Low Latency " },
        { name: "Next Js " },
        { name: "Node Js " },
        { name: "Express Js" },
        { name: "Tailwind Css " },
        { name: "Sass " },
        { name: "Git & Github" },
        { name: "Three.Js" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
