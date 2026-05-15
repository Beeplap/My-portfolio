import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ImagePlus,
  LogOut,
  Plus,
  Save,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { projects as defaultProjects, type Project } from "@/data/projects";
import { clearAdminSession, isAdminAuthenticated } from "@/lib/admin-auth";

type ProjectForm = Omit<Project, "tech"> & {
  tech: string;
  imageFile?: {
    name: string;
    dataUrl: string;
  };
};

type SavePayloadProject = Project & {
  imageFile?: {
    name: string;
    dataUrl: string;
  };
};

const emptyProject = (): ProjectForm => ({
  id: crypto.randomUUID(),
  title: "",
  description: "",
  tech: "",
  link: "",
  github: "",
  image: "",
  githubNote: "",
});

const toFormProject = (project: Project): ProjectForm => ({
  ...project,
  tech: project.tech.join(", "),
  githubNote: project.githubNote ?? "",
});

const toProjectPayload = (project: ProjectForm): SavePayloadProject => {
  const payload: SavePayloadProject = {
    id: project.id,
    title: project.title.trim(),
    description: project.description.trim(),
    tech: project.tech
      .split(",")
      .map((tech) => tech.trim())
      .filter(Boolean),
    link: project.link.trim(),
    github: project.github.trim() || "#",
    image: project.image.trim(),
    githubNote: project.githubNote?.trim() || undefined,
  };

  if (project.imageFile) {
    payload.imageFile = project.imageFile;
  }

  return payload;
};

const readImageFile = (file: File) => {
  return new Promise<ProjectForm["imageFile"]>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve({
        name: file.name,
        dataUrl: String(reader.result),
      });
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
};

const Admin = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<ProjectForm[]>(() => defaultProjects.map(toFormProject));
  const [activeId, setActiveId] = useState(defaultProjects[0]?.id ?? "");
  const [status, setStatus] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const activeProject = useMemo(
    () => projects.find((project) => project.id === activeId) ?? projects[0],
    [activeId, projects],
  );

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await fetch("/api/admin/projects");
        if (!response.ok) {
          return;
        }
        const freshProjects = (await response.json()) as Project[];
        setProjects(freshProjects.map(toFormProject));
        setActiveId(freshProjects[0]?.id ?? "");
      } catch {
        setStatus("Local save API is available only while running the dev server.");
      }
    };

    loadProjects();
  }, []);

  if (!isAdminAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  const updateProject = (id: string, changes: Partial<ProjectForm>) => {
    setProjects((current) =>
      current.map((project) => (project.id === id ? { ...project, ...changes } : project)),
    );
  };

  const handleAddProject = () => {
    const nextProject = emptyProject();
    setProjects((current) => [nextProject, ...current]);
    setActiveId(nextProject.id);
    setStatus("");
  };

  const handleDeleteProject = (id: string) => {
    setProjects((current) => {
      const nextProjects = current.filter((project) => project.id !== id);
      setActiveId(nextProjects[0]?.id ?? "");
      return nextProjects;
    });
    setStatus("");
  };

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !activeProject) {
      return;
    }

    const imageFile = await readImageFile(file);
    updateProject(activeProject.id, {
      image: imageFile?.dataUrl ?? activeProject.image,
      imageFile,
    });
  };

  const handleSave = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSaving(true);
    setStatus("");

    try {
      const response = await fetch("/api/admin/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projects: projects.map(toProjectPayload),
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.message ?? "Unable to save projects.");
      }

      const savedProjects = (result.projects as Project[]).map(toFormProject);
      setProjects(savedProjects);
      setActiveId(savedProjects.find((project) => project.id === activeId)?.id ?? savedProjects[0]?.id ?? "");
      setStatus("Saved. Project data was written locally and images were stored in public/assets.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to save projects.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = () => {
    clearAdminSession();
    navigate("/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-background bg-dots px-4 py-8 text-foreground">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-foreground/60">Local project manager</p>
            <h1 className="mt-2 text-3xl font-semibold md:text-4xl">Admin panel</h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="h-4 w-4" />
              Portfolio
            </Button>
            <Button variant="secondary" onClick={handleLogout}>
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </header>

        <form onSubmit={handleSave} className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-lg border border-border bg-card/80 p-4">
            <Button className="mb-4 w-full" type="button" onClick={handleAddProject}>
              <Plus className="h-4 w-4" />
              Add project
            </Button>

            <div className="space-y-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  className={`w-full rounded-md border px-3 py-3 text-left transition ${
                    activeProject?.id === project.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background/40 hover:bg-secondary"
                  }`}
                >
                  <span className="block truncate text-sm font-medium">
                    {project.title || "Untitled project"}
                  </span>
                  <span className="mt-1 block truncate text-xs text-foreground/55">
                    {project.link || "No live link"}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <section className="rounded-lg border border-border bg-card/85 p-4 md:p-6">
            {activeProject ? (
              <>
                <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm text-foreground/60">Editing</p>
                    <h2 className="mt-1 text-2xl font-semibold">
                      {activeProject.title || "Untitled project"}
                    </h2>
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => handleDeleteProject(activeProject.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>

                <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
                  <div className="space-y-4">
                    <label className="block">
                      <span className="mb-2 block text-sm text-foreground/75">Title</span>
                      <Input
                        value={activeProject.title}
                        onChange={(event) => updateProject(activeProject.id, { title: event.target.value })}
                        required
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm text-foreground/75">Description</span>
                      <Textarea
                        value={activeProject.description}
                        onChange={(event) =>
                          updateProject(activeProject.id, { description: event.target.value })
                        }
                        className="min-h-32"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm text-foreground/75">
                        Tech stack, separated by commas
                      </span>
                      <Input
                        value={activeProject.tech}
                        onChange={(event) => updateProject(activeProject.id, { tech: event.target.value })}
                        placeholder="React, TypeScript, Tailwind CSS"
                        required
                      />
                    </label>

                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm text-foreground/75">Live link</span>
                        <Input
                          value={activeProject.link}
                          onChange={(event) =>
                            updateProject(activeProject.id, { link: event.target.value })
                          }
                          required
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm text-foreground/75">GitHub link</span>
                        <Input
                          value={activeProject.github}
                          onChange={(event) =>
                            updateProject(activeProject.id, { github: event.target.value })
                          }
                          placeholder="#"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="mb-2 block text-sm text-foreground/75">GitHub note</span>
                      <Input
                        value={activeProject.githubNote}
                        onChange={(event) =>
                          updateProject(activeProject.id, { githubNote: event.target.value })
                        }
                        placeholder="Optional note for private repositories"
                      />
                    </label>
                  </div>

                  <div>
                    <div className="overflow-hidden rounded-lg border border-border bg-background">
                      {activeProject.image ? (
                        <img
                          src={activeProject.image}
                          alt={activeProject.title || "Project preview"}
                          className="aspect-video w-full object-cover"
                        />
                      ) : (
                        <div className="flex aspect-video w-full items-center justify-center bg-secondary text-sm text-foreground/55">
                          No image selected
                        </div>
                      )}
                    </div>

                    <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-3 text-sm transition hover:bg-accent">
                      <ImagePlus className="h-4 w-4" />
                      Upload project image
                      <input
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handleImageChange}
                      />
                    </label>

                    <Input
                      className="mt-3"
                      value={activeProject.image}
                      onChange={(event) => updateProject(activeProject.id, { image: event.target.value })}
                      placeholder="/assets/example.png"
                      required
                    />

                    <div className="mt-4 flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <a href={activeProject.link || "#"} target="_blank" rel="noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <a href={activeProject.github || "#"} target="_blank" rel="noreferrer">
                          <Github className="h-4 w-4" />
                          Repo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-5 md:flex-row md:items-center md:justify-between">
                  <p className="min-h-5 text-sm text-foreground/65">{status}</p>
                  <Button type="submit" disabled={isSaving}>
                    <Save className="h-4 w-4" />
                    {isSaving ? "Saving..." : "Save changes"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="flex min-h-72 flex-col items-center justify-center gap-4 text-center">
                <p className="text-foreground/70">No projects yet.</p>
                <Button type="button" onClick={handleAddProject}>
                  <Plus className="h-4 w-4" />
                  Add project
                </Button>
              </div>
            )}
          </section>
        </form>
      </div>
    </main>
  );
};

export default Admin;
