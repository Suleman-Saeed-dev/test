import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title fade-in">
                Words That Move People and Drive Results
              </h1>
              <p className="hero-subtitle fade-in-delay">
                Crafting stories that connect and convert
              </p>
              <p className="hero-description fade-in-delay-2">
                Hi, I'm Sarah Mitchell, a content writer who specializes in creating compelling narratives that resonate with audiences and deliver measurable results for businesses.
              </p>
              <div className="hero-buttons fade-in-delay-3">
                <Link to="/portfolio" className="btn btn-primary">
                  View My Work
                  <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Hire Me
                </Link>
              </div>
            </div>
            <div className="hero-image fade-in-delay-2">
              <div className="image-placeholder">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Content writer workspace"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">8+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">200+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-header">
            <h2>What I Do</h2>
            <p>Comprehensive writing services tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">✍️</div>
              <h3>Blog Writing</h3>
              <p>Engaging, SEO-optimized blog posts that drive traffic and build authority</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Website Copy</h3>
              <p>Compelling web content that converts visitors into customers</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📧</div>
              <h3>Email Campaigns</h3>
              <p>Persuasive email content that nurtures leads and drives sales</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-text">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Content?</h2>
            <p>Let's create something powerful together. Get in touch to discuss your project.</p>
            <Link to="/contact" className="btn btn-primary">
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
