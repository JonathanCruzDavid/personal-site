import Image from "next/image";
import ResumeDownloadButton from "@/components/ResumeDownloadButton";

const projects = [
  {
    name: "Riffstub",
    tag: "Next.js · TypeScript · React · PostgreSQL · Supabase · Vercel",
    description:
      "A full-stack concert tracking app, designed, built, and deployed solo, from database schema through production hosting on a custom domain.",
    bullets: [
      "Email/password login with optional TOTP two-factor, using Supabase/PostgreSQL row-level security to restrict each user's data at the database level",
      "Custom content moderation with automated filtering and an admin review queue, plus database-backed rate limiting, without third-party services",
      "Continuous deployment through Vercel's Git integration, building and deploying on every push to main",
    ],
    link: "https://riffstub.com",
    linkLabel: "riffstub.com",
    codeLink: "https://github.com/JonathanCruzDavid/riffstub",
    screenshots: [
      { src: "/riffstub-landing.png", alt: "Riffstub landing page" },
      { src: "/riffstub-preview.png", alt: "Riffstub artist show page for Tame Impala" },
    ],
  },
  {
    name: "Set → Playlist",
    tag: "Python · Spotify API · YouTube Data API",
    description:
      "A fun side project: paste a YouTube DJ set and get a Spotify playlist of every track in it, with fuzzy matching to find the right version of each song.",
    bullets: [
      "Parses tracklists from video descriptions, chapters, or comments, cleaning up timestamps, tags, and promo text",
      "Scores each Spotify match on title and artist similarity, flagging uncertain ones for manual review",
      "Runs as either a CLI or a browser UI, with tests backing the matching logic",
    ],
    codeLink: "https://github.com/JonathanCruzDavid/set-to-playlist",
  },
];

const experience = {
  title: "Software Administrator (Software Engineer)",
  company: "Friedman Vartolo LLP",
  location: "Garden City, NY",
  dates: "Dec 2023 – Oct 2026",
  bullets: [
    "Built an automation dashboard that auto-classified incoming case updates from a third-party servicing platform and applied handling rules automatically, eliminating manual entry for the boarding team. Automated 1,495 processes across 71,000+ case updates, saving 479+ hours to date and on pace for 850+ annually.",
    "Trained an internal Claude-based AI agent to research tickets, query the firm's databases, generate reports, and carry out tasks through Playwright and API calls, refining it until it reliably handled more than half of straightforward tickets with a human-approved plan.",
    "Developed full-stack internal applications with Streamlit and FastAPI, deployed to Azure via Docker and YAML-based CI/CD pipelines, including tools for case reports, staff workflow automation, and live process monitoring.",
    "Trained custom Azure Machine Learning models to extract data from vendor invoices, reconciling it against internal case and payment records to confirm payments and flag discrepancies.",
    "Integrated SQL queries with dynamic templates to auto-generate case-specific court filings and client documents (motions, affidavits) as cases progressed.",
  ],
};

const upcoming = [
  {
    name: "Riffstub for Android",
    status: "In progress · Coming to Google Play",
    tag: "Kotlin · Jetpack Compose · Supabase · Coroutines/Flow",
    description:
      "A native Android client for Riffstub, built solo from scratch. It shares the website's backend, so accounts, privacy, and moderation behave the same on both.",
    bullets: [
      "MVVM with one ViewModel per screen, type-safe Navigation Compose routes, and a five-tab bottom bar with a separate back stack per tab",
      "Authorization handled entirely by PostgreSQL row-level security and security-definer functions, so no separate mobile API is needed",
      "Ticketmaster, SeatGeek, and Spotify calls proxied through the website's API routes, so no API keys ship in the APK",
      "Feed, follows, private accounts, nearby-show discovery, TOTP sign-in, and in-app report, block, and account deletion",
    ],
    codeLink: "https://github.com/JonathanCruzDavid/riffstub-android",
  },
];

const skills = [
  { group: "Languages", items: ["Python", "SQL", "JavaScript", "TypeScript", "C++"] },
  { group: "AI Tools", items: ["Claude", "GitHub Copilot", "OpenAI Codex", "Gemini"] },
  { group: "Web / Backend", items: ["FastAPI", "React", "Next.js", "Supabase", "Vite"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"] },
  { group: "Cloud & DevOps", items: ["Azure", "Vercel", "Docker", "CI/CD (YAML pipelines)", "Git", "Doppler", "Playwright"] },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b border-black/10 bg-background/80 backdrop-blur dark:border-white/10">
        <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 text-sm">
          <span className="font-medium">Jonathan David Cruz</span>
          <div className="flex gap-4 text-zinc-600 sm:gap-6 dark:text-zinc-400">
            <a href="#about" className="hover:text-foreground">About</a>
            <a href="#experience" className="hover:text-foreground">Experience</a>
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
            Jonathan David Cruz
          </h1>
          <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            3 years building backend systems and automating manual
            workflows, including an internal Claude-based AI agent that
            handles support tickets. Now focused on backend and
            automation-heavy engineering roles.
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
            <ResumeDownloadButton />
          </div>
        </section>

        <section id="about" className="flex flex-col gap-4 scroll-mt-20">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            About
          </h2>
          <p className="max-w-xl leading-8 text-zinc-700 dark:text-zinc-300">
            I spent three years as a Software Administrator (functionally a
            software engineer) at Friedman Vartolo LLP, a law firm, building
            backend systems with Python, SQL, FastAPI, and Azure. I trained
            an internal Claude-based AI agent that researches tickets,
            queries databases, and carries out tasks through Playwright and
            API calls, and built an automation dashboard that has saved the
            firm 479+ hours of manual entry. I also trained ML models to
            pull data out of vendor invoices. Outside of work I build things
            end to end, like{" "}
            <a
              href="https://riffstub.com"
              className="font-medium underline underline-offset-4 hover:text-foreground"
            >
              Riffstub
            </a>
            , a concert tracking app I designed and shipped solo, and its
            native Android app, which I&apos;m building now.
          </p>
          <p className="max-w-xl leading-8 text-zinc-700 dark:text-zinc-300">
            I graduated from SUNY College of Old Westbury with a B.S. in
            Computer and Information Science in 2022.
          </p>
        </section>

        <section id="experience" className="flex flex-col gap-6 scroll-mt-20">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Experience
          </h2>
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold">{experience.title}</h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {experience.dates}
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {experience.company} · {experience.location}
            </p>
            <ul className="flex flex-col gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-zinc-400 dark:text-zinc-600">–</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
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
                  <div className="flex gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                      >
                        {project.linkLabel}
                      </a>
                    )}
                    {"codeLink" in project && project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground"
                      >
                        View code
                      </a>
                    )}
                  </div>
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

        <section id="upcoming" className="flex flex-col gap-8 scroll-mt-20">
          <h2 className="text-sm font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            Upcoming
          </h2>
          <div className="flex flex-col gap-10">
            {upcoming.map((project) => (
              <div
                key={project.name}
                className="flex flex-col gap-3 rounded-xl border border-dashed border-black/15 p-5 dark:border-white/15"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold">{project.name}</h3>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-foreground dark:text-zinc-400"
                  >
                    View code
                  </a>
                </div>
                <span className="w-fit rounded-full bg-black/[.05] px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-white/[.08] dark:text-zinc-300">
                  {project.status}
                </span>
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
            Feel free to reach out. I&apos;m always open to talking about new
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
            <a
              href="https://github.com/JonathanCruzDavid"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-6 text-center text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-400">
        © {new Date().getFullYear()} Jonathan David Cruz
      </footer>
    </div>
  );
}
