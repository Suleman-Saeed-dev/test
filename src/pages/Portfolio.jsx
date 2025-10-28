import { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import './Portfolio.css';

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Tech', 'Guide', 'SEO', 'Digital Marketing' ];

  const portfolioItems = [
    {
      title: 'Will AI Replace CAD Drafters in 2025? Expert Analysis, Job Outlook And Career Tips',
      category: 'Technology',
      type: 'Article',
      description: 'Will AI replace CAD drafters? I don’t think so, not fully, not in 2025. Yet the ground is shifting beneath our mouse cursors.',
      client: 'CAD Drafters',
      link: 'https://caddrafter.us/will-ai-replace-cad-drafters-in-2025/',
      image: 'https://caddrafter.us/storage/2025/10/Will-AI-replace-CAD-drafters-845x321.webp'
    },
    {
      title: '5 Important Design Considerations for the Doors in Commercial Construction',
      category: 'Guide',
      type: 'Blog',
      description: 'In the fast-paced world of commercial construction, even the smallest design choices can shape the success of a project and doors are no exception.',
      client: 'CAD Drafters',
      link: 'https://caddrafter.us/design-for-doors-in-commercial-construction/',
      image: "https://caddrafter.us/storage/2025/10/Doors-in-Commercial-Construction-845x321.webp"
    },
    {
      title: 'How Much Does Drywall Installation Cost in 2025?',
      category: 'Construction',
      type: 'Cost Guide',
      description: 'The average cost of drywall installation in 2025 is $1.50-$3.50 per sq ft, though it can vary widely, and is influenced by so many factors, such as materials, labor etc',
      client: 'USA Estimators',
      link: 'https://estimators.us/drywall-installation-cost/',
      image: 'https://estimators.us/wp-content/uploads/2025/10/Does-Drywall-Installation--845x321.webp'
    },
    {
      title: 'How to Delete Photos from Google Business Profile?',
       category: 'Digital Marketing',
      type: 'article',
      description: 'Customers prefer to purchase from businesses with good Google business profiles. With good GMB, the chances of a purchase increase by 50 percent.',
      client: 'Digital Insides',
      link: 'https://digitalinsides.com/how-to-delete-photos-from-google-business-profile/',
      image: 'https://digitalinsides.com/storage/2024/07/delete-photos-on-google-business-profile.png'
    },
    {
      title: 'Clickfunnels vs WordPress: Which is the Better Platform',
      category: 'Digital Marketing',
      type: 'article',
      description: 'Detailed case study documenting a successful product launch campaign.',
      client: 'Digital Insides',
      link: 'https://digitalinsides.com/clickfunnels-vs-wordpress/',
      image: 'https://digitalinsides.com/storage/2024/04/clickfunnels-vs-wordpress.svg'
    },
    {
      title: 'Using IP Geolocation to Prevent Location Spoofing in Online Transactions',
      category: 'Tech',
      type: 'article',
      description: 'Location spoofing poses a threat to businesses in online transactions. IP geolocation tools can help verify user locations in real time to prevent fraud.',
      client: 'GreIP',
      link: 'https://greip.io/blog/Using-IP-Geolocation-to-Prevent-Location-Spoofing-in-Online-Transactions-54',
      image: 'https://greip.io/cdn-cgi/imagedelivery/pdp_3cpmadz4IMGFlvUzaw/98deb8fd-1f7b-4f36-be63-2d6cf468c300/public'
    },
    {
      title: 'How to Choose the Right IP Geolocation API for Your Business + Free Checklist',
      category: 'Tech',
      type: 'article',
      description: 'Choosing the right IP geolocation API is critical for fraud prevention and user experience, especially with rising e-commerce fraud.',
      client: 'GreIP',
      link: 'https://greip.io/blog/How-to-Choose-the-Right-IP-Geolocation-API-for-Your-Business-Free-Checklist-229',
      image: 'https://greip.io/cdn-cgi/imagedelivery/pdp_3cpmadz4IMGFlvUzaw/57efb731-3abf-4f73-62f9-7b1ffd870b00/public'
    },
   
    
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
                    <a href={item.link} target='_blank' className="view-link">
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
