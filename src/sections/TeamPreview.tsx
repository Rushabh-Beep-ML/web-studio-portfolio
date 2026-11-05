import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";
import { team } from "../data/team";

export default function TeamPreview() {
  return (
    <section className="section container" id="team">
      <SectionHeading badge="The People" title="Meet the" accent="Team" description="A multidisciplinary team bringing together complementary technical and creative skills." />
      <div className="team-grid">
        {team.map((member, index) => (
          <motion.div key={member.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
            <TeamCard member={member} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
