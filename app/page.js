import Image from "next/image";
import {
  profile,
  about,
  experience,
  projects,
  skills,
  extracurricular,
  education,
  contact,
} from "../data";

// Menu items: the id must match a section id below
const menu = ["about", "experience", "projects", "skills", "education", "contact"];

export default function Home() {
  return (
    <>
      {/* ---------- NAVBAR ---------- */}
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#" className="logo">
            {profile.shortName}
          </a>
          <nav>
            {menu.map((item) => (
              <a key={item} href={`#${item}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <Image
            src={profile.photo}
            alt={profile.name}
            width={340}
            height={340}
            className="photo"
            priority
          />
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="buttons">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View projects
            </a>
          </div>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="section">
          <h2>About</h2>
          <p className="about-text">{about.text}</p>
          <p>
            <strong>Hobbies:</strong> <span className="muted">{about.hobbies}</span>
          </p>
          <p>
            <strong>Languages:</strong> <span className="muted">{about.languages}</span>
          </p>
        </section>

        {/* ---------- EXPERIENCE ---------- */}
        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="stack">
            {experience.map((job) => (
              <div key={job.role + job.dates} className="card">
                <div className="row">
                  <h3>{job.role}</h3>
                  <span className="muted small">{job.dates}</span>
                </div>
                <p className="accent">{job.company}</p>
                <p className="muted small">{job.location}</p>
                <ul className="bullets">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- PROJECTS ---------- */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="grid-2">
            {projects.map((project) => (
              <div key={project.name} className="card">
                <div className="row">
                  <h3>{project.name}</h3>
                  <span className="muted small">{project.date}</span>
                </div>
                <p className="accent">{project.role}</p>
                <p className="muted">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                    View project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ---------- SKILLS ---------- */}
        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="grid-3">
            <div className="card">
              <h4>Programming</h4>
              <div className="tags">
                {skills.programming.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h4>Technologies</h4>
              <div className="tags">
                {skills.technologies.map((s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="card">
              <h4>Additional</h4>
              <div className="tags">
                {skills.additional.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card" style={{ marginTop: "1.5rem" }}>
            <h4>Extracurricular &amp; Certifications</h4>
            {extracurricular.map((item) => (
              <p key={item.title}>
                <strong>{item.title}</strong> — <span className="muted">{item.text}</span>
              </p>
            ))}
          </div>
        </section>

        {/* ---------- EDUCATION ---------- */}
        <section id="education" className="section">
          <h2>Education</h2>
          <div className="stack">
            {education.map((school) => (
              <div key={school.school} className="card">
                <div className="row">
                  <h3>{school.school}</h3>
                  <span className="muted small">{school.dates}</span>
                </div>
                <p className="muted small">{school.location}</p>
                <p className="muted">{school.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p className="about-text">{contact.intro}</p>
          <ul className="contact-list">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            </li>
            <li>
              LinkedIn:{" "}
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
                {contact.linkedinText}
              </a>
            </li>
            <li className="muted">{contact.address}</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        © {profile.name}
      </footer>
    </>
  );
}
