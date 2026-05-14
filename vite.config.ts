import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs/promises";
import path from "path";
import { randomUUID } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";

type ProjectPayload = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  githubNote?: string;
  imageFile?: {
    name: string;
    dataUrl: string;
  };
};

const projectsPath = path.resolve(__dirname, "src/data/projects.json");
const assetsPath = path.resolve(__dirname, "public/assets");

const readBody = (request: IncomingMessage) => {
  return new Promise<string>((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
};

const sendJson = (response: ServerResponse, statusCode: number, body: unknown) => {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify(body));
};

const slugify = (value: string) => {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
};

const saveImageFile = async (project: ProjectPayload) => {
  if (!project.imageFile?.dataUrl) {
    return project.image;
  }

  const match = project.imageFile.dataUrl.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);
  if (!match) {
    throw new Error(`Invalid image data for ${project.title || project.id}.`);
  }

  const extensionFromName = path.extname(project.imageFile.name).toLowerCase();
  const extensionFromMime = match[1].split("/")[1]?.replace("jpeg", "jpg") ?? "png";
  const extension = extensionFromName || `.${extensionFromMime}`;
  const filename = `${slugify(project.title || project.id) || "project"}-${Date.now()}${extension}`;
  const filePath = path.join(assetsPath, filename);

  await fs.mkdir(assetsPath, { recursive: true });
  await fs.writeFile(filePath, Buffer.from(match[2], "base64"));

  return `/assets/${filename}`;
};

const normalizeProjects = async (projects: ProjectPayload[]) => {
  return Promise.all(
    projects.map(async (project) => ({
      id: project.id || slugify(project.title) || randomUUID(),
      title: project.title,
      description: project.description,
      tech: Array.isArray(project.tech) ? project.tech : [],
      link: project.link,
      github: project.github || "#",
      image: await saveImageFile(project),
      ...(project.githubNote ? { githubNote: project.githubNote } : {}),
    })),
  );
};

const localProjectsPlugin = () => ({
  name: "local-projects-api",
  configureServer(server) {
    server.middlewares.use("/api/admin/projects", async (request, response) => {
      try {
        if (request.method === "GET") {
          const projects = JSON.parse(await fs.readFile(projectsPath, "utf8"));
          sendJson(response, 200, projects);
          return;
        }

        if (request.method !== "POST") {
          sendJson(response, 405, { message: "Method not allowed." });
          return;
        }

        const body = await readBody(request);
        const payload = JSON.parse(body) as { projects?: ProjectPayload[] };

        if (!Array.isArray(payload.projects)) {
          sendJson(response, 400, { message: "Projects payload is required." });
          return;
        }

        const projects = await normalizeProjects(payload.projects);
        await fs.writeFile(projectsPath, `${JSON.stringify(projects, null, 2)}\n`, "utf8");
        sendJson(response, 200, { projects });
      } catch (error) {
        sendJson(response, 500, {
          message: error instanceof Error ? error.message : "Unable to save projects.",
        });
      }
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), localProjectsPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
