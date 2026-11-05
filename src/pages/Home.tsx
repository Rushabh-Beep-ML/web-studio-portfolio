import Hero from "../sections/Hero";
import CompanyIntro from "../sections/CompanyIntro";
import ServiceDivisions from "../sections/ServiceDivisions";
import FeaturedProjects from "../sections/FeaturedProjects";
import ApproachTimeline from "../sections/ApproachTimeline";
import TeamPreview from "../sections/TeamPreview";
import CollaborationCTA from "../sections/CollaborationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServiceDivisions />
      <FeaturedProjects />
      <ApproachTimeline />
      <TeamPreview />
      <CollaborationCTA />
    </>
  );
}
