import { profile, projects, skills } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen px-5 py-6 text-slate-100 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <header className="sticky top-4 z-20 mb-16 rounded-full border border-white/10 bg-slate-950/70 px-5 py-3 backdrop-blur">
          <nav className="flex items-center justify-between gap-4">
            <a href="#home" className="text-sm font-bold tracking-wide text-white">
              Jose Cortina
            </a>

            <div className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-sky-300">
                  {item.label}
                </a>
              ))}
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
              GitHub
            </a>
          </nav>
        </header>

        <section id="home" className="grid min-h-[70vh] items-center gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-sky-300">
              {profile.location}
            </p>
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building full stack products with AI, automation and real-world systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I am {profile.name}, a developer focused on React, Next.js, Node.js, Python and intelligent automation. I build practical systems that connect APIs, databases, AI agents and user-friendly interfaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-sky-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-sky-300"
              >
                View Projects
              </a>
              <a
                href={profile.cvPath}
                download
                className="rounded-full border border-white/15 px-6 py-3 font-bold text-white transition hover:border-sky-300 hover:text-sky-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">Current focus</p>
            <div className="mt-6 space-y-5">
              {[
                "Full stack web applications",
                "AI assistants and automation workflows",
                "Computer vision systems connected to real environments",
                "Clean GitHub projects with production-ready deployments",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section id="about" className="py-20">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">About me</p>
              <h2 className="mt-3 text-4xl font-black text-white">Developer with a technical and creative background.</h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 leading-8 text-slate-300">
              <p>
                My background combines software development, live production systems and real-time technical problem solving. This helps me understand both the code and the operational side of a product.
              </p>
              <p className="mt-4">
                I enjoy building applications that are useful, scalable and easy to understand: dashboards, APIs, ecommerce systems, AI agents, WhatsApp integrations and computer vision tools.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Featured work</p>
              <h2 className="mt-3 text-4xl font-black text-white">Projects that show full stack skills.</h2>
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm font-bold text-sky-300 hover:text-sky-200">
              See more on GitHub →
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-300/50">
                <h3 className="text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-4 text-sm font-bold text-sky-300">
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="hover:text-sky-200">
                    Code
                  </a>
                  <a href={project.links.live} className="hover:text-sky-200">
                    Live demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="rounded-[2rem] border border-white/10 bg-sky-400 p-8 text-slate-950 sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.3em]">Contact</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black">Let’s build clean, useful and scalable software.</h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`mailto:${profile.email}`} className="rounded-full bg-slate-950 px-6 py-3 font-bold text-white">
                Email me
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-slate-950 px-6 py-3 font-bold">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-slate-950 px-6 py-3 font-bold">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
