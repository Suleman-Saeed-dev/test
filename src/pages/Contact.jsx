import { useState } from 'react';
import { Mail, Linkedin, Twitter, MapPin, Send } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <section className="contact-hero section">
        <div className="container">
          <h1>Let's Work Together</h1>
          <p className="hero-description">
            Ready to elevate your content? Get in touch and let's create something powerful together.
          </p>
        </div>
      </section>

      <section className="section contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p className="contact-intro">
                Whether you have a project in mind, need a content consultation, or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={24} />
                  </div>
                  <div className="method-info">
                    <h4>Email</h4>
                    <a href="mailto:hello@sarahmitchell.com">hello@sarahmitchell.com</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="method-info">
                    <h4>Location</h4>
                    <p>San Francisco, CA</p>
                    <p className="timezone">Available globally via remote work</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <Linkedin size={24} />
                  </div>
                  <div className="method-info">
                    <h4>Social Media</h4>
                    <div className="social-links">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                      <span>•</span>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="availability-info">
                <h3>Current Availability</h3>
                <div className="availability-status">
                  <span className="status-indicator available"></span>
                  <span>Available for new projects</span>
                </div>
                <p>
                  I'm currently accepting new clients for projects starting in the next month. Let's discuss your needs and timeline.
                </p>
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What can I help you with?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                {isSubmitted ? (
                  <div className="success-message">
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </div>
                ) : (
                  <button type="submit" className="submit-btn">
                    <span>Send Message</span>
                    <Send size={20} />
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What's your turnaround time?</h3>
              <p>
                Turnaround times vary depending on project scope. Blog posts typically take 3-5 business days, while larger projects like website copy or content strategies may take 2-3 weeks. Rush delivery is available for an additional fee.
              </p>
            </div>
            <div className="faq-item">
              <h3>What's your pricing structure?</h3>
              <p>
                I offer both per-project and hourly rates depending on the scope of work. After our initial consultation, I'll provide a detailed quote tailored to your specific needs and budget.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you offer revisions?</h3>
              <p>
                Yes! All projects include two rounds of revisions to ensure you're completely satisfied with the final deliverable. Additional revisions can be arranged if needed.
              </p>
            </div>
            <div className="faq-item">
              <h3>What industries do you specialize in?</h3>
              <p>
                I have extensive experience in tech, SaaS, healthcare, finance, e-commerce, and lifestyle sectors. However, I'm always excited to learn about new industries and adapt my writing accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
