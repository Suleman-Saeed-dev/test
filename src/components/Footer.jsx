import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import { SiUpwork, SiFiverr } from 'react-icons/si';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Sawaira Maroof</h3>
            <p className="footer-tagline">
              Crafting stories that connect and convert
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-icons">

              <a
                href="https://linkedin.com/in/sawaira-maroof"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            
              <a
                href="mailto:sawairamaroof61@gmail.com"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>

                             <a
                href="https://www.fiverr.com/sawairamaroof"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fiverr"
              >
                <SiFiverr size={20} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/sawaira"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Upwork"
              >
                <SiUpwork size={20} />
              </a>
            </div>
          </div>

          {/* <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="newsletter-text">
              Get writing tips and insights delivered to your inbox
            </p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Your email"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sawaira Maroof. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
