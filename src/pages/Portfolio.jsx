import { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import './Portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Tech', 'Lifestyle', 'B2B', 'SEO'];

  const portfolioItems = [
    {
      title: 'Building a Strong SaaS Content Marketing Strategy',
      category: 'B2B',
      type: 'article',
      description: 'A comprehensive guide for B2B SaaS companies on developing effective content marketing strategies.',
      client: 'TechStart Magazine',
      link: '#',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: '10 Wellness Habits That Changed My Life',
      category: 'Lifestyle',
      type: 'article',
      description: 'Personal development article exploring transformative daily wellness practices.',
      client: 'Wellness Today',
      link: '#',
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'AI in Healthcare: Opportunities and Challenges',
      category: 'Tech',
      type: 'article',
      description: 'In-depth analysis of artificial intelligence applications in modern healthcare.',
      client: 'HealthTech Insights',
      link: '#',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Complete SEO Guide for Small Businesses',
      category: 'SEO',
      type: 'pdf',
      description: 'Downloadable guide covering essential SEO strategies for small business owners.',
      client: 'Growth Marketing Hub',
      link: '#',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Product Launch Case Study: From Zero to Hero',
      category: 'B2B',
      type: 'pdf',
      description: 'Detailed case study documenting a successful product launch campaign.',
      client: 'StartUp Success',
      link: '#',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'The Future of Remote Work Technology',
      category: 'Tech',
      type: 'article',
      description: 'Exploring emerging technologies shaping the future of distributed teams.',
      client: 'Future of Work',
      link: '#',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Sustainable Living: A Practical Guide',
      category: 'Lifestyle',
      type: 'article',
      description: 'Actionable tips for incorporating sustainability into everyday life.',
      client: 'Green Living Magazine',
      link: '#',
      image: 'https://images.pexels.com/photos/6591358/pexels-photo-6591358.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'SEO Content Strategy Playbook',
      category: 'SEO',
      type: 'pdf',
      description: 'Step-by-step framework for building and executing an SEO content strategy.',
      client: 'Digital Marketing Pro',
      link: '#',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'E-commerce Platform Comparison Guide',
      category: 'B2B',
      type: 'article',
      description: 'Comprehensive comparison of leading e-commerce platforms for businesses.',
      client: 'E-commerce Weekly',
      link: '#',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="portfolio">
      <section className="portfolio-hero section">
        <div className="container">
          <h1>Portfolio</h1>
          <p className="hero-description">
            A selection of my published work across various industries and formats
          </p>
        </div>
      </section>

      <section className="section portfolio-content">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredItems.map((item, index) => (
              <div key={index} className="portfolio-card">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} />
                  <div className="portfolio-overlay">
                    <a href={item.link} className="view-link">
                      {item.type === 'pdf' ? <FileText size={24} /> : <ExternalLink size={24} />}
                      <span>{item.type === 'pdf' ? 'Download' : 'Read Article'}</span>
                    </a>
                  </div>
                </div>
                <div className="portfolio-info">
                  <div className="portfolio-meta">
                    <span className="category-tag">{item.category}</span>
                    <span className="type-tag">{item.type}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="client-info">
                    <span className="client-label">Published by:</span>
                    <span className="client-name">{item.client}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
