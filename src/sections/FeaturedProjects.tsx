import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const projects = [
  { number: "01", title: "Digital Platforms", category: "Software Engineering", text: "Scalable web platforms designed around performance, usability and dependable architecture.", symbol: "{ }" },
  { number: "02", title: "Intelligent Systems", category: "Artificial Intelligence", text: "Practical AI concepts that transform information into useful insights and workflows.", symbol: "✧" },
  { number: "03", title: "Modern Experiences", category: "Digital Experiences", text: "Clear, responsive and accessible interfaces built around the people who use them.", symbol: "◈" },
];

export default function FeaturedProjects() {
  return (
    <section className="section container" id="projects">
      <SectionHeading badge="Selected Work" title="Ideas into" accent="Experiences" description="A glimpse into the areas where engineering, creativity and technology come together." />
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article key={project.number} className="glass-card project-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }}>
            <div className="project-visual">{project.symbol}</div>
            <div className="project-category">{project.category}</div>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
