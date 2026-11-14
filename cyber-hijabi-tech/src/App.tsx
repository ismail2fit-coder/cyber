import { useState } from 'react';
import {
  ArrowUpRight,
  Menu,
  X,
  ShieldCheck,
  GraduationCap,
  Users,
  Laptop,
  Mail,
  Instagram,
  Linkedin,
  ChevronRight,
  BookOpen,
  Lightbulb,
  HeartHandshake,
} from 'lucide-react';

const LINKEDIN = 'https://www.linkedin.com/company/cyber-hijabi-tech/';

const programs = [
  {
    number: '01',
    icon: GraduationCap,
    title: 'Cybersecurity Education',
    text: 'Making digital safety and cybersecurity knowledge easier to understand through accessible learning and practical guidance.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Community & Mentorship',
    text: 'Building a supportive community where learners can connect, grow, share opportunities and learn from one another.',
  },
  {
    number: '03',
    icon: Laptop,
    title: 'Skills & Career Development',
    text: 'Helping aspiring professionals build practical skills, confidence and a clearer path into the technology industry.',
  },
];

const gallery = [
  {
    src: '/resources/girls-school-group.jpg',
    alt: 'Students in white hijabs holding CyberTeenz guides outside their school',
  },
  {
    src: '/resources/girls-purple-group.jpg',
    alt: 'Group photo of students in a classroom after a cybersecurity session',
  },
  {
    src: '/resources/presenter-session.jpg',
    alt: 'Presenter delivering a digital safety session to students',
  },
  {
    src: '/resources/hall-session.jpg',
    alt: 'Students seated in a hall during an awareness session',
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const closeMenu = () => setMenuOpen(false);
  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      setSubscribed(false);
      return;
    }
    setEmailError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Cyber Hijabi Tech home"
        >
          <span className="brand-mark">
            <ShieldCheck size={23} strokeWidth={2.2} />
          </span>
          <span className="brand-name">
            CYBER <b>HIJABI</b>
            <small>TECH</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#programs" onClick={closeMenu}>
            What We Do
          </a>
          <a href="#impact" onClick={closeMenu}>
            Impact
          </a>
          <a href="#community" onClick={closeMenu}>
            Community
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <a
            className="nav-cta"
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Connect <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image">
            <img
              src="/resources/awareness-tour.jpg"
              alt="Cyber Hijabi Tech team with students at the CyberSmart Kano Cybersecurity Awareness Tour"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow light">
              <span /> DIGITAL SKILLS · CYBERSECURITY · COMMUNITY
            </div>
            <h1>
              Empowering women.
              <br />
              <em>Securing</em> the digital future.
            </h1>
            <p>
              Creating pathways into technology, building cybersecurity
              awareness and growing a community where every woman can thrive in
              the digital world.
            </p>
            <div className="hero-actions">
              <a className="button button-lime" href="#community">
                Join the community <ArrowUpRight size={17} />
              </a>
              <a className="text-link light-link" href="#about">
                Discover our mission <ChevronRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>01 / A SAFER, MORE INCLUSIVE DIGITAL WORLD</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-kicker">01 — WHO WE ARE</div>
          <div className="intro-grid">
            <h2>
              Technology is for <span>everyone.</span>
              <br />
              Opportunity should be, too.
            </h2>
            <div className="intro-copy">
              <p>
                Cyber Hijabi Tech is a community-led initiative focused on
                making technology and cybersecurity more accessible, inclusive
                and empowering.
              </p>
              <p>
                We believe that knowledge creates confidence. Through learning,
                mentorship and community, we want more women to participate in
                shaping a safer digital future.
              </p>
              <a
                className="under-link"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                Meet us on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="values-row">
            <div>
              <ShieldCheck />
              <b>Digital safety</b>
              <span>Awareness that protects</span>
            </div>
            <div>
              <BookOpen />
              <b>Accessible learning</b>
              <span>Knowledge without barriers</span>
            </div>
            <div>
              <HeartHandshake />
              <b>Inclusive community</b>
              <span>Growing stronger together</span>
            </div>
            <div>
              <Lightbulb />
              <b>Future-ready skills</b>
              <span>Confidence through practice</span>
            </div>
          </div>
        </section>

        <section className="program-section section-pad" id="programs">
          <div className="section-kicker">02 — OUR FOCUS</div>
          <div className="section-heading">
            <h2>
              Learn. Connect.
              <br />
              <span>Make an impact.</span>
            </h2>
            <p>
              We create meaningful ways to explore technology, strengthen
              digital confidence and open doors to new possibilities.
            </p>
          </div>
          <div className="program-grid">
            {programs.map(item => {
              const Icon = item.icon;
              return (
                <article className="program-card" key={item.number}>
                  <div className="program-top">
                    <span>{item.number}</span>
                    <Icon size={25} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={'Learn more about ' + item.title}
                  >
                    Explore <ArrowUpRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="feature-section section-pad">
          <div className="feature-image">
            <img
              src="/resources/cyberteenz-classroom.jpg"
              alt="A facilitator presenting to a classroom of students with the CyberTeenz guide in the foreground"
            />
            <span className="image-caption">
              COMMUNITY · KNOWLEDGE · IMPACT
            </span>
          </div>
          <div className="feature-copy">
            <div className="section-kicker">03 — WHY IT MATTERS</div>
            <h2>
              A community where <span>potential</span> becomes possibility.
            </h2>
            <p>
              The digital world is full of opportunities, but access to
              knowledge, guidance and support can make all the difference.
            </p>
            <p>
              We are here to encourage curiosity, celebrate progress and help
              build a more inclusive technology ecosystem.
            </p>
            <a
              className="button button-dark"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              Be part of the movement <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="impact-section section-pad" id="impact">
          <div className="section-kicker">04 — OUR IMPACT</div>
          <div className="section-heading">
            <h2>
              Awareness in
              <br />
              <span>action.</span>
            </h2>
            <p>
              From classrooms to school halls, we bring practical digital
              safety conversations directly to students.
            </p>
          </div>
          <div className="gallery-grid">
            {gallery.map(item => (
              <figure className="gallery-item" key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="book-section section-pad" id="cyberteenz">
          <div className="book-image">
            <img
              src="/resources/cyberteenz-book.jpg"
              alt="CyberTeenz: A Security Guide for Teenagers, by Maryam Shuaibu Aliyu"
              loading="lazy"
            />
          </div>
          <div className="feature-copy">
            <div className="section-kicker">05 — THE BOOK</div>
            <h2>
              CyberTeenz: a security guide <span>for teenagers.</span>
            </h2>
            <p>
              For every teen who has ever tapped a link and wondered: was that
              a mistake? CyberTeenz is a practical guide to staying safe
              online, written by Maryam Shuaibu Aliyu (CyberHijabi_Tech).
            </p>
            <a
              className="button button-dark"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              Learn more <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="community-section section-pad" id="community">
          <div className="community-orb orb-one" />
          <div className="community-orb orb-two" />
          <div className="section-kicker light">06 — GET INVOLVED</div>
          <h2>
            Your journey in tech
            <br />
            can start <em>right here.</em>
          </h2>
          <p>
            Whether you're exploring cybersecurity, building your skills,
            looking for community or ready to support others, there's room for
            you.
          </p>
          <a
            className="button button-lime"
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
          >
            Connect with Cyber Hijabi Tech <ArrowUpRight size={17} />
          </a>
        </section>

        <section className="newsletter section-pad">
          <div>
            <div className="section-kicker">07 — STAY IN THE LOOP</div>
            <h2>
              Keep learning.
              <br />
              <span>Stay connected.</span>
            </h2>
          </div>
          <div className="newsletter-form-wrap">
            <p>
              Follow our journey for community updates, learning opportunities
              and digital safety insights.
            </p>
            <a
              className="button button-dark"
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={17} /> Follow us on LinkedIn{' '}
              <ArrowUpRight size={16} />
            </a>
            <form className="email-form" onSubmit={handleSubscribe}>
              <label htmlFor="email">Get occasional updates by email</label>
              <div className="email-row">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <ArrowUpRight />
                </button>
              </div>
              {emailError && (
                <span className="form-message error">{emailError}</span>
              )}
              {subscribed && (
                <span className="form-message">
                  Thanks for your interest! Email subscription integration can
                  be connected when ready.
                </span>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">
              <ShieldCheck size={23} />
            </span>
            <span className="brand-name">
              CYBER <b>HIJABI</b>
              <small>TECH</small>
            </span>
          </a>
          <p>
            Empowering women through technology, cybersecurity awareness and
            community.
          </p>
          <a className="footer-email" href="mailto:hello@cyberhijabitech.com">
            <Mail size={16} /> Get in touch
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Cyber Hijabi Tech. All rights reserved.
          </span>
          <div>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a href="#home" aria-label="Back to top">
              ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
