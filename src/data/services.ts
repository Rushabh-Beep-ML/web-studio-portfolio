// The three WEBNITY service divisions. Edit copy here; components read from this file.
export type Division = {
  slug: string;
  title: string;
  summary: string;
  services: string[];
  icon: "code" | "design" | "ai";
};

export const divisions: Division[] = [
  {
    slug: "software-engineering",
    title: "Software Engineering",
    summary: "Reliable, scalable software built on sound architecture, from the interface to the database.",
    icon: "code",
    services: [
      "Full-stack development",
      "Custom software solutions",
      "Backend engineering",
      "API development and integration",
      "Database architecture",
      "Web application development",
      "System integration",
    ],
  },
  {
    slug: "digital-experiences",
    title: "Digital Experiences",
    summary: "Considered, accessible interfaces and design systems that make products clear to use.",
    icon: "design",
    services: [
      "UI/UX design",
      "Website design and development",
      "Responsive interfaces",
      "Digital product design",
      "Prototyping",
      "Design systems",
      "User experience optimisation",
    ],
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    summary: "Practical AI and automation that turns data into decisions and removes repetitive work.",
    icon: "ai",
    services: [
      "Machine learning applications",
      "AI-powered solutions",
      "Predictive analytics",
      "Intelligent automation",
      "Data-driven applications",
      "AI integrations",
      "Experimental AI systems",
    ],
  },
];
