// Editable team content. Names, photos and social links are placeholders
// until the founders supply real details. Do not invent details here.
export type TeamMember = {
  id: string;
  name: string | null;   // null renders the "Name to be added" placeholder
  designation: string;
  description: string;
  photo?: string;        // path under /public once supplied
  socials?: { label: string; href: string }[];
};

export const team: TeamMember[] = [
  {
    id: "full-stack",
    name: null,
    designation: "Full-Stack Developer",
    description:
      "Leads end-to-end product development, connecting refined interfaces to dependable back-end systems and guiding each application from architecture through to deployment.",
  },
  {
    id: "backend",
    name: null,
    designation: "Backend Developer",
    description:
      "Designs the secure, high-performance services behind every product, from API architecture and data modelling to authentication and long-term reliability.",
  },
  {
    id: "ui-ux",
    name: null,
    designation: "UI/UX Designer",
    description:
      "Shapes how products look and feel, translating user needs into clear, accessible interfaces and cohesive design systems.",
  },
  {
    id: "ai-ml",
    name: null,
    designation: "AI/ML Engineer",
    description:
      "Builds intelligent capabilities that turn data into insight and automation, from predictive models to AI-powered applications.",
  },
];
