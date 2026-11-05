import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import IconCircle from "../components/IconCircle";
import { divisions } from "../data/services";

export default function ServiceDivisions() {
  return (
    <section className="section container" id="services">
      <SectionHeading badge="What We Do" title="Explore Our" accent="Divisions" description="Three complementary disciplines, working together to deliver considered digital solutions." />
      <div className="service-grid">
        {divisions.map((division, index) => (
          <motion.article key={division.slug} className="glass-card service-card" initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .12 }}>
            <IconCircle icon={division.icon} />
            <h3>{division.title}</h3>
            <p>{division.summary}</p>
            <ul className="service-list">
              {division.services.slice(0, 5).map((service) => <li key={service}>{service}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
