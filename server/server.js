import fastify from "fastify";
import dotenv from "dotenv";
import sensible from "@fastify/sensible";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
dotenv.config();

const app = fastify();
const prisma = new PrismaClient();
app.register(sensible);
app.register(cors, {
  origin: process.env.CLIENT_URL,
  credentials: true,
});

app.get("/posts", async (req, res) => {
  return await commitToDb(prisma.post.findMany());
});

app.get("/post/:id", async (req, res) => {
  return await commitToDb(
    prisma.post.findUnique({
      where: { id: req.params.id },
      select: {
        description: true,
        title: true,
        category: true,
        comments: {
          orderBy: {
            created_at: "desc",
          },
          select: {
            id: true,
            reply: true,
            parentId: true,
            created_at: true,
            user: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    })
  );
});

app.get("/users", async (req, res) => {
  return await commitToDb(prisma.user.findMany());
});

async function commitToDb(promise) {
  const [error, data] = await app.to(promise);
  if (error) return app.httpErrors.internalServerError(error.message);
  return data;
}
app.listen({ port: process.env.PORT });
