import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ to, children, variant = "primary" }: Props) {
  const className = `btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`;
  const content = (
    <>
      {children}
      <span aria-hidden="true">↗</span>
    </>
  );

  if (to.startsWith("#")) {
    return <a href={to} className={className}>{content}</a>;
  }

  return <Link to={to} className={className}>{content}</Link>;
}