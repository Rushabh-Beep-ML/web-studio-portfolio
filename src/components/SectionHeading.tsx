type Props = {
  badge: string;
  title: string;
  accent: string;
  description?: string;
};

export default function SectionHeading({ badge, title, accent, description }: Props) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{badge}</span>
      <h2 className="section-title">{title} <span className="accent-text">{accent}</span></h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
