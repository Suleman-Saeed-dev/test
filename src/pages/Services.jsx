import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import "./Services.css";

function Services() {
  const services = [
    {
      title: "Blog Posts & Articles",
      description:
        "Engaging, well-researched blog content that drives organic traffic and establishes your brand as an authority.",
      deliverables: [
        "SEO-optimized articles",
        "Industry research and analysis",
        "Keyword integration",
        "Meta descriptions",
        "Internal linking strategy",
      ],
      example: "Sample: 1,500-2,000 word blog post",
    },
    {
      title: "Website Copy",
      description:
        "Compelling web content that converts visitors into customers while reflecting your brand voice.",
      deliverables: [
        "Homepage copy",
        "About page narratives",
        "Product/service descriptions",
        "Landing page content",
        "Call-to-action optimization",
      ],
      example: "Sample: Complete website content package",
    },
    {
      title: "SEO Content",
      description:
        "Search-optimized content designed to improve your rankings while providing value to readers.",
      deliverables: [
        "Keyword research",
        "Topic clustering",
        "On-page SEO optimization",
        "Content gap analysis",
        "Performance tracking setup",
      ],
      example: "Sample: Monthly SEO content strategy",
    },
    {
      title: "Product Descriptions",
      description:
        "Persuasive product copy that highlights benefits and drives purchase decisions.",
      deliverables: [
        "Feature-benefit writing",
        "Brand voice consistency",
        "SEO optimization",
        "Multiple format options",
        "A/B testing variations",
      ],
      example: "Sample: E-commerce product catalog",
    },
    {
      title: "Email Campaigns",
      description:
        "Strategic email content that nurtures leads and maintains customer relationships.",
      deliverables: [
        "Welcome sequences",
        "Newsletter content",
        "Promotional campaigns",
        "Drip campaign series",
        "Subject line optimization",
      ],
      example: "Sample: 5-email nurture sequence",
    },
    {
      title: "Ghostwriting",
      description:
        "Professional ghostwriting services for thought leadership pieces, books, and executive content.",
      deliverables: [
        "LinkedIn articles",
        "Executive blog posts",
        "Industry whitepapers",
        "E-books and guides",
        "Speaking scripts",
      ],
      example: "Sample: Thought leadership article series",
    },
    {
      title: "Case Studies",
      description:
        "Data-driven success stories that demonstrate your value and build credibility.",
      deliverables: [
        "Customer interviews",
        "Results analysis",
        "Narrative structure",
        "Visual data presentation",
        "Multiple format versions",
      ],
      example: "Sample: Customer success case study",
    },
    {
      title: "Technical Writing",
      description:
        "Clear, structured, and accurate technical documentation to support your products and users.",
      deliverables: [
        "User manuals",
        "API documentation",
        "Product guides",
        "Knowledge base articles",
        "Technical reports",
      ],
      example: "Sample: Product user manual or API documentation",
    },
    {
      title: "Copywriting",
      description:
        "Persuasive and impactful copy designed to engage your audience and drive conversions.",
      deliverables: [
        "Website copy",
        "Landing pages",
        "Ad copy",
        "Email campaigns",
        "Sales pages",
      ],
      example: "Sample: Homepage copy and ad campaign content",
    },
  ];

  return (
    <div className="services">
      <section className="services-hero section">
        <div className="container">
          <div className="services-hero-content">
            <h1>Services</h1>
            <p className="hero-description">
              Comprehensive writing solutions designed to elevate your brand and
              drive measurable results. Each service is customized to meet your
              unique needs and business objectives.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-list">
        <div className="container">
          <div className="services-grid-layout">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="deliverables">
                  <h4>What You Get:</h4>
                  <ul>
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <Check size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="service-example">{service.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">My Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Discovery</h3>
              <p>
                We discuss your goals, audience, and brand voice to ensure
                alignment
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Research</h3>
              <p>
                I dive deep into your industry, competitors, and target audience
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Creation</h3>
              <p>I craft compelling content that meets your objectives</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Refinement</h3>
              <p>We collaborate on revisions to perfect the final piece</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss how I can help bring your content vision to life
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get Started
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
