import { useNavigate, useLocation } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    
  return (
    <>
      <section className="hero-new">
        <div className="hero-inner">
          <div className="hero-name">RAGHAV SRIRAM</div>
          <div className="hero-sub">
            Quantum computing research, electronics, low-level systems, and security.
            Building things that feel like expeditions.
          </div>

          <div className="cta-row">
            <Link className="btn primary" to="/hobbies">Explore Hobbies</Link>
            <a className="btn" href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="btn" href="https://osf.io/e67tz" target="_blank" rel="noopener noreferrer">Publication</a>
          </div>
        </div>
      </section>

      {/* Then port your intro/skills/projects/work/education/awards/etc unchanged */}
    </>
  );
}
