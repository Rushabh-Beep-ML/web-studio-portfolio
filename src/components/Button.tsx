import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Props = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ to, children, variant = "primary" }: Props) {
  return (
    <Link to={to} className={`btn ${variant === "primary" ? "btn-primary" : "btn-secondary"}`}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}
