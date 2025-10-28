import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Richvara',
      position: 'Marketing Director',
      company: 'TechFlow Solutions',
      rating: 5,
      text: 'We just had another wonderful delivery from Sawaira. Naturally following our ongoing success Sawaira we are preparing to release additional projects in queue.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Ghadeer Majeed',
      position: 'Founder & CEO',
      company: 'GreIP',
      rating: 5,
      text: 'We\'ve been working with Sawaira for several months now, and they consistently deliver high-quality work. Their writing is professional, well-researched, and always meets our requirements. Communication is excellent, deadlines are always met, and they have become a trusted part of our content strategy. Highly recommend for anyone looking for a dependable, skilled writer!',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Norman',
      position: 'Product Manager',
      company: 'CloudSync Inc.',
      rating: 5,
      text: 'Thanks so much you did a fantastic job and I have already sent you some new work',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Luna Xinran',
      position: 'Content Lead',
      company: 'Digital Ventures',
      rating: 5,
      text: 'Really Impressed by the quality of the work and the humble way of communication. It was nice working with you for the second time. Keep it up.',
      image: 'https://images.pexels.com/photos/2182978/pexels-photo-2182978.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Friedrich',
      position: 'E-commerce Director',
      company: 'StyleHub',
      rating: 5,
      text: 'Did really good work,looking forward to work with you again',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Logan Hudson',
      position: 'VP of Marketing',
      company: 'FinanceFirst',
      rating: 5,
      text: 'She understand my work and provided by professional work.',
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
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="author-image"
                  /> */}
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    {/* <p>{testimonial.position}</p> */}
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
                <h3>100%</h3>
                <p>Client Satisfaction Rate</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
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
