import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TeamPreview from "./sections/TeamPreview";
import CollaborationCTA from "./sections/CollaborationCTA";
import Button from "./components/Button";

function TeamPage() {
  return (
    <>
      <TeamPreview />
      <CollaborationCTA />
    </>
  );
}

function ContactPage() {
  return (
    <section className="section container contact-page">
      <div>
        <span className="eyebrow">Contact WEBNITY</span>
        <h1>Let's build something <span className="accent-text">meaningful.</span></h1>
        <p className="section-description">Have a project or an idea? Get in touch and start a conversation with our team.</p>
        <div style={{ marginTop: 30 }}>
          <a className="btn btn-primary" href="mailto:hello@webnity.com">Email Us ↗</a>
        </div>
        <p className="section-description" style={{ fontSize: 11 }}>Replace hello@webnity.com with your real business email before publishing.</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={
              <section className="section container contact-page">
                <div>
                  <span className="eyebrow">404 / Not Found</span>
                  <h1>Page <span className="accent-text">not found.</span></h1>
                  <Button to="/">Back to Home</Button>
                </div>
              </section>
            } />
          </Routes>
        </main>
        <footer className="footer">
          <div className="container">© {new Date().getFullYear()} WEBNITY. Engineering ideas into digital reality.</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
