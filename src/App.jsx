import React from "react";
import './App.css';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const App = () => {
  return (
    <div className="app">
      <div className="hero" style={{ backgroundImage: 'url(/teach.jpg)' }}>
        <div className="overlay">
          <h1 className="glitch" data-text="STEVEN MIDFIELD">RAGHAV SRIRAM</h1>
          <p className="subtitle">Quantum Computing Researcher. Electronic Engineer. Hobbyist Hacker.</p>
          <br></br>
          <div className="icons">
            <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com/@deranged_engineer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <section className="intro">
        <h2>// personal-introduction</h2>
        <p>
          Hi, I’m Raghav. I thrive at the intersection of code, creativity, and chaos. My work spans low-level systems, electronics, security and quantum computing. If it’s off the beaten path, I’m probably building it.
        </p>
      </section>

      <section className="skills">
        <h2>// skills</h2>
        <div className="skills-panels">
          {[
            {
              title: "embedded",
              skills: ["C/C++", "Embedded C", "STM32", "Arduino", "ESP32", "ARM Cortex-M"]
            },
            {
              title: "electronics",
              skills: ["Logic Gates","ADC/DAC","Transistors","PID Control","Signal Processing","MultiSim"]
            },
            {
              title: "architecture",
              skills: ["ASM (x86,ARM)", "Ghidra", "Wireshark", "Static Analysis", "Protocol Fuzzing", "Binary Analysis"]
            },
            {
              title: "reversing",
              skills: ["Ghidra", "Binary Analysis", "Static Analysis", "Wireshark", "Protocol Fuzzing", "x86 Disassembly"]
            },
            {
              title: "software",
              skills: ["ReactJS", "Flask", "TKinter", "Android Studio", "HTML", "Unity"]
            },
            {
              title: "quantum computing",
              skills: ["Qiskit", "Cirq", "Q#", "PennyLane", "Key Distribution", "Error Correction"]
            }
          ].map((group, idx) => (
            <div className="skill-panel" key={idx}>
              <div className="skill-header">{`> ${group.title}`}</div>
              <div className="skill-list">
                {group.skills.map((skill, i) => (
                  <p key={i}>• {skill}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>




      <section className="gallery">
        <h2>// hobbies</h2>
        <div className="gallery-grid">
          {[
            { img: "pack1.jpg", caption: "Electronics" },
            { img: "pack2.jpg", caption: "Lockpicking" },
            { img: "pack3.jpg", caption: "Taekwondo" },
            { img: "pack4.jpg", caption: "Theatre Arts" },
            { img: "pack5.jpg", caption: "Quantum Physics" },
            { img: "pack6.jpg", caption: "Motorsports" }
          ].map((item, i) => (
            <div key={i} className="gallery-item">
              <img src={`/${item.img}`} alt={item.caption} />
              <p className="caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="projects">
        <h2>// featured-projects</h2>
        <div className="project-grid">
          {[
            {
              title: "Quantum Computing Paper",
              description: "Exploring fault tolerance in quantum computing by using error correction against noisy environments to preserve quantum information.",
            },
            {
              title: "EventHorizon CubeSat",
              description: "NLP-powered tool to detect and flag scam messages. Uses transformers for linguistic pattern analysis.",
            },
            {
              title: "ArchelonOS",
              description: "A custom bootable OS with a terminal UI and memory-mapped graphics. Built from scratch in C++ and named after an extinct turtle.",
            },
            {
              title: "Umbra Graphics Engine", 
              description: "Bare metal C++ rendering engine that uses vector graphics to display simulations of 3 dimensional geometric shapes.",
            },
            {
              title: "Quantum Neural Network",
              description: "Neural network built using pennylane. Proof of concept for Quantum Machine Learning models that can be developed.",
            },
            {
              title: "VECTOR Transportation",
              description: "Transportation device that uses linetracking, manual control, object sensing and computer vision to sort and deliver cargo.",
            },
          ].map((project, idx) => (
            <div className="project-card" key={idx}>
              <img src={`/proj${idx + 1}.jpg`} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="work-experience">
        <h2>// work-experience</h2>
        <div className="vertical-timeline">
          {[
            {
              year: "2025–2026",
              title: "Senior Command Infocomm Signaller",
              org: "Singapore Army"
            },
            {
              year: "2024–2025",
              title: "Quantum Computing Researcher",
              org: "Independant"
            },
            {
              year: "2024",
              title: "Engineering Intern",
              org: "Ferrari"
            },
            {
              year: "2023",
              title: "IT & DevOps Intern",
              org: "V-Key Technologies"
            },
            {
              year: "2022–2023",
              title: "Programming Tutor",
              org: "Independant"
            },
            {
              year: "2022",
              title: "Backend Programmer",
              org: "HAYDE!"
            }
          ].map((item, i) => (
            <div key={i} className="v-timeline-item">
              <div className="v-timeline-dot" />
              <div className="v-timeline-content">
                <div className="v-timeline-row">
                  <span className="v-timeline-role">{item.title} <span className="v-timeline-org"> {item.org}</span></span>
                  <span className="v-timeline-year">{item.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Education Cards */}
      <section className="education">
        <h2>// education</h2>
        <div className="card-grid">
          {[
            {
              title: "Victoria Junior College",
              years: "2023–2024",
              details: "Computing Talent Development Program",
              subjects: "H2 Computing, H2 Physics, H2 Maths, H1 Economics, H1 General Paper"
            },
            {
              title: "Victoria School",
              years: "2019–2022",
              details: "Integrated Program, STEM Talent Development Program",
              subjects: "Physics, Chemistry, IP Maths, IP English, History, English Lit, Higher Tamil"
            }
          ].map((edu, i) => (
            <div className="edu-card" key={i}>
              <h3>{edu.title}</h3>
              <span className="edu-years">{edu.years}</span>
              <p>{edu.details}</p>
              <p style={{ color: "grey", fontSize: "0.75rem" }}>{edu.subjects}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="awards">
        <h2>// awards</h2>
        <div className="award-wall">
          {[
            "Passionate Learner Award 2022",
            "School Distinguished Service Award 2022",
            "Intl Math Modelling Merit Award 2022",
            "Singapore Physics League HM 2023",
            "S’pore Junior Physics Olympiad HM 2022",
            "Academic Improvement Award 2021",
            "EAGLES Award (2017, 2018, 2022)",
            "FPS Int’l Champions 2017",
            "Passionate Learner Award 2022",
            "FPS Int’l Vice-Champions 2018",
            "CMPS Champions 2017",
            "CMPS Champions 2016"
          ].map((award, idx) => (
            <div
              className={`award-badge ${idx%1 === 0 ? "badge-glow" : "badge-outline"}`}
              key={idx}
            >
              🏆 {award}
            </div>
          ))}
        </div>
      </section>


      {/* Extracurricular Cloud */}
      <section className="extracurriculars">
        <h2>// extracurriculars</h2>
        <div className="tag-cloud">
          {[
            "VJC Cybersecurity 2023 – Founder",
            "VS Infocomm 2021 – President",
            "VJC Robotics 2023 – Electronics Head",
            "VS Physics SIG 2020 – Founder",
            "VJC Computing TDP 2023 – Cohort In Charge",
            "VS Physics TDP 2022 – Member",
            "VS Math TDP 2022 – Member",
            "VS Social Innovation Board 2020 - Leader",
            "VS InfoTech Department 2022 - Representative",
            "VS Monitor's Council 2019 - Member",
            "VS AI Student Group 2022 – Founding Member",
            "People's Association - Grassroots Leader",
            "CZ Innovation 2018 – Public Relations Officer",
            "The LENZ Project – Software Lead",
            "PRW Drones Tech & Law – Founding Member",
            "CZ Shark Scouts 2017 – President"

          ].map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      </section>

      {/* Competitions & Workshops */}
      <section className="competitions">
        <h2>// competitions & workshops</h2>
        <div className="highlight-board">
          {[
            "NUS HackNRoll 2024 – Organiser",
            "DSTA-DSO-VJC Robo Challenge 2023 – Emcee",
            "Ntnl Thunkable Hackathon 2020 – Organiser",
            "VS Mock-NOI 2023 – Organiser",
            "Decode & Conquer 2024 – Instructor",
            "MultiLayer CyberSec 2024 – Lead",
            "VSIFC Competitive C++ 2023 – Trainer",
            "VSIFC Youth Outreach 2019 – Emcee",
            "Victoria Challenge 2019 – Organiser",
            "BuildingBloCS 2023 – HR Organiser",
            "Project V 2023 – Emcee"

          ].map((event, i) => (
            <div className="highlight-item" key={i}>{event}</div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Contact Me : raghav@mensa.sg</p>
      </footer>
    </div>
  );
};

export default App;