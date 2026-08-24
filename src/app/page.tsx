import Image from "next/image";

const projects = [
  {
    name: "Riffstub",
    tag: "Next.js · TypeScript · PostgreSQL · Vercel",
    description:
      "A full-stack concert tracking app, designed, built, and deployed solo — from database schema through production hosting on a custom domain.",
    bullets: [
      "Email/password auth with optional TOTP two-factor, and PostgreSQL row-level security to lock down each user's data",
      "Integrated Ticketmaster, SeatGeek, and Spotify with custom rate limiting and attribution",
      "Built a custom content moderation system with automated filtering and an admin review queue",
    ],
    link: "https://riffstub.com",
    linkLabel: "riffstub.com",
    screenshots: [
      { src: "/riffstub-landing.png", alt: "Riffstub landing page" },
      { src: "/riffstub-preview.png", alt: "Riffstub artist show page for Tame Impala" },
    ],
  },
  {
    name: "Document Reader",
    tag: "Python · Azure Machine Learning",
    description:
      "A tool that automatically extracts key fields — invoice numbers, case details — from unstructured PDF documents.",
    bullets: [
      "Trained a custom Azure ML document labeling model to improve parsing accuracy across document formats",
      "Exported structured output to Excel for easier reporting and tracking",
      "Cut manual data entry and reduced human error in document-heavy workflows",
    ],
  },
];

const skills = [
  { group: "Languages", items: ["Python", "SQL", "JavaScript", "C++"] },
  { group: "Web / Backend", items: ["FastAPI", "React", "Next.js", "Supabase", "Vite"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
  { group: "Cloud & DevOps", items: ["Azure", "Vercel", "Docker", "Git", "Doppler", "Playwright"] },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <span className="font-medium">Jonathan Cruz</span>
          <div className="flex gap-6 text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-24 px-6 py-20">
        <section className="flex flex-col gap-4">
          <Image
            src="/jonathan.png"
            alt="Jonathan Cruz"
            width={96}
            height={96}
            priority
            className="h-24 w-24 rounded-full object-cover"
          />
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Queens, NY</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Jonathan Cruz
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            2.5+ years of experience building full-stack applications and
            automation tools — from production web apps to internal tools
            that save teams hours of manual work.
          </p>
          <div className="flex gap-4 pt-2 text-sm font-medium">
            <a
              href="#projects"
              className="rounded-full bg-foreground px-5 py-2.5 text-background transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-300"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/10 px-5 py-2.5 transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]"
            >
              Get in touch
            </a>
          </div>
        </section>

        <section id="about" className="flex flex-col gap-4 scroll-mt-20">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            About
          </h2>
          <p className="max-w-xl leading-8 text-zinc-700 dark:text-zinc-300">
            I&apos;m a Software Administrator at Friedman Vartolo LLP, where I build
            full-stack applications with Streamlit and FastAPI, deployed to
            Azure — tools for generating case reports, automating repetitive
            workflows, and monitoring processes across legal and IT teams. I
            also build things on my own time, like{" "}
            <a
              href="https://riffstub.com"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              Riffstub
            </a>
            , a concert tracking app I designed and shipped solo.
          </p>
          <p className="max-w-xl leading-8 text-zinc-700 dark:text-zinc-300">
            I graduated from SUNY Old Westbury with a B.S. in Computer and
            Information Science in 2022.
          </p>
        </section>

        <section id="projects" className="flex flex-col gap-8 scroll-mt-20">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Projects
          </h2>
          <div className="flex flex-col gap-10">
            {projects.map((project) => (
              <div key={project.name} className="flex flex-col gap-3">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline underline-offset-4"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 hover:text-foreground dark:text-zinc-400"
                    >
                      {project.linkLabel}
                    </a>
                  )}
                </div>
                <p className="text-xs font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
                  {project.tag}
                </p>
                <p className="leading-7 text-zinc-700 dark:text-zinc-300">
                  {project.description}
                </p>
                <ul className="flex flex-col gap-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="text-zinc-400 dark:text-zinc-600">–</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {"screenshots" in project && project.screenshots && (
                  <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                    {project.screenshots.map((shot) => (
                      <a
                        key={shot.src}
                        href={shot.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-lg border border-black/10 dark:border-white/15"
                      >
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={1440}
                          height={900}
                          className="h-auto w-full"
                        />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Skills
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.group} className="flex flex-col gap-2">
                <p className="text-sm font-medium">{skill.group}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-600 dark:border-white/15 dark:text-zinc-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col gap-4 scroll-mt-20 pb-8">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Contact
          </h2>
          <p className="max-w-xl leading-8 text-zinc-700 dark:text-zinc-300">
            Feel free to reach out — I&apos;m always open to talking about new
            projects or opportunities.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            <a
              href="mailto:davidcruzjonathan@gmail.com"
              className="underline underline-offset-4 hover:text-foreground"
            >
              davidcruzjonathan@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-cruz-49460b1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-6 text-center text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        © {new Date().getFullYear()} Jonathan Cruz
      </footer>
    </div>
  );
}
