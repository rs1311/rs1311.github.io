import React, { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import { Routes, Route, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Globe from "react-globe.gl";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTheaterMasks,
  FaFistRaised,
  FaFlagCheckered,
  FaPenNib,
  FaGamepad,
  FaLock,
  FaHome,
  FaHorseHead,
  FaGlobe,
  FaBroadcastTower,
  FaLightbulb,
  FaCode,
  FaMusic,
  FaFilm,
  FaMicrophoneAlt,
  FaAward,
  FaGlobeAsia,
  FaStar,
  FaLockOpen,
  FaMedal,
  FaCertificate,
  FaRobot,
} from "react-icons/fa";
import { FaExplosion, FaGun } from "react-icons/fa6";
import ScrollToTop from "./ScrollToTop.jsx";
/* ---------------- Pages ---------------- */

function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (path, id) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    // If already on correct page, scroll now
    if (location.pathname === path) {
      if (!scroll()) requestAnimationFrame(scroll);
      return;
    }

    // Otherwise navigate first, then wait for DOM to exist and scroll
    navigate(path);

    let tries = 0;
    const tick = () => {
      tries += 1;
      if (scroll() || tries > 120) return; // ~2s at 60fps
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return { goToSection };
}


function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    const scroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    if (location.pathname === "/") {
      if (!scroll()) requestAnimationFrame(scroll);
      return;
    }

    navigate("/");

    let tries = 0;
    const tick = () => {
      tries += 1;
      if (scroll() || tries > 60) return;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const projects = [
    { title: "ArchelonOS", description: "I built my very own simple operating system using LFS.", link: "https://github.com/rs1311/ArchelonOS", linkname: "View Github", img: "/proj1.png" },
    { title: "EventHorizon CubeSat", description: "Cube Satellite built using Raspberry PIs, Python and Linux. Capable of transmitting realtime geographical data via wireless comms.", link: "https://github.com/rs1311/eventhorizon", linkname: "View GitHub", img: "/proj2.jpg" },
    { title: "Deranged-C", description: "A programming language. Built from scratch in C++ and named after its creator.", link: "https://github.com/rs1311/Deranged-C", linkname: "View GitHub", img: "/proj3.jpg" },
    { title: "Umbra Graphics Engine", description: "Bare metal C++ rendering engine that uses vector graphics to display simulations of 3 dimensional geometric shapes.", link: "https://github.com/rs1311/UMBRA", linkname: "View GitHub", img: "/proj4.jpg" },
    { title: "Jarvis Minor", description: "An operating system that uses computer vision to interact with the GUI. Has camera, gallery, calculator and socket messaging apps.", link: "https://github.com/rs1311/Jarvis-Minor", linkname: "View GitHub", img: "/proj5.jpg" },
    { title: "VECTOR Transportation", description: "Transportation device that uses linetracking, manual control, object sensing and computer vision to sort and deliver cargo.", link: "https://www.youtube.com/playlist?list=PLplfnLT9DQYRcg-cFF8yfEpgVK5PvuqDX", linkname: "View YouTube", img: "/proj6.jpg" },
  ];

  return (
    <>
      <header className="hero2">
        <div className="hero2-bg" />
        <div className="hero2-inner">
          <div className="hero2-top">
            <div className="brandchip">
              <span className="dot" />
              <span>THE DERANGED ENGINEER</span>
              <span className="sep">/</span>
              <span>TECH</span>
            </div>

            <div className="hero2-icons">
              <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://youtube.com/@deranged_engineer" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="heroTitleRow">
            <img className="pfpTitle" src="/meraghav.jpg" alt="Raghav Sriram" loading="eager" />
            <div className="heroTitles">
              <h1 className="hero2-title">Raghav Sriram</h1>
              <h2 className="hero2-title2">Electronic Engineer · Quantum Computing Researcher</h2>
            </div>
          </div>

          <p className="hero2-sub">
            My work revolves around low-level systems, electronics, embedded, RF, data and signals. 
            If it’s off the beaten path, I’m probably building / breaking it.
          </p>
            <div className="heroQuickGrid">
              <div className="heroQuick">
                <div className="tkQuickK">Field of Expertise</div>
                <div className="tkQuickV">Electronics</div>
                <div className="tkQuickS">Low-level · signals · security</div>
              </div>

              <div className="heroQuick">
                <div className="tkQuickK">What I'm up to now</div>
                <div className="tkQuickV">Signals (Army)</div>
                <div className="tkQuickS">Building in parallel</div>
              </div>

              <div className="heroQuick">
                <div className="tkQuickK">What's next for me</div>
                <div className="tkQuickV">MEng EEE (Uni)</div>
                <div className="tkQuickS">Masters of Engineering in the UK</div>
              </div>
            </div>

          <div className="hero2-cta">
            
            <button className="btn2 primary" type="button" onClick={() => goToSection("projects")}>
              View Projects
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("skills")}>
              Skills
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("experience")}>
              Experience
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("projects")}>
              Projects
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("extras")}>
              Extras
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("certifications")}>
              Certifications
            </button>
          </div>
        </div>
      </header>

      <section className="section2" id="experience">
        <div className="sectionHead">
          <span className="sig">// experience</span>
          <span className="bar" />
        </div>

        <div className="twoCol">
          <div className="panel2">
            <h3 className="miniHead">Work</h3>
            <div className="timeline2">
              {[
                { year: "2025–PRESENT", title: "Senior Command Infocomm Signaller", org: "Singapore Army" ,     icon: <FaGun/>},
                { year: "2025–PRESENT", title: "Standards Contributor", org: "IEEE" ,     icon: <FaLightbulb/>},
                { year: "2024–PRESENT", title: "Founder & Development Head", org: "Resonance" ,     icon: <FaBroadcastTower/>},
                { year: "2024", title: "Engineering Intern", org: "Ferrari",     icon: <FaHorseHead/>},
                { year: "2023", title: "IT & DevOps Intern", org: "V-Key Technologies" ,     icon: <FaCode/>},
                { year: "2022–2023", title: "Programming Tutor", org: "Freelance" ,     icon: <FaExplosion/>},
                { year: "2022", title: "Backend Programmer", org: "HAYDE!",     icon: <FaMusic/> },
              ].map((it, i) => (
                <div className="tItem" key={i}>
                  <div className="tDot" />

                  <div className="tMain">
                    <div className="tRow">
                      <div className="tOrgRow">
                        <span className="tIcon">
                          {it.icon}
                        </span>

                        <span className="tOrg">{it.org}</span>
                      </div>
                      <span className="tYear">{it.year}</span>
                    </div>

                    <div className="tRole">{it.title}</div>
                  </div>
                </div>

              ))}
            </div>
          </div>

          <div className="panel2">
            <h3 className="miniHead">Education</h3>
            <div className="edu2">
              {[
                {
                  title: "Univeristy of __________",
                  years: "2027",
                  details: "Masters of Electrical & Electronic Engineering",
                  subjects: "Let's see what awaits :)",
                },
                {
                  title: "Victoria Junior College",
                  years: "2023–2024",
                  details: "Computing Talent Development Program",
                  subjects: "GCE A Levels - Computing, Physics, Mathematics, Economics",
                },
                {
                  title: "Victoria School",
                  years: "2019–2022",
                  details: "Physics & Math Talent Development Programs",
                  subjects: "Integrated Programme - Phys, Maths, Chem, English, E-Lit, History, HTL",
                },
              ].map((e, i) => (
                <div className="eduCard2" key={i}>
                  <div className="eduTop">
                    <div className="eduTitle">{e.title}</div>
                    <div className="eduYears">{e.years}</div>
                  </div>
                  <div className="eduDetails">{e.details}</div>
                  <div className="eduSubs">{e.subjects}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section2" id="skills">
        <div className="sectionHead">
          <span className="sig">// skills</span>
          <span className="bar" />
        </div>

        <div className="skills2">
          {[
            { title: "embedded / firmware", skills: ["C/C++", "Embedded C", "STM32", "Arduino", "ESP32", "ARM Cortex-M"] },
            { title: "electronics", skills: ["PCB Design", "ADC/DAC", "Signals", "Power Electronics", "Circuit Design"] },
            { title: "digital logic / fpgas", skills: ["Verilog", "Vivado", "Quartus", "Wishbone", "AXI","PCIe"] },
            { title: "low level", skills: ["Linux", "POSIX", "Kernel Design", "Memory Handling", "ASM (x86,ARM)"] },
            { title: "hacking", skills: ["Ghidra", "Binaries", "Firmware", "Metasploit", "Wireshark", "Burpsuite", "Secure Boot", "Cryptography","Flipper"] },
            { title: "robotics / control", skills: ["ROS", "PID", "PWM", "Encoders", "Kalman Filter", "Sensor Fusion","SLAM", "VEX Robotics","mBot 2","cyberPI"] },
            { title: "machine learning", skills: ["Python", "OpenCV", "NLTK", "Huggingface", "PyTorch", "SciKit", "TensorFlow", "NumPy", "SciPy", "Keras", "Seaborn"] },
            { title: "software dev", skills: ["Javascript", "ReactJS", "TailwindCSS", "Android Studio", "Flask", "Unity", "DNS Config", "Hosting", "SEO", "Git"] },
          ].map((group, idx) => (
            <div className="skillCard2" key={idx}>
              <div className="skillCard2Head">{`> ${group.title}`}</div>
              <div className="skillPills">
                {group.skills.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      

      
      <section className="section2" id="projects">
        <div className="sectionHead">
          <span className="sig">// featured-projects</span>
          <span className="bar" />
        </div>

        <div className="projectGrid2">
          {projects.map((p, idx) => (
            <article className="projectCard2" key={idx}>
              <div className="projectThumb">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="projectShade" />
                <div className="projectIndex">{String(idx + 1).padStart(2, "0")}</div>
              </div>

              <h3 className="projectTitle">{p.title}</h3>
              <p className="projectDesc">{p.description}</p>

              <a className="projectLink" href={p.link} target="_blank" rel="noopener noreferrer">
                {p.linkname} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section2" id="extras">
        <div className="sectionHead">
          <span className="sig">// awards & activities</span>
          <span className="bar" />
        </div>

        <div className="threeGrid">
          <div className="panel2">
            <h3 className="miniHead">Awards</h3>
            <div className="list2">
              {[
                "Passionate Learner Award 2022",
                "School Distinguished Service 2022",
                "Academic Improvement Award 2021",
                "EAGLES Award (2017, 2018, 2022)",
              ].map((x) => (
                <div className="listItem2" key={x}>
                  <span className="spark" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
            <br></br>
            <h3 className="miniHead">Events Organised</h3>
            <div className="chips">
              {[
                "NUS HackNRoll 2024 – Organiser",
                "DSTA-DSO-VJC Robo Challenge 2023 – Emcee",
                "Ntnl Hackathon 2020 – Organiser",
                "VS Mock-NOI 2023 – Organiser",
                "JC Computing Students Conference – POC",
                "Victoria Challenge 2019 – Leader",
                "Decode & Conquer 2024 – Instructor",
                "MultiLayer CyberSec 2024 – Lead",
                "VSIFC Competitive C++ 2023 – Trainer",
                "BuildingBloCS 2023 – HR Organiser",
                "Project V 2023 – Emcee",
                "Changi Simei CC Deepavali 2022 – Org Volunteer",
                "Changi Simei CC Blood Drive 2022 – Org Volunteer",
              ].map((a) => (
                <div className="listItem2" key={a}>
                  <span className="spark" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel2">
            <h3 className="miniHead">Extracurriculars</h3>
            <div className="chips">
              {[
                "IEEE - Research Contributor",
                "People's Association – Grassroots Leader",
                "VS Infocomm Club – President '21",
                "VS Physics SIG – President '20",
                "VJC Cybersecurity Club – President '23",
                "VS Infocomm Club – Programming Head '21",
                "VJC Robotics Club – Electronics Head '23",
                "VJC Computing Talent Dev Prog – Leader '23 '24",
                "VS Physics Talent Dev Prog – Member '21 '22",
                "VS Mathematics Talent Dev Prog – Member '22",
                "BuildingBloCS – Human Resources '23",
                "VS Infocomm Tech Board – Leader '21 '22",
                "VS Social Innovation Board – Leader '20",
                "VS Monitor's Council – Leader '19",
                "VS AI Student Group – Member '22",
                "PRW Drones Tech & Law – Member '23",
                "VJC Orientation – Group Leader '24",
                "National Day Parade - Regimental Colours '25",
                "SAF Day Parade - Regimental Colours '25",
                "42SAR NSF Council - Finance Club Leader '25 '26",
                "42SAR NSF Council - Film Club Leader '25 '26",
                "CZ Shark Scouts – President '17",
                "CZ Innovation Club – Public Relations Officer '17",
              ].map((t) => (
                <div className="listItem2" key={t}>
                  <span className="spark" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="panel2">
            <h3 className="miniHead">Competitions</h3>
            <div className="list2">
              {[
                "Intl Math Modelling Competition Merit Award '22",
                "Singapore Physics League Honourable Mention '23",
                "SG Junior Physics Olym Honourable Mention '22",
                "FPS International Champions '17",
                "FPS International Vice-Champions '18",
                "CMPS National Champions '16",
                "CMPS National Champions '17",
                "NUS HackNRoll '20",
                "NUS HackNRoll '22",
                "NUS HackNRoll '23",
                "NUS HackNRoll '24",
                "NUS HackNRoll '26",
                "BuildingBloCS '23",
                "SUTD RoboRoarZ '24",
                "DSTA CDDC '24",
                "DSTA Cyberthon '24",
                "DSTA Brainhack SpaceCube '24",
                "DSTA Brainhack AR/VR '24",
                "PA NECDC Hackathon '23",
                "The Earth Prize '23",
                "Robomaster Youth International '23",
                "MakeX '19",
                "MakeX Spark '22",
                "NYP SGCC '19",
                "Singapore Math Olympiad '19",
                "American Math Olympiad '22",
                "National Olympiad of Informatics '20",
                "National Olympiad of Informatics '21",
              ].map((x) => (
                <div className="listItem2" key={x}>
                  <span className="spark" />
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section2" id="certifications">
        <div className="sectionHead">
          <span className="sig">// certifications</span>
          <span className="bar" />
        </div>

        <div className="panel2">
          <div className="certGrid">
            {[
              {
                name: "CompTIA Security+",
                status: "Working On",
                detail: "Foundations of security, risk, and operations.",
              },
              {
                name: "DSTA SpaceCube Course",
                status: "Completed",
                detail: "Learnt how to build a robotic cubesat.",
              },
              {
                name: "SeeNTU Game Theory and Computational Statistics",
                status: "Completed",
                detail: "Learnt about game theory and matrices.",
              },
              {
                name: " Google Cybersecurity Certificate",
                status: "Completed",
                detail: "Learnt about cybersecurity.",
              },
              {
                name: "CQT QCamp Course",
                status: "Completed",
                detail: "Learnt more about quantum computing.",
              },
              {
                name: "Duke University Python Scripting",
                status: "Completed",
                detail: "Just to prove a point.",
              },
              {
                name: "Fractal Introduction to Quantum Computing",
                status: "Completed",
                detail: "Learnt the basics of quantum computing.",
              },
              {
                name: "Starweaver Intro to Automotive Cybersecurity",
                status: "Completed",
                detail: "Learnt about interesting automotive systems and networks.",
              },
              {
                name: "MathWorks Systems Engineering",
                status: "Completed",
                detail: "Learnt about systems and how they operate.",
              },
              {
                name: "University at Buffalo Electric Power Systems",
                status: "Completed",
                detail: "Learnt about high voltage power electronics.",
              },
              {
                name: "NYP Data, Cloud & Programming Essentials",
                status: "Completed",
                detail: "Learnt about networking and cloud.",
              },
              {
                name: "ARM Cortex-M Processors Overview",
                status: "Completed",
                detail: "Learnt about embedded systems.",
              },
            ].map((c) => (
              <div className="certCard" key={c.name}>
                <div className="certTop">
                  <div className="certName">{c.name}</div>
                  <div className={`certStatus ${c.status === "Completed" ? "ok" : "todo"}`}>
                    {c.status}
                  </div>
                </div>
                <div className="certDetail">{c.detail}</div>
              </div>
            ))}
          </div>

        </div>
      </section>


      <footer className="footer2">
        <div>Contact: raghav@mensa.sg</div>
        <div className="muted2">Yes, I built this myself in Vite + ReactJS</div>
      </footer>
    </>
  );
}

function SimplePage({ title, subtitle }) {
  return (
    <section className="section2">
      <div className="sectionHead">
        <span className="sig">{`// ${title.toLowerCase()}`}</span>
        <span className="bar" />
      </div>

      <div className="panel2 pagePanel">
        <h1 className="pageTitle">{title}</h1>
        <p className="pageSub">{subtitle}</p>
        <p className="pageHint">
          This page is wired. Next: give me your content blocks and I’ll turn each one into a unique portfolio layout.
        </p>
      </div>
    </section>
  );
}

function TheatreArts() {
  const { goToSection } = useSectionNav();
  const stats = useMemo(
    () => ({
      plays: 5,
      films: 7,
      total: 12,
      years: 13,

      sdd: { distinctions: 7, merits: 1, grades: ["Initiate", "1", "2", "3", "4", "6", "7", "8"], note: "Grade 8: Distinction" },
      ps:  { distinctions: 6, merits: 1, grades: ["2", "3", "4", "5", "6", "7", "8"], note: "Grade 7–8: Distinction" },
      pa:  { distinctions: 2, merits: 2, grades: ["Initiate", "1", "2", "5"] },

      excellence: { year: 2019, grade: 5, note: "Certificate of Excellence (Highest scorer)" },

      languages: ["English", "Tamil", "German (Basic)", "Russian (Basic)"],

      genres: ["Political", "Horror", "Thriller", "Psychological" , "Comedy", "Fantasy", "Drama", "Satire", "Historical", "Shakespearean", "Singaporean", "Military"],
    }),
    []
  );

  // Put your images in /public/theatre/plays/ and /public/theatre/films/
  // Replace titles + filenames with your real productions.
  const plays = [
    { title: "Arabian Nights, Marine Parade Theatre", role: "Role / Position", year: "YYYY", img: "/theatre/plays/play1.jpg" },
    { title: "Alice In Wonderland, Marine Parade Theatre", role: "Role / Position", year: "YYYY", img: "/theatre/plays/play2.jpg" },
    { title: "After Ever After, Marine Parade Theatre", role: "Role / Position", year: "YYYY", img: "/theatre/plays/play3.jpg" },
    { title: "Around The World, Marine Parade Theatre", role: "Role / Position", year: "YYYY", img: "/theatre/plays/play4.jpg" },
    { title: "Welcome Aboard, Marine Parade Theatre", role: "Role / Position", year: "YYYY", img: "/theatre/plays/play5.jpg" },
  ];

  const films = [
    { title: "The Parchment, LaSalle College", role: "Dev", year: "YYYY", img: "/theatre/films/film1.jpg" },
    { title: "Forget Me Not, Samsung", role: "Young Vicknesh", year: "YYYY", img: "/theatre/films/film2.jpg" },
    { title: "Upside Down Ep8, Okto", role: "Raghav", year: "YYYY", img: "/theatre/films/film3.jpg" },
    { title: "Second Best, Verite Productions", role: "Karthik Selvakumar", year: "YYYY", img: "/theatre/films/film4.jpg" },
    { title: "30 Days, Republic Polytechnic", role: "Navin", year: "YYYY", img: "/theatre/films/film5.jpg" },
    { title: "Narcotic Awareness Video, Big 3 Media", role: "Raghav", year: "YYYY", img: "/theatre/films/film6.jpg" },
    { title: "VSIFC '21 Recruitment, VS Infocomm Club", role: "Raghav", year: "YYYY", img: "/theatre/films/film7.jpg" },
  ];
  const trinity = useMemo(
    () => ({
      atcl: "In Progress",
      tracks: [
        {
          key: "public-speaking",
          title: "Public Speaking",
          accent: "flare",
          summary: "Politics, media, communication, philo & language",
          grades: [
            { grade: "ATCL Diploma", result: "In Progress", pieces: [] },
            { grade: "Grade 8", result: "Distinction", pieces: ["The Effective Use of Modern Propaganda", "The Death Sentence"] },
            { grade: "Grade 7", result: "Distinction", pieces: ["Euthanasia"] },
            { grade: "Grade 6", result: "Merit", pieces: ["Preparing a Curriculum Vitae", "The Yellow Ribbon Project"] },
            { grade: "Grade 5", result: "Distinction · Top Scorer (2019)", pieces: ["Robotics and Coding"] },
            { grade: "Grade 4", result: "Distinction", pieces: ["Persuasive Speech to Borrow a 3Doodler", "Winning a Competition in Chicago"] },
            { grade: "Grade 3", result: "Distinction", pieces: ["Reasons to Visit Singapore"] },
            { grade: "Grade 2", result: "Distinction", pieces: ["Planning a Festival", "Age of Ultron Movie Review"] },
            { grade: "Initial", result: "Distinction", pieces: ["My Favourite Assault Rifle", "My Favourite Car"] },
          ],
        },
        {
          key: "speech-drama",
          title: "Drama",
          accent: "ember",
          summary: "Literary techniques, acting, improv & stagecraft",
          grades: [
            { grade: "ATCL Diploma", result: "In Progress", pieces: [] },
            { grade: "Grade 8", result: "Distinction", pieces: ["The Prince", "1980 GE Speech", "A Satirical Elegy on the Death of a General"] },
            { grade: "Grade 7", result: "Distinction", pieces: ["Macbeth", "At the Theatre To the Lady Behind Me", "To The Moon"] },
            { grade: "Grade 6", result: "Merit", pieces: ["Sonnet XIX", "Time After Time", "Army Daze"] },
            { grade: "Grade 4", result: "Distinction", pieces: ["The Blood of Olympus", "Speech", "Alice in Wonderland"] },
            { grade: "Grade 3", result: "Distinction", pieces: ["The New Sun", "The Creature in the Classroom", "Charlie and the Chocolate Factory"] },
            { grade: "Grade 2", result: "Distinction", pieces: ["House of Robots", "My Personal Slave", "The Robot"] },
            { grade: "Grade 1", result: "Distinction", pieces: ["Confronting the Dragon", "A Poison Tree", "Scout Selling Cookies"] },
          ],
        },
        {
          key: "performance-arts",
          title: "Performance Arts Certifications",
          accent: "gold",
          summary: "Team level scripting, rehearsals and performing",
          grades: [
            { grade: "Grade 5", result: "Merit", pieces: ["Blacklisted"] },
            { grade: "Grade 2", result: "Distinction", pieces: ["Happy Beans"] },
            { grade: "Grade 1", result: "Merit", pieces: ["The Illustrators"] },
            { grade: "Initial", result: "Distinction", pieces: ["The Pippins"] },
          ],
        },
      ],
    }),
    []
  );


  return (
    <div className="pageWrap">
      {/* HERO */}
      <header className="tkHero">
        <div className="hero2-bg" />
          <div className="hero2-inner">
            <div className="hero2-top">
              <div className="brandchip">
                <span className="dot" />
                <span>THE DERANGED ENGINEER</span>
                <span className="sep">/</span>
                <span>THEATRE ARTS</span>
              </div>

              <div className="hero2-icons">
                <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://youtube.com/@deranged_engineer" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            <div className="heroTitleRow">
              <img className="pfpTitle" src="/meraghav.jpg" alt="Raghav Sriram" loading="eager" />
              <div className="heroTitles">
                <h1 className="hero2-title">Raghav Sriram</h1>
                <h2 className="hero2-title2">Actor · Theatre Student</h2>
              </div>
            </div>

            <p className="hero2-sub">
              I love acting. I've spent the last decade of my life mastering the art, and have gained exposure from various films, plays, directors and studios.
            </p>
              <div className="heroQuickGrid">
                <div className="heroQuick">
                  <div className="tkQuickK">Productions</div>
                  <div className="tkQuickV">{stats.total}</div>
                  <div className="tkQuickS">{stats.plays} plays · {stats.films} films</div>
                </div>

                <div className="heroQuick">
                  <div className="tkQuickK">Years In Field</div>
                  <div className="tkQuickV">{stats.years}</div>
                  <div className="tkQuickS">Acting / Performing / Studying Theatre</div>
                </div>

                <div className="heroQuick">
                  <div className="tkQuickK">Language Exposure (Acting)</div>
                  <div className="tkQuickV"><FaGlobeAsia /></div>
                  <div className="tkQuickS">{stats.languages.join(" · ")}</div>
                </div>
              </div>

            <div className="hero2-cta">
              
              <button className="btn2 primary" type="button" onClick={() => goToSection("/theatre-arts","identity")}>
                Identity
              </button>
              <button className="btn2" type="button" onClick={() => goToSection("/theatre-arts","coursework")}>
                Coursework
              </button>
              <button className="btn2" type="button" onClick={() => goToSection("/theatre-arts","plays")}>
                Plays
              </button>
              <button className="btn2" type="button" onClick={() => goToSection("/theatre-arts","films")}>
                Films
              </button>
            </div>
          </div>
      </header>
      

      {/* IDENTITY + LANGUAGES */}
      <section className="taSection" id="identity">
        <div className="sectionHead">
          <span className="sig">// theatre-arts / identity</span>
          <span className="bar" />
        </div>

        <div className="taGrid2">
          <div className="panel2 taPanel">
            <h3 className="taMiniHead">Performance identity</h3>
            <p className="taBody">
              I typically act in works with strong and fiery emotions, drawn to characters driven by intensity, conflict, and inner volatility. I aim to channel that energy with clarity to give a compelling performance.
            </p>

            <div className="taDivider" />

            <h3 className="taMiniHead">Genres I've Done</h3>
            <div className="taLangGrid">
              {stats.genres.map((l) => (
                <span className="taLang" key={l}>{l}</span>
              ))}
            </div>
          </div>

          <div className="panel2 taPanel">
            <h3 className="taMiniHead">Disciplines</h3>

            <div className="taDisciplineGrid">
              <div className="taDiscipline">
                <div className="taDiscImg">
                  <img src="/theatre/upsidedown.jpg" alt="Drama" loading="lazy" />
                </div>
                <div className="taDiscMeta">
                  <div className="taDiscTitle">Drama</div>
                  <div className="taDiscResult">
                    <FaMedal /> {stats.sdd.distinctions} Dist · {stats.sdd.merits} Merit
                  </div>
                </div>
              </div>

              <div className="taDiscipline">
                <div className="taDiscImg">
                  <img src="/theatre/pubspeakek.jpg" alt="Public Speaking" loading="lazy" />
                </div>
                <div className="taDiscMeta">
                  <div className="taDiscTitle">Public Speaking</div>
                  <div className="taDiscResult">
                    <FaMedal /> {stats.ps.distinctions} Dist · {stats.ps.merits} Merit
                  </div>
                </div>
              </div>

              <div className="taDiscipline">
                <div className="taDiscImg">
                  <img src="/theatre/pack4.jpg" alt="Performance Arts" loading="lazy" />
                </div>
                <div className="taDiscMeta">
                  <div className="taDiscTitle">Performance Arts</div>
                  <div className="taDiscResult">
                    <FaMedal /> {stats.pa.distinctions} Dist · {stats.pa.merits} Merit
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="taSection" id="coursework">
        <div className="sectionHead">
          <span className="sig">// theatre-arts / trinity-coursework</span>
          <span className="bar" />
        </div>

        <div className="panel2 taPanel taLedgerTop">
          <div className="taLedgerTitleRow">
            <div className="taLedgerTitle">Trinity Coursework</div>
            <div className="taLedgerChip"><FaCertificate /> ATCL Diploma: {trinity.atcl}</div>
          </div>
          <div className="taLedgerSub">
            A record of assessed performance. Topics range from literature and theatre to rhetoric and persuasion.
          </div>
        </div>

        <div className="taTrackGrid">
          {trinity.tracks.map((t) => (
            <div className={`taTrack ${t.accent}`} key={t.key}>
              <div className="taTrackHead">
                <div className="taTrackTitle">{t.title}</div>
                <div className="taTrackHint">{t.summary}</div>
              </div>

              <div className="taGradeList">
                {t.grades.map((g) => (
                  <details className="taGrade" key={`${t.key}-${g.grade}`}>
                    <summary className="taGradeSummary">
                      <span className="taGradeLeft">
                        <span className="taGradeTag">{g.grade}</span>
                        <span className="taGradeResult">{g.result}</span>
                      </span>
                      <span className="taGradeChevron">+</span>
                    </summary>

                    {g.pieces.length > 0 ? (
                      <div className="taPieces">
                        {g.pieces.map((p) => (
                          <div className="taPiece" key={p}>
                            <span className="taPieceDot" />
                            <span>{p}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="taPieces taMuted">No pieces listed for this entry.</div>
                    )}
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLAYS GALLERY */}
      <section className="taSection" id="plays">
        <div className="sectionHead">
          <span className="sig">// theatre-arts / plays</span>
          <span className="bar" />
        </div>

        <div className="taGalleryGrid">
          {plays.map((p) => (
            <article className="taWorkCard" key={p.title}>
              <div className="taWorkThumb">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="taWorkShade" />
              </div>

              <div className="taWorkMeta">
                <div className="taWorkTitleRow">
                  <div className="taWorkName">{p.title}</div>
                  <div className="taWorkYear">{p.year}</div>
                </div>
                <div className="taWorkRole">{p.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FILMS GALLERY */}
      <section className="taSection" id="films">
        <div className="sectionHead">
          <span className="sig">// theatre-arts / films</span>
          <span className="bar" />
        </div>

        <div className="taGalleryGrid">
          {films.map((f) => (
            <article className="taWorkCard" key={f.title}>
              <div className="taWorkThumb">
                <img src={f.img} alt={f.title} loading="lazy" />
                <div className="taWorkShade" />
              </div>

              <div className="taWorkMeta">
                <div className="taWorkTitleRow">
                  <div className="taWorkName">{f.title}</div>
                  <div className="taWorkYear">{f.year}</div>
                </div>
                <div className="taWorkRole">{f.role}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Taekwondo() {
  const { goToSection } = useSectionNav();
  const stats = useMemo(
    () => ({
      years: 11,
      rank: "3rd Dan",
      next: "2nd Dan Converted, 3rd Pending",
      academies: 3,
      competitions: ["Pesta Sukan 2023"],
      eras: ["Early childhood", "Junior competition", "Adolescent refinement", "Present day"],
    }),
    []
  );

  // Put images/videos in:
  // /public/taekwondo/early/
  // /public/taekwondo/mid/
  // /public/taekwondo/current/
  const gallery = [
    { era: "Early years", img: "/taekwondo/t5.png" },
    { era: "Early years", img: "/taekwondo/t4.jpg" },

    { era: "Developing years", img: "/taekwondo/t7.JPG" },
    { era: "Developing years", img: "/taekwondo/t3.png" },

    { era: "Present day", img: "/taekwondo/t2.jpg" },
    { era: "Present day", img: "/taekwondo/t1.jpg" },
  ];

  const skillStack = [
    { k: "Poomsae", v: "Strong in Taeguk Chil Jang, Poomsae Koryo,  Poomsae Pyongwon" },
    { k: "Kyorugi", v: "Strong in Short Range Sparring + Quick Attacks + Closing Distance" },
  ];

  return (
    <div className="pageWrap">
      {/* HERO */}
      <header className="tkHero">
        <div className="hero2-bg" />
          <div className="hero2-inner">
            <div className="hero2-top">
              <div className="brandchip">
                <span className="dot" />
                <span>THE DERANGED ENGINEER</span>
                <span className="sep">/</span>
                <span>TAEKWONDO</span>
              </div>

              <div className="hero2-icons">
                <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://youtube.com/@deranged_engineer" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            <div className="heroTitleRow">
              <img className="pfpTitle" src="/meraghav.jpg" alt="Raghav Sriram" loading="eager" />
              <div className="heroTitles">
                <h1 className="hero2-title">Raghav Sriram</h1>
                <h2 className="hero2-title2">3rd Dan · Kyorugi Fighter</h2>
              </div>
            </div>

            <p className="hero2-sub">
              Taekwondo has become such a core part of my identity because of the virtues and friends I gained in my journey.
            </p>
              <div className="heroQuickGrid">
                <div className="heroQuick">
                  <div className="tkQuickK">Years trained</div>
                  <div className="tkQuickV">{stats.years}</div>
                  <div className="tkQuickS">Continuous practice</div>
                </div>

                <div className="heroQuick">
                  <div className="tkQuickK">Current standing</div>
                  <div className="tkQuickV">{stats.rank}</div>
                  <div className="tkQuickS">{stats.next}</div>
                </div>

                <div className="heroQuick">
                  <div className="tkQuickK">Academies</div>
                  <div className="tkQuickV">{stats.academies}</div>
                  <div className="tkQuickS">Different instructors · styles converged</div>
                </div>
              </div>

            <div className="hero2-cta">
              
              <button className="btn2 primary" type="button" onClick={() => goToSection("/taekwondo","identity")}>
                Identity
              </button>
              <button className="btn2" type="button" onClick={() => goToSection("/taekwondo","training")}>
                Training
              </button>
            </div>
          </div>
      </header>

      {/* IDENTITY */}
      <section className="tkSection" id="identity">
        <div className="sectionHead">
          <span className="sig">// taekwondo / identity</span>
          <span className="bar" />
        </div>

        <div className="tkGrid2">
          <div className="panel2 tkPanel">
            <h3 className="tkMiniHead">Training philosophy</h3>
            <p className="tkBody">
              I train to be better than my previous self. I strike fast and precisely, and fight in close range to gain control of a match.
            </p>

            <div className="tkDivider" />

            <h3 className="tkMiniHead">Skill stack</h3>
              <div className="tkStack">
                {skillStack.map((s) => (
                  <div className="tkStackRow" key={s.k}>
                    <div className="tkStackK">{s.k}</div>
                    <div className="tkStackV">{s.v}</div>
                  </div>
                ))}
              </div>

          </div>

          <div className="panel2 tkPanel">
            <h3 className="tkMiniHead">Roadmap</h3>

            <div className="tkRoadmap">
              {[
                {
                  org: "Hyun Taekwondo Academy",
                  note: "2015 - 2017 (White -> Red)",
                },
                {
                  org: "Lions Taekwondo Academy",
                  note: "2018 - 2024 (Red-Black -> Dan 2)",
                },
                {
                  org: "World Champions Taekwondo Academy",
                  note: "2025 - 2026 (Dan 2 -> Dan 3)",
                },
              ].map((s, i) => (
                <div className="tkStep" key={s.org}>
                  <div className="tkStepMark">
                    <div className="tkStepNum">{String(i + 1).padStart(2, "0")}</div>
                    <div className="tkStepLine" />
                  </div>

                  <div className="tkStepBody">
                    <div className="tkStepTop">
                      <div className="tkStepOrg">{s.org}</div>
                    </div>
                    <div className="tkStepNote">{s.note}</div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* GALLERY */}
      <section className="tkSection" id="training">
        <div className="sectionHead">
          <span className="sig">// taekwondo / training</span>
          <span className="bar" />
        </div>

        <div className="tkGallery">
          {gallery.map((g, i) => (
            <article className="tkShot" key={i}>
              <img src={g.img} alt={g.era} loading="lazy" />
              <div className="tkShotMeta">{g.era}</div>
            </article>
          ))}
        </div>

        <div className="panel2 tkPanel tkNote">
          This gallery spans multiple phases of training, documenting technical growth,
          physical maturation, and continuity over more than a decade.
          Videos may be added alongside stills.
        </div>
      </section>
    </div>
  );
}

function Motorsports() {
  const { goToSection } = useSectionNav();
  return (
    <div className="pageWrap">
      {/* HERO */}
      <header className="tkHero">
        <div className="hero2-bg" />
          <div className="hero2-inner">
            <div className="hero2-top">
              <div className="brandchip">
                <span className="dot" />
                <span>THE DERANGED ENGINEER</span>
                <span className="sep">/</span>
                <span>MOTORSPORTS</span>
              </div>

              <div className="hero2-icons">
                <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="https://youtube.com/@deranged_engineer" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            <div className="heroTitleRow">
              <img className="pfpTitle" src="/meraghav.jpg" alt="Raghav Sriram" loading="eager" />
              <div className="heroTitles">
                <h1 className="hero2-title">Raghav Sriram</h1>
                <h2 className="hero2-title2">Motorsport Enthusiast · Prospecting Student Pilot</h2>
              </div>
            </div>

            <p className="hero2-sub">
              I love things that move, especially if they move fast or if they are accompanied by a rush of adrenaline. It makes me feel alive.
            </p>
              <div className="heroQuickGrid">
                <div className="heroQuick">
                  <div className="tkQuickK">ATV</div>
                  <div className="tkQuickV">400cc</div>
                  <div className="tkQuickS">India · Thailand · Indonesia · Malaysia</div>
                </div>
                <div className="heroQuick">
                  <div className="tkQuickK">Karting</div>
                  <div className="tkQuickV">50–200cc</div>
                  <div className="tkQuickS">SG · Dubai · MY · Vietnam</div>
                </div>
                <div className="heroQuick">
                  <div className="tkQuickK">Motorbikes</div>
                  <div className="tkQuickV">150cc</div>
                  <div className="tkQuickS">Class 2B in progress</div>
                </div>
              </div>

            <div className="hero2-cta">
              
              <button className="btn2 primary" type="button" onClick={() => goToSection("/motorsports", "overview")}>
                Overview
              </button>
              <button className="btn2" type="button" onClick={() => goToSection("/motorsports", "platforms")}>
                Platforms
              </button>
              <button className="btn2" type="button" onClick={() => goToSection("/motorsports", "progression")}>
                Progression
              </button>
              <button className="btn2" type="button" onClick={() => goToSection("/motorsports", "gallery")}>
                Gallery
              </button>
            </div>
          </div>
      </header>
      

      {/* OVERVIEW */}
      <section className="section2" id="overview">
        <div className="sectionHead">
          <span className="sig">// motorsports / overview</span>
          <span className="bar" />
        </div>

        <div className="panel2">
          <p className="lead">
            I love the rush of adrenaline that comes with things that go fast. Be it motorbikes, cars, ATVs, karts, armoured fighting vehicles, simulators or planes. Here you can see all the interesting stuff I get up to in the name of adventure.
          </p>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="section2" id="experience">
        <div className="sectionHead">
          <span className="sig">// motorsports / platforms</span>
          <span className="bar" />
        </div>

        <div className="msGrid">
          <div className="panel2 msPanel">
            <h3 className="msMiniHead">All-Terrain Vehicles</h3>
            <p className="msBody">
              400cc ATVs across mixed terrain environments.
              Incredible way to absolutely wreck hostile and dangerous terrain and explore.
            </p>
            <div className="msBadges">
              <span className="msBadge">400cc</span>
              <span className="msBadge">Loose surfaces</span>
              <span className="msBadge">Multi-country exposure</span>
            </div>
          </div>

          <div className="panel2 msPanel">
            <h3 className="msMiniHead">Kart Racing</h3>
            <p className="msBody">
              Indoor and outdoor karting from entry-level to higher-power platforms.
              Focus on racing lines and situational awareness (for me, not spacing out).
            </p>
            <div className="msBadges">
              <span className="msBadge">50cc</span>
              <span className="msBadge">100cc</span>
              <span className="msBadge">200cc</span>
              <span className="msBadge">International tracks</span>
            </div>
          </div>

          <div className="panel2 msPanel">
            <h3 className="msMiniHead">Motorcycles</h3>
            <p className="msBody">
              Regular riding on 150cc motorcycles.
              Developing road discipline, hazard anticipation, and a LOT of patience.
            </p>
            <div className="msBadges">
              <span className="msBadge">150cc</span>
              <span className="msBadge">Urban riding</span>
              <span className="msBadge">Class 2B</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESSION */}
      <section className="section2" id="progression">
        <div className="sectionHead">
          <span className="sig">// motorsports / progression</span>
          <span className="bar" />
        </div>

        <div className="twoCol">
          <div className="panel2">
            <h3 className="miniHead">Skill development</h3>
            <div className="msStack">
              <div className="msStackRow">
                <div className="msStackK">Control</div>
                <div className="msStackV">Throttle discipline, braking smoothness, stability under speed</div>
              </div>
              <div className="msStackRow">
                <div className="msStackK">Awareness</div>
                <div className="msStackV">Track positioning, surroundings, entry/exit timing</div>
              </div>
              <div className="msStackRow">
                <div className="msStackK">Mechanics</div>
                <div className="msStackV">Grip limits, power delivery, feedback interpretation</div>
              </div>
              <div className="msStackRow">
                <div className="msStackK">Composure</div>
                <div className="msStackV">Decision-making under speed and fatigue</div>
              </div>
            </div>
          </div>

          <div className="panel2">
            <h3 className="miniHead">Aviation (early)</h3>
            <p className="msBody">
              I am also working toward a pilot’s license.  
              Currently studying theory, learning practical skills. Hopefully I can get started on simulations and more PPL training once NS ends and I am overseas.
            </p>
            <div className="msBadges">
              <span className="msBadge">Theory first</span>
              <span className="msBadge">No logbook yet</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY NOTE */}
      <section className="section2" id="gallery">
        <div className="sectionHead">
          <span className="sig">// motorsports / gallery</span>
          <span className="bar" />
        </div>
        <div className="panel2">
          <h3 className="miniHead">Media archive</h3>
          <p className="msBody">
            I have extensive photos and videos across countries, vehicles, and years.
            Just chill out and wait, I will add everything.
          </p>
        </div>
      </section>
    </div>
  );
}




function Research() {
  const { goToSection } = useSectionNav();

  const focus = [
    "Fault-tolerant quantum computation",
    "Quantum error correction under noise",
    "Architecture-level tradeoffs",
    "Research communication and clarity",
  ];

  const publications = [
    {
      title: "TroopDrop : Military Applications of LiDar Tech",
      venue: "Github",
      year: "2022",
      desc:
        "TroopDrop proposes a battlefield awareness system that overlays real-time intel: positions, troops, hazards, and medical routes directly onto soldiers’ vision using data from LiDAR, ML and aerial imaging.",
      img: "/research/troopdrop.jpg",
      link: "https://docs.google.com/document/d/1vuvTYZdB8s4MjiwKac1omQTS_RwdHjFt_pgg43cS_SU/edit?usp=sharing",
      tags: ["LiDar", "Electronics"],
    },
    {
      title: "An Overview of Assuring Fault Tolerance in Quantum Computing Through Quantum Error Correction",
      venue: "OSF Preprint",
      year: "2025",
      desc:
        "Exploration of fault tolerance using quantum error correction against noisy environments, focusing on what breaks and why.",
      img: "/research/FTQC.jpg",
      link: "https://osf.io/e67tz",
      tags: ["Fault tolerance", "QEC", "Noise"],
    },
    {
      title: "Quantum Machine Learning Paper",
      venue: "In progress",
      year: "2026",
      desc:
        "Its a secret :) But so far I have been investigating and simulating the mechanics behind Quantum SVMs and CNNs and why they may have interesting real world applications.",
      img: "/research/paper3.jpg",
      link: "#",
      tags: ["QML"],
    },
  ];

  // Knowledge map / roadmap (replace titles later if you want)
  const map = [
    {
      title: "Quantum Cryptography",
      img: "https://images.unsplash.com/photo-1667124060133-c1074b0124be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lines: [
        "Information-theoretic security from quantum mechanics",
        "Protocols: QKD, device-independent schemes, and post-quantum intersections",
        "Practical attack surfaces",
      ],
      tags: ["BB84", "QKD", "Postquantum"],
    },
    {
      title: "Quantum Error Correction",
      img: "https://images.unsplash.com/photo-1610337673044-720471f83677?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lines: [
        "Encoding logical qubits into entangled physical qubits",
        "Threshold theorems and surface codes",
        "Resource overheads and decoding as the central engineering bottleneck",
      ],
      tags: ["QEC", "Thresholds", "Overhead"],
    },
    {
      title: "Quantum Machine Learning",
      img: "https://images.unsplash.com/photo-1674027444454-97b822a997b6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lines: [
        "Hybrid quantum–classical models",
        "Where quantum advantage is plausible",
        "Data encoding, noise sensitivity, and scalability",
      ],
      tags: ["QSVMS", "QCNNS", "Noise"],
    },
    {
      title: "Quantum Hardware",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      lines: [
        "Physical qubit platforms",
        "Noise sources: decoherence, crosstalk, calibration drift",
        "Scaling challenges from single qubits",
      ],
      tags: ["Architecture", "Scaling", "Systems"],
    },
  ];

  // Gallery (swap to real images later)
  const gallery = [
    { src: "/research/CQTQuant.jpg", label: "My first time seeing a Quantum Computer" },
    { src: "/research/Mywork.jpg", label: "Notes from studying Quantum Computing" },
  ];

  return (
    <>
      {/* HERO */}
      <header className="hero2">
        <div className="hero2-bg" />
        <div className="hero2-inner">
          <div className="hero2-top">
            <div className="brandchip">
              <span className="dot" />
              <span>THE DERANGED ENGINEER</span>
              <span className="sep">/</span>
              <span>RESEARCH</span>
            </div>

            <div className="hero2-icons">
              <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://youtube.com/@deranged_engineer" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="heroTitleRow">
            <img className="pfpTitle" src="/meraghav.jpg" alt="Raghav Sriram" loading="eager" />
            <div className="heroTitles">
              <h1 className="hero2-title">Raghav Sriram</h1>
              <h2 className="hero2-title2">Quantum Computing Researcher · STEM Writer</h2>
            </div>
          </div>

          <p className="hero2-sub">
            I have been a researcher for many years now. I specifically focus on Quantum Computing and Electronic Engineering. I do enjoy learning, teaching and writing. Check out resonanceblog.net :)
          </p>
            <div className="heroQuickGrid">
              <div className="heroQuick">
                <div className="tkQuickK">Field</div>
                <div className="tkQuickV">Quantum Computing</div>
                <div className="tkQuickS">Fault Tolerance · Security · Machine Learning</div>
              </div>
              <div className="heroQuick">
                <div className="tkQuickK">Papers Written</div>
                <div className="tkQuickV">3+</div>
                <div className="tkQuickS">Across various sectors</div>
              </div>
              <div className="heroQuick">
                <div className="tkQuickK">Articles Written</div>
                <div className="tkQuickV">20+</div>
                <div className="tkQuickS">resonanceblog.net</div>
              </div>
            </div>
          <div className="hero2-cta">
            
            <button className="btn2 primary" type="button" onClick={() => goToSection("/research", "positioning")}>
              Positioning
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("/research", "publications")}>
              Publications
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("/research", "knowledge")}>
              Knowledge Map
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("/research", "gallery")}>
              Gallery
            </button>
          </div>
        </div>
      </header>

      {/* POSITIONING */}
      <section className="section2" id="positioning">
        <div className="sectionHead">
          <span className="sig">// research-positioning</span>
          <span className="bar" />
        </div>

        <div className="panel2">
          <p className="lead">
            I research Quantum Computing, specifically Fault Tolerant Quantum Computing, Quantum Error Correction, Quantum Machine Learning and Quantum Cryptography. Sometimes, I may do research work into Signals and Electronics. I love open sourcing my work.
          </p>

        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="section2" id="publications">
        <div className="sectionHead">
          <span className="sig">// publications</span>
          <span className="bar" />
        </div>

        <div className="projectGrid2">
          {publications.map((p) => (
            <article className="projectCard2" key={p.title}>
              <div className="projectThumb">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="projectShade" />
                <div className="projectIndex">{p.year}</div>
              </div>

              <h3 className="projectTitle">{p.title}</h3>
              <p className="projectDesc">{p.desc}</p>

              {/* FIX: pills get breathing room + won't touch edges */}
              <div
                style={{
                  padding: "0 1.1rem 0.8rem",
                }}
              >
                <div
                  className="skillPills"
                  style={{
                    gap: "0.45rem",
                  }}
                >
                  {p.tags.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>

                <div style={{ marginTop: "0.8rem" }}>
                  <a
                    className="projectLink"
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* KNOWLEDGE MAP / ROADMAP */}
      <section className="section2" id="knowledge">
        <div className="sectionHead">
          <span className="sig">// knowledge-map</span>
          <span className="bar" />
        </div>

        <div className="projectGrid2">
          {map.map((m) => (
            <article className="projectCard2" key={m.title}>
              <div className="projectThumb">
                <img src={m.img} alt={m.title} loading="lazy" />
                <div className="projectShade" />
                <div className="projectIndex">MAP</div>
              </div>

              <h3 className="projectTitle">{m.title}</h3>

              <div style={{ padding: "0 1.1rem 0.9rem" }}>
                <ul style={{ margin: "0.6rem 0 0.9rem", paddingLeft: "1.05rem", color: "var(--muted)", fontSize: "0.9rem", lineHeight: "1.65" }}>
                  {m.lines.map((x) => (
                    <li key={x} style={{ margin: "0.25rem 0" }}>{x}</li>
                  ))}
                </ul>

                <div className="skillPills" style={{ gap: "0.45rem" }}>
                  {m.tags.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RESEARCH GALLERY */}
      <section className="section2" id="gallery">
        <div className="sectionHead">
          <span className="sig">// research-gallery</span>
          <span className="bar" />
        </div>

        <div className="projectGrid2">
          {gallery.map((g) => (
            <article className="projectCard2" key={g.src}>
              <div className="projectThumb">
                <img src={g.src} alt={g.label} loading="lazy" />
                <div className="projectShade" />
                <div className="projectIndex">IMG</div>
              </div>

              <h3 className="projectTitle" style={{ fontSize: "0.95rem" }}>
                {g.label}
              </h3>

              <div style={{ padding: "0 1.1rem 1.1rem" }}>
                
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}


function Lockpicking() {
  const { goToSection } = useSectionNav();

  const domains = [
    {
      title: "Physical Access",
      subtitle: "Breaking In With Lockpicks",
      desc:
        "You don't need to cut locks open to break in. Also, I have learnt about how to exploit certain physical systems.",
      bullets: [
        "Lockpicking",
        "RFID / NFC Cloning",
        "Relay Attacks",
        "Physical Access Control Bypassing",
      ],
      img: "/lock/log8.jpg",
    },
    {
      title: "Social Engineering",
      subtitle: "The Human Condition",
      desc:
        "A chain is only as strong as its weakest link. Usually, this refers to people and their hubris.",
      bullets: [
        "Phising Infrastructure",
        "OSINT Collection",
        "Talking to people I guess"
      ],
      img: "/lock/log1.jpg",
    },
    {
      title: "Hardware Security",
      subtitle: "Metal That Speaks",
      desc:
        "Hardware is a vital aspect of cybersecurity. I am learning still about how to exploit hardware.",
      bullets: [
        "Firmware extraction",
        "Fault injection",
        "Secure boot",
        "Hardware root-of-trust analysis",
      ],
      img: "/lock/log2.jpg",
    },
    {
      title: "Software Security",
      subtitle: "Intangible Systems",
      desc:
        "There are many ways to hack software, as modern media protrays. This also means break-ins can be done from afar, even internationally.",
      bullets: [
        "Reverse Engineering",
        "Webapp Pentesting",
        "Exploit Development",
      ],
      img: "/lock/log3.jpg",
    },
  ];

  const fieldLog = [
    {
      img: "/lock/log1.jpg",
      caption: "Teaching Lockpicking",
    },
    {
      img: "/lock/log2.jpg",
      caption: "NFC cloning with Flipper",
    },
    {
      img: "/lock/log3.jpg",
      caption: "Cabinet Lock Picked",
    },
    {
      img: "/lock/log4.jpg",
      caption: "New Tools for the Trade",
    },
    {
      img: "/lock/log5.jpg",
      caption: "Door Lock Picked",
    },
    {
      img: "/lock/log6.jpeg",
      caption: "Packet Analysis with Wireshark",
    },
    {
      img: "/lock/log7.jpg",
      caption: "GoPro Hacking",
    },
    {
      img: "/lock/log8.jpg",
      caption: "Another Door Picked",
    },
  ];

  return (
    
    <>
      {/* HERO */}
      
      <header className="hero2">
        <div className="hero2-bg" />
        <div className="hero2-inner">
          <div className="hero2-top">
            <div className="brandchip">
              <span className="dot" />
              <span>THE DERANGED ENGINEER</span>
              <span className="sep">/</span>
              <span>BREAKING IN</span>
            </div>

            <div className="hero2-icons">
              <a href="https://github.com/rs1311" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/raghav-sriram-8a0b23288/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="https://youtube.com/@deranged_engineer" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>

          <div className="heroTitleRow">
            <img className="pfpTitle" src="/meraghav.jpg" alt="Raghav Sriram" loading="eager" />
            <div className="heroTitles">
              <h1 className="hero2-title">Raghav Sriram</h1>
              <h2 className="hero2-title2">Hardware Security · Physical Pentesting</h2>
            </div>
          </div>

          <p className="hero2-sub">
            Disclaimer : I am strongly committed to personal ethics and the law. I don't just go around breaking into random stuff for malicious reasons.
          </p>
            <div className="heroQuickGrid">
              <div className="heroQuick">
                <div className="tkQuickK">Focus</div>
                <div className="tkQuickV">Low Level Exploitation</div>
                <div className="tkQuickS">Signals and Hardware</div>
              </div>

              <div className="heroQuick">
                <div className="tkQuickK">Learning Style</div>
                <div className="tkQuickV">Practical on-field</div>
                <div className="tkQuickS">Theory can only get you so far</div>
              </div>

              <div className="heroQuick">
                <div className="tkQuickK">Locks Broken Into</div>
                <div className="tkQuickV">Too many to count</div>
                <div className="tkQuickS">Though I do not do anything illegal :)</div>
              </div>
            </div>

          <div className="hero2-cta">
            
            <button className="btn2 primary" type="button" onClick={() => goToSection("/lockpicking", "domains")}>
              Domains
            </button>
            <button className="btn2" type="button" onClick={() => ggoToSection("/lockpicking", "log")}>
              Field Log
            </button>
            <button className="btn2" type="button" onClick={() => goToSection("/lockpicking", "philosophy")}>
              Why This Matters
            </button>
          </div>
        </div>
      </header>

      {/* DOMAINS */}
      <section className="section2" id="domains">
        <div className="sectionHead">
          <span className="sig">// domains-of-practice</span>
          <span className="bar" />
        </div>

        <div className="projectGrid2">
          {domains.map((d) => (
            <article className="projectCard2" key={d.title}>
              <div className="projectThumb">
                <img src={d.img} alt={d.title} />
                <div className="projectShade" />
              </div>

              <h3 className="projectTitle">{d.title}</h3>
              <p className="projectDesc">
                <strong>{d.subtitle}.</strong> {d.desc}
              </p>

              <div className="skillPills" style={{ padding: "0 1.1rem 1.1rem" }}>
                {d.bullets.map((b) => (
                  <span className="pill" key={b}>{b}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FIELD LOG */}
      <section className="section2" id = "log">
        <div className="sectionHead">
          <span className="sig">// field-log</span>
          <span className="bar" />
        </div>

        <div className="projectGrid2">
          {fieldLog.map((l, i) => (
            <figure className="projectCard2" key={i}>
              <div className="projectThumb">
                <img src={l.img} alt={l.caption} />
                <div className="projectShade" />
                <div className="projectIndex">{String(i + 1).padStart(2, "0")}</div>
              </div>
              <figcaption className="projectDesc">{l.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section2" id="philosophy">
        <div className="sectionHead">
          <span className="sig">// why-this-matters</span>
          <span className="bar" />
        </div>

        <div className="panel2">
          <p className="lead">
            Security is not about stopping attackers. It is about understanding systems
            deeply enough to design them honestly.
          </p>
          <p className="lead">
            This work feeds directly into my engineering, research, and teaching.
          </p>
        </div>
      </section>
    </>
  );
}



// ...

function Travel() {
  const globeRef = useRef(null);
  const stageRef = useRef(null);

  const [size, setSize] = useState({ w: 900, h: 560 });

  const places = useMemo(
    () => [
      { country: "Singapore", lat: 1.3521, lng: 103.8198 },
      { country: "UAE", lat: 24.4539, lng: 54.3773 },
      { country: "India", lat: 20.5937, lng: 78.9629 },
      { country: "Thailand", lat: 15.87, lng: 100.9925 },
      { country: "Indonesia", lat: -0.7893, lng: 113.9213 },
      { country: "Malaysia", lat: 4.2105, lng: 101.9758 },
      { country: "Vietnam", lat: 14.0583, lng: 108.2772 },
      { country: "Estonia", lat: 58.5953, lng: 25.0136 },
      { country: "Australia", lat: -25.2744, lng: 133.7751 },
      { country: "Bahrain", lat: 26.0667, lng: 50.5577 },
      { country: "Cambodia", lat: 12.5657, lng: 104.991 },
      { country: "Denmark", lat: 56.2639, lng: 9.5018 },
      { country: "Egypt", lat: 26.8206, lng: 30.8025 },
      { country: "Germany", lat: 51.1657, lng: 10.4515 },
      { country: "Greece", lat: 39.0742, lng: 21.8243 },
      { country: "Iran", lat: 32.4279, lng: 53.688 },
      { country: "Italy", lat: 41.8719, lng: 12.5674 },
      { country: "Japan", lat: 36.2048, lng: 138.2529 },
      { country: "Jordan", lat: 30.5852, lng: 36.2384 },
      { country: "New Zealand", lat: -40.9006, lng: 174.886 },
      { country: "Norway", lat: 60.472, lng: 8.4689 },
      { country: "Oman", lat: 21.4735, lng: 55.9754 },
      { country: "Qatar", lat: 25.3548, lng: 51.1839 },
      { country: "Russia", lat: 61.524, lng: 105.3188 },
      { country: "Sweden", lat: 60.1282, lng: 18.6435 },
      { country: "United Kingdom", lat: 55.3781, lng: -3.436 },
      { country: "United States", lat: 37.0902, lng: -95.7129 },
    ],
    []
  );


  const arcs = useMemo(() => {
    const home = places[0];
    if (!home) return [];
    return places.slice(1).map((p) => ({
      startLat: home.lat,
      startLng: home.lng,
      endLat: p.lat,
      endLng: p.lng,
    }));
  }, [places]);

  // Countries panel (handles 30–40+ easily)
  const countries = useMemo(() => {
    const map = new Map();
    for (const p of places) {
      const key = p.country || "Unknown";
      map.set(key, (map.get(key) || 0) + 1);
    }
    return [...map.entries()]
      .map(([country, count]) => ({ country, count }))
      .sort((a, b) => b.count - a.count || a.country.localeCompare(b.country));
  }, [places]);

  // Size globe by container width + aspect ratio (portrait gets taller), clamp height
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const compute = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.max(280, Math.floor(rect.width));

      const vw = window.innerWidth || w;
      const vh = window.innerHeight || 700;
      const aspect = vw / Math.max(1, vh);

      const target =
        aspect < 0.62 ? w * 1.05 :      // portrait: taller
        aspect < 0.9  ? w * 0.82 :      // mid
                        w * 0.62;       // desktop: shorter

      const h = Math.floor(Math.max(280, Math.min(620, target)));
      setSize({ w, h });
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Camera + rotation, adjusted for portrait
  useEffect(() => {
    if (!globeRef.current) return;

    const setView = () => {
      const isPortrait =
        window.matchMedia?.("(orientation: portrait)")?.matches ||
        window.innerHeight > window.innerWidth;

      globeRef.current.pointOfView(
        { lat: 10, lng: 80, altitude: isPortrait ? 3.0 : 2.1 },
        800
      );

      const c = globeRef.current.controls();
      c.autoRotate = true;
      c.autoRotateSpeed = 0.55;
    };

    setView();
    window.addEventListener("resize", setView);
    return () => window.removeEventListener("resize", setView);
  }, []);

  return (
    <div className="pageWrap">
      <header className="hero2">
        <div className="hero2-bg" />
        <div className="hero2-inner">
          <div className="brandchip">
            <span className="dot" />
            <span>THE DERANGED ENGINEER</span>
            <span className="sep">/</span>
            <span>TRAVEL</span>
          </div>

          <div className="heroTitleRow">
            <img className="pfpTitle" src="/meraghav.jpg" alt="Raghav Sriram" loading="eager" />
            <div className="heroTitles">
              <h1 className="hero2-title">Raghav Sriram</h1>
              <h2 className="hero2-title2">Serial Backpacker · Adventurer</h2>
            </div>
          </div>

          <p className="hero2-sub">The world is literally an open-world game with days, even years of playtime.</p>

          <div className="heroQuickGrid">
            <div className="heroQuick">
              <div className="tkQuickK">Travel Style</div>
              <div className="tkQuickV">Explorer</div>
              <div className="tkQuickS">The Leaning Tower of Pisa is a just a tower</div>
            </div>
            <div className="heroQuick">
              <div className="tkQuickK">Countries</div>
              <div className="tkQuickV">{countries.length}</div>
              <div className="tkQuickS">Distinct Countries / Territories</div>
            </div>
            <div className="heroQuick">
              <div className="tkQuickK">I made a</div>
              <div className="tkQuickV">3D Globe</div>
              <div className="tkQuickS">With Awesome Pins and Animations</div>
            </div>
          </div>
        </div>
      </header>

      <section className="section2" id="globe">
        <div className="sectionHead">
          <span className="sig">// travel / globe</span>
          <span className="bar" />
        </div>

        <div className="travelGlobeWrap">
          <div className="travelGlobeStage" ref={stageRef}>
            <Globe
              ref={globeRef}
              width={size.w}
              height={size.h}
              backgroundColor="rgba(0,0,0,0)"
              globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
              bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
              pointsData={places}
              pointLat={(d) => d.lat}
              pointLng={(d) => d.lng}
              pointAltitude={0.015}
              pointRadius={size.w < 420 ? 0.22 : 0.34}
              pointLabel={(d) => `${d.name}, ${d.country}`}
              arcsData={arcs}
              arcColor={() => ["rgba(255,43,43,0.75)", "rgba(255,122,24,0.45)"]}
              arcAltitude={0.22}
              arcStroke={size.w < 420 ? 0.65 : 0.9}
              arcDashLength={0.45}
              arcDashGap={2.2}
              arcDashAnimateTime={1200}
            />
          </div>

          <aside className="travelCountriesPanel panel2">
            <div className="travelCountriesHead">
              <div className="miniHead">Countries</div>
              <div className="travelCountriesMeta">{countries.length}</div>
            </div>

            <div className="travelCountriesList">
              {countries.map((c) => (
                <div className="travelCountryRow" key={c.country}>
                  <span className="travelCountryDot" />
                  <span className="travelCountryName">{c.country}</span>
                  <span className="travelCountryCount">{c.count}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}




/* ---------------- App Shell + Icon Menu ---------------- */

function IconMenu() {
  const items = [
    { to: "/", label: "Home", icon: <FaRobot /> },
    { to: "/theatre-arts", label: "Theatre Arts", icon: <FaTheaterMasks /> },
    { to: "/taekwondo", label: "Taekwondo", icon: <FaFistRaised /> },
    { to: "/motorsports", label: "Motorsports", icon: <FaFlagCheckered /> },
    { to: "/lockpicking", label: "Lockpicking", icon: <FaLockOpen /> },
    { to: "/research", label: "Research Work", icon: <FaPenNib /> },
    { to: "/travel", label: "Travel", icon: <FaGlobe /> },
  ];

  return (
    <nav className="iconDock" aria-label="Site navigation">
      {items.map((it) => (
        <NavLink
          key={it.to}
          to={it.to}
          className={({ isActive }) => `dockItem ${isActive ? "active" : ""}`}
          title={it.label}
          aria-label={it.label}
        >
          <span className="dockIcon">{it.icon}</span>
          <span className="dockLabel">{it.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default function App() {
  return (
    <div className="app">
      <IconMenu />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theatre-arts" element={<TheatreArts />} />
        <Route path="/taekwondo" element={<Taekwondo />} />
        <Route path="/motorsports" element={<Motorsports />} />
        <Route path="/research" element={<Research />} />
        <Route path="/lockpicking" element={<Lockpicking />} />
        <Route path="/travel" element={<Travel />} />
      </Routes>
    </div>
  );
}
