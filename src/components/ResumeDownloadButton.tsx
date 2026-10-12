"use client";

export default function ResumeDownloadButton() {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!window.confirm("Download Jonathan's resume as a PDF?")) {
      e.preventDefault();
    }
  }

  return (
    <a
      href="/resume.pdf"
      download
      onClick={handleClick}
      className="rounded-full border border-black/10 px-5 py-2.5 transition-colors hover:bg-black/[.04] dark:border-white/15 dark:hover:bg-white/[.06]"
    >
      Resume
    </a>
  );
}
