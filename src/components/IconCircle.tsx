type Props = { icon: "code" | "design" | "ai" };

const icons = {
  code: "</>",
  design: "✳",
  ai: "✧",
};

export default function IconCircle({ icon }: Props) {
  return <div className="icon-orb" aria-hidden="true">{icons[icon]}</div>;
}
