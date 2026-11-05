import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const items = [
  {
    label: "Our Mission",
    title: "Make technology work for people.",
    text: "We turn complex challenges into dependable, accessible and practical digital products through thoughtful engineering.",
  },
  {
    label: "Our Vision",
    title: "Build what comes next.",
    text: "We believe intelligent technology, considered design and collaboration can create lasting value.",
  },
];

export default function CompanyIntro() {
  return (
    <section className="section container" id="about">
      <SectionHeading badge="Who We Are" title="Technology with" accent="Purpose" description="A multidisciplinary technology team bringing software, design and artificial intelligence together." />
      <div className="mission-grid">
        {items.map((item, index) => (
          <motion.article key={item.label} className="glass-card info-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }}>
            <span className="card-kicker">{item.label}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
