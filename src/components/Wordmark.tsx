import { Link } from "react-router-dom";

export default function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="WEBNITY home">
      WEB<span>NITY</span>
    </Link>
  );
}
