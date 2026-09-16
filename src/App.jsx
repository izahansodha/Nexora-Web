import "./App.css";
import { motion } from "motion/react";
import { CountUp } from "./components/CountUp";
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built for modern businesses.",
    icon: "↗",
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "Smart AI solutions and automation systems that reduce repetitive work.",
    icon: "✦",
  },
  {
    number: "03",
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure designed for reliability and growth.",
    icon: "◈",
  },
  {
    number: "04",
    title: "IT Consulting",
    description:
      "Strategic technology consulting to turn complex challenges into opportunities.",
    icon: "⌘",
  },
];

const projects = [
  {
    category: "TECHNOLOGY",
    title: "Agency Website",
    description: "A modern, responsive website showcasing our agency's capabilities.",
    gradient: "project-blue",
    link : "https://agency-web-page-livid.vercel.app/"
  },
  {
    category: "Finance",
    title: "Ai Banking",
    description: "Intelligent automation platform for Banking.",
    gradient: "project-purple",
    link : "https://ai-powered-bank-mange-system.vercel.app/login"
  },
  {
    category: "E-COMMERCE",
    title: "Velo Commerce",
    description: "A high-performance commerce experience built to scale.",
    gradient: "project-cyan",
    link : "#"
  },
];

function App() {
  return (
    <div className="site">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          <span className="logo-mark">
            <span />
            <span />
          </span>
          <span>NEXORA</span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="home">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />

          <motion.div
  className="hero-content"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
            <div className="eyebrow">
              <span className="status-dot" />
              DIGITAL TECHNOLOGY PARTNER
            </div>    

            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.0, delay: 0.6,ease :"easeOut" }}
>
  We build
  <br />
  <span>technology</span>
  <br />
  that moves.
</motion.h1>



            <p className="hero-description">
              NEXORA helps ambitious businesses transform ideas into
              powerful digital products, intelligent systems, and scalable
              technology.
            </p>

            <div className="hero-actions">
              <motion.a
  href="#contact"
  className="button button-primary"
  whileHover={{
    scale: 1.05,
    boxShadow: "0 15px 40px rgba(100, 120, 255, 0.3)",
  }}
  whileTap={{ scale: 0.97 }}
>
  Start a Project <span>↗</span>
</motion.a>

             <motion.a
  href="#contact"
  className="button button-primary"
  whileHover={{
    scale: 1.05,
    boxShadow: "0 15px 40px rgba(100, 120, 255, 0.3)",
  }}
  whileTap={{ scale: 0.97 }}
>
                Explore Our Work
              </motion.a>
            </div>
          </motion.div>

          <div className="hero-visual">
            <motion.div
  className="orbit orbit-one"
  animate={{ rotate: 360 }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
/>

           <motion.div
  className="orbit orbit-two"
  animate={{ rotate: -360 }}
  transition={{
    duration: 28,
    repeat: Infinity,
    ease: "linear",
  }}
/>

            <div className="orbit orbit-three" />

            <motion.div
  className="core"
  animate={{
    y: [0, -15, 0],
    rotate: [0, 3, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  <div className="core-n">N</div>
</motion.div>


            <div className="floating-card card-top">
              <span>AI</span>
              <strong>Intelligent</strong>
            </div>

            <div className="floating-card card-bottom">
              <span>∞</span>
              <strong>Scalable</strong>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="trust-bar">
          <p>TRUSTED TECHNOLOGY</p>
          <div className="tech-list">
            <span>React</span>
            <span>Node.js</span>
            <span>Python</span>
            <span>AWS</span>
            <span>OpenAI</span>
            <span>Next.js</span>
          </div>
        </section>

        {/* SERVICES */}
        <section className="section services" id="services">
          <div className="section-heading">
            <div>
              <span className="section-label">WHAT WE DO</span>
              <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: "easeOut",
}}
>

                Technology built
                <br />
                <em>around your goals.</em>
              </motion.h2>
            </div>

            <p>
              From strategy to execution, we create digital solutions that
              solve real problems and create measurable business value.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
  <motion.article
    className="service-card"
    key={service.number}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
    }}
     whileHover={{
    y: -8,
    borderColor: "rgba(110, 130, 255, 0.4)",
  }}
  >
    <div className="service-top">
      <span>{service.number}</span>
      <div className="service-icon">{service.icon}</div>
    </div>

    <h3>{service.title}</h3>
    <p>{service.description}</p>

    <a href="#contact">
      Learn more <span>→</span>
    </a>
  </motion.article>
))}


          </div>
        </section>

        {/* ABOUT / STATS */}
        <section className="about section" id="about">
          <div className="about-content">
            <span className="section-label">WHY NEXORA</span>

            <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: "easeOut",
}}
>
              Your vision.
              <br />
              <span>Our technology.</span>
            </motion.h2>

            <p>
              We combine design, engineering, and strategic thinking to
              build technology that makes businesses faster, smarter, and
              ready for what's next.
            </p>

            <a href="#contact" className="text-link">
              Work with us <span>↗</span>
            </a>
          </div>

          <div className="stats">
  <div className="stat">
    <strong>
      <CountUp end={150} suffix="+" />
    </strong>
    <span>Projects delivered</span>
  </div>

  <div className="stat">
    <strong>
      <CountUp end={40} suffix="+" />
    </strong>
    <span>Global clients</span>
  </div>

  <div className="stat">
    <strong>
      <CountUp end={10} suffix="+" />
    </strong>
    <span>Years experience</span>
  </div>

  <div className="stat">
    <strong>
      <CountUp end={98} suffix="%" />
    </strong>
    <span>Client satisfaction</span>
  </div>
</div>
</section>

        {/* WORK */}
        <section className="section work" id="work">
          <div className="section-heading">
            <div>
              <span className="section-label">SELECTED WORK</span>
               <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: "easeOut",
}}
>
                Ideas turned
                <br />
                <em>into impact.</em>
              </motion.h2>
            </div>

            <a href="#contact" className="text-link">
              View all projects <span>↗</span>
            </a>
          </div>

          <div className="projects">
            {projects.map((project,index) => (
              <motion.article className={`project ${project.gradient}`} key={project.title} initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.6,
      delay: index * 0.1,
    }}
     whileHover={{
    y: -8,
    borderColor: "rgba(110, 130, 255, 0.4)",
  }}>
                <div>{index + 1}</div>
                <div className="project-shape shape-one" />
                <div className="project-shape shape-two" />

                <div className="project-info">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <button className="project-arrow" aria-label={`View ${project.title}`} href={`${project.link}`}>
                  ↗
                </button>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta section" id="contact">
          <div className="cta-glow" />

          <motion.span
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: "easeOut",
}}
 className="section-label">LET'S BUILD SOMETHING</motion.span>

           <motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: "easeOut",
}}
>

            Have an idea?
            <br />
            <span>Let's make it real.</span>
          </motion.h2>

          <motion.p  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{
    duration: 1,
    delay: 0.6,
    ease: "easeOut",
}}>
            Tell us about your challenge, idea, or next big project.
          </motion.p>

          <motion.a href="mailto:izahansodha5316@gmail.com" className="button button-light" 
          whileHover={{
    scale: 1.05,
    boxShadow: "0 15px 40px rgba(100, 120, 255, 0.3)",
  }}
  whileTap={{ scale: 0.97 }}>
            Start a Conversation <span>↗</span>
          </motion.a>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <span className="logo-mark">
            <span />
            <span />
          </span>
          NEXORA
        </div>

        <p>Technology. Simplified.</p>

        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <span className="copyright">
          © {new Date().getFullYear()} NEXORA
        </span>
      </footer>
    </div>
  );
}

export default App;
