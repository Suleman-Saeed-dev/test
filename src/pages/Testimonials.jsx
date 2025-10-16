import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'TechFlow Solutions',
      rating: 5,
      text: 'Sarah transformed our content strategy completely. Her writing not only sounds great but actually drives results. We saw a 150% increase in organic traffic within six months.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Emma Rodriguez',
      position: 'Founder & CEO',
      company: 'GreenLife Wellness',
      rating: 5,
      text: 'Working with Sarah was a game-changer for our brand. She captured our voice perfectly and created content that truly resonates with our audience. Her professionalism and attention to detail are outstanding.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'David Thompson',
      position: 'Product Manager',
      company: 'CloudSync Inc.',
      rating: 5,
      text: 'Sarah has an incredible ability to take complex technical concepts and make them accessible. Her blog posts have helped us establish thought leadership in our industry.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Lisa Park',
      position: 'Content Lead',
      company: 'Digital Ventures',
      rating: 5,
      text: 'I\'ve worked with many writers, but Sarah stands out. She delivers on time, communicates clearly, and her work rarely needs revisions. She just gets it right the first time.',
      image: 'https://images.pexels.com/photos/2182978/pexels-photo-2182978.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'James Wilson',
      position: 'E-commerce Director',
      company: 'StyleHub',
      rating: 5,
      text: 'Sarah\'s product descriptions have directly impacted our conversion rates. She knows how to write copy that sells while maintaining our brand\'s authentic voice.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Rachel Kim',
      position: 'VP of Marketing',
      company: 'FinanceFirst',
      rating: 5,
      text: 'Sarah\'s case studies and whitepapers have become our most valuable marketing assets. Her ability to tell compelling stories backed by data is exceptional.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, index) => (
      <Star key={index} size={18} fill="currentColor" />
    ));
  };

  return (
    <div className="testimonials">
      <section className="testimonials-hero section">
        <div className="container">
          <h1>Client Testimonials</h1>
          <p className="hero-description">
            What my clients say about working with me
          </p>
        </div>
      </section>

      <section className="section testimonials-content">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">
                  <Quote size={40} />
                </div>
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.position}</p>
                    <p className="company-name">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-testimonial">
        <div className="container">
          <div className="stats-content">
            <h2>Trusted by Businesses Worldwide</h2>
            <div className="stats-row">
              <div className="stat-item">
                <h3>98%</h3>
                <p>Client Satisfaction Rate</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Repeat Client Rate</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;
