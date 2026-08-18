import {
  siJavascript, siTypescript, siPython, siOpenjdk, siGo, siHtml5, siCss,
  siNodedotjs, siExpress, siFastapi, siDjango, siPostman,
  siReact, siNextdotjs, siTailwindcss,
  siMongodb, siPostgresql, siMysql, siRedis, siSupabase, siFirebase, siPrisma,
  siDocker, siKubernetes, siHelm, siApachekafka, siLinux, siGit, siGithub,
  siLangchain, siHuggingface, siKeras, siScikitlearn, siNumpy, siPandas, siScipy,
} from 'simple-icons';

type Icon = { path: string; hex: string; title: string };

/** Skill label as written in constants.ts -> brand mark. */
const ICONS: Record<string, Icon> = {
  JavaScript: siJavascript, TypeScript: siTypescript, Python: siPython,
  Java: siOpenjdk, Go: siGo, HTML: siHtml5, CSS: siCss,
  'Node.js': siNodedotjs, 'Express.js': siExpress, FastAPI: siFastapi,
  Django: siDjango, Postman: siPostman,
  React: siReact, 'Next.js': siNextdotjs, 'Tailwind CSS': siTailwindcss,
  'React Native': siReact,
  MongoDB: siMongodb, PostgreSQL: siPostgresql, MySQL: siMysql, Redis: siRedis,
  Supabase: siSupabase, Firebase: siFirebase, 'Prisma ORM': siPrisma,
  Docker: siDocker, Kubernetes: siKubernetes, Helm: siHelm, Kafka: siApachekafka,
  Linux: siLinux, 'Git & GitHub': siGithub, Git: siGit, GitHub: siGithub,
  LangChain: siLangchain, LangGraph: siLangchain, 'Hugging Face': siHuggingface,
  Keras: siKeras, 'Scikit-learn': siScikitlearn, NumPy: siNumpy,
  Pandas: siPandas, SciPy: siScipy,
};

/**
 * Several brand colours are pure black (Next.js, Express, Prisma) and would be
 * invisible on this page. Anything below a luminance floor falls back to the
 * page's text colour instead of its official hex.
 */
function readableColor(hex: string): string {
  const n = parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.25 ? 'var(--text)' : `#${hex}`;
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const icon = ICONS[name];

  // Concepts rather than products (REST APIs, Distributed Systems, RAG) have no
  // brand mark; a neutral glyph keeps the row rhythm intact.
  if (!icon) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="none">
        <circle cx="12" cy="12" r="7" stroke="var(--text-muted)" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.4" fill="var(--text-muted)" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill={readableColor(icon.hex)}>
      <path d={icon.path} />
    </svg>
  );
}
