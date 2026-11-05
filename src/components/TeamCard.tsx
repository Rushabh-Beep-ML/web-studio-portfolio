import type { TeamMember } from "../data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="glass-card team-card">
      <div className="team-photo">
        {member.photo
          ? <img src={member.photo} alt={member.name ?? member.designation} loading="lazy" />
          : <span aria-hidden="true">✧</span>}
      </div>
      <h3>{member.name ?? "Name to be added"}</h3>
      <div className="team-role">{member.designation}</div>
      <p>{member.description}</p>
    </article>
  );
}
