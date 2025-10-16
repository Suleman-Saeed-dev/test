import "./About.css";

function About() {
  const milestones = [
    {
      year: "2016",
      title: "Started Freelancing",
      description: "Began my journey as a content writer",
    },
    {
      year: "2018",
      title: "First Major Client",
      description: "Landed a Fortune 500 tech company",
    },
    {
      year: "2020",
      title: "Specialized in B2B",
      description: "Focused on B2B SaaS content strategy",
    },
    {
      year: "2023",
      title: "Published Author",
      description: "Released guide on content marketing",
    },
  ];

  return (
    <div className="about">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sarah Mitchell"
              />
            </div>
            <div className="about-text">
              <h1>About Me</h1>
              <h3 className="about-subtitle">
                A Storyteller at Heart, A Strategist in Practice
              </h3>
              <p>
                With over 5 years of experience in content writing, I've helped
                businesses across tech, finance, healthcare, and lifestyle
                industries find their voice and connect with their audiences. My
                approach combines creativity with data-driven strategy to
                deliver content that not only engages but converts.
              </p>
              <p>
                I believe that great content starts with understanding. Whether
                I'm crafting a blog post, writing website copy, or developing a
                content strategy, I take the time to learn about your brand,
                your audience, and your goals.
              </p>
              <p>
                My passion lies in transforming complex ideas into clear,
                compelling narratives that resonate. From technical whitepapers
                to conversational blog posts, I adapt my style to match your
                brand's unique voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <h2 className="section-title">Areas of Expertise</h2>
          <div className="expertise-grid">
            <div className="expertise-card">
              <h3>SEO Content Writing</h3>
              <p>
                Creating search-optimized content that ranks well and reads
                naturally
              </p>
            </div>
            <div className="expertise-card">
              <h3>B2B Content Strategy</h3>
              <p>
                Developing content that drives leads and builds authority in
                complex industries
              </p>
            </div>
            <div className="expertise-card">
              <h3>Brand Storytelling</h3>
              <p>
                Crafting narratives that bring brands to life and build
                emotional connections
              </p>
            </div>
            <div className="expertise-card">
              <h3>Thought Leadership</h3>
              <p>
                Positioning executives and companies as industry experts through
                compelling content
              </p>
            </div>
            <div className="expertise-card">
              <h3>Content Marketing</h3>
              <p>
                Building comprehensive content strategies that support business
                objectives
              </p>
            </div>
            <div className="expertise-card">
              <h3>Technical Writing</h3>
              <p>
                Simplifying complex topics for diverse audiences without losing
                accuracy
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section timeline-section">
        <div className="container">
          <h2 className="section-title">My Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section personal-section">
        <div className="container">
          <div className="personal-content">
            <h2>Beyond Writing</h2>
            <p>
              I build, customize, and optimize WordPress websites to help brands
              establish a strong online presence. From theme customization to
              plugin integration and SEO setup, I ensure clean, efficient, and
              scalable solutions.
            </p>
            <p>
              I use modern web scraping tools and automation to collect,
              structure, and analyze data efficiently. This helps in content
              research, lead generation, competitor analysis, and data-driven
              decision making.
            </p>
            <p>
              I'm passionate about writing and
              staying up-to-date with the latest content marketing and digital
              trends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
