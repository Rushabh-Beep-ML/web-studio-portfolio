import { motion, useReducedMotion } from "framer-motion";
import Button from "../components/Button";

const facts = [
  { value: "3", label: "Service divisions" },
  { value: "4", label: "Founding specialists" },
  { value: "∞", label: "Ideas to explore" },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero">
      <div className="hero-glow" />
      <motion.div
        className="container hero-content"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow">Engineering the Future</span>
        <h1>Engineering Ideas <span>into Digital Reality.</span></h1>
        <p className="hero-copy">
          We combine software engineering, thoughtful design and artificial intelligence to transform ambitious ideas into scalable digital experiences.
        </p>
        <div className="hero-actions">
          <Button to="#projects">Explore Our Work</Button>
          <Button to="/contact" variant="secondary">Let's Collaborate</Button>
        </div>
        <div className="hero-stats">
          {facts.map((fact) => (
            <div key={fact.label}>
              <div className="stat-value">{fact.value}</div>
              <div className="stat-label">{fact.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
