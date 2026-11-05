import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const steps = [
  { year: "01 / DISCOVER", title: "Understand the challenge", description: "We study the problem, the users and the constraints before shaping a considered solution." },
  { year: "02 / DESIGN", title: "Shape the experience", description: "Architecture and interface design evolve together, keeping structure and experience aligned." },
  { year: "03 / BUILD", title: "Engineer with intent", description: "Iterative development, thoughtful reviews, testing and regular communication guide the process." },
  { year: "04 / DEPLOY", title: "Launch and evolve", description: "A considered release, performance refinement and documentation prepare the product to grow." },
];

export default function ApproachTimeline() {
  const reduce = useReducedMotion();

  return (
    <section className="section container" id="approach">
      <SectionHeading badge="Our Process" title="How We" accent="Build" description="A clear, collaborative process from the first conversation to the final release." />
      <div className="timeline-wrap">
        <div className="timeline-list">
          {steps.map((step, index) => (
            <motion.div
              key={step.year}
              className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
              initial={reduce ? false : { opacity: 0, x: index % 2 === 0 ? -55 : 55, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: .75, delay: index * .08 }}
            >
              <span className="timeline-point" />
              <article className="timeline-card">
                <div className="timeline-year">{step.year}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
