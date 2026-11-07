
import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import IconCircle from "../components/IconCircle";
import { divisions } from "../data/services";

export default function ServiceDivisions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section container" id="services">
      <SectionHeading
        badge="What We Do"
        title="Explore Our"
        accent="Divisions"
        description="Three complementary disciplines, working together to deliver considered digital solutions."
      />

      <div className="service-grid">
        {divisions.map((division, index) => (
          <motion.article
            key={division.slug}
            className="glass-card service-card"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 28 }
            }
            whileInView={
              shouldReduceMotion
                ? undefined
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
              ease: "easeOut",
            }}
          >
            <div className="service-card-top">
              <span className="service-index">
                0{index + 1}
              </span>
              <span className="service-status">
                WEBNITY DIVISION
              </span>
            </div>

            <div className="service-icon-wrap">
              <div className="service-icon-panel">
                <IconCircle icon={division.icon} />
              </div>
            </div>

            <div className="service-content">
              <h3>{division.title}</h3>

              <p className="service-description">
                {division.summary}
              </p>

              <div className="service-divider" />

              <span className="service-list-label">
                OUR CAPABILITIES
              </span>

              <ul className="service-list">
                {division.services.slice(0, 5).map((service) => (
                  <li key={service}>
                    <span className="service-bullet" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="service-card-glow" />
          </motion.article>
        ))}
      </div>
    </section>
  );
}
