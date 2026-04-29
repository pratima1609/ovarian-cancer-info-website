import React, { useState } from 'react';
import '../styles/Pages.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>

      <section className="section">
        <p>
          Have questions or feedback about our website? We'd love to hear from you. 
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </section>

      <div className="contact-container">
        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          {submitted && (
            <div className="success-message">
              ✓ Thank you for your message! We'll respond as soon as possible.
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
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
                placeholder="Message subject"
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
                placeholder="Your message here..."
              />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info-section">
          <h2>Other Ways to Reach Us</h2>
          
          <div className="info-box">
            <h3>📞 National Cancer Institute</h3>
            <p><strong>Phone:</strong> 1-800-4-CANCER (1-800-422-6237)</p>
            <p><strong>Hours:</strong> Monday-Friday, 8 AM - 8 PM EST</p>
          </div>

          <div className="info-box">
            <h3>🎗️ American Cancer Society</h3>
            <p><strong>Phone:</strong> 1-800-ACS-2345 (1-800-227-2345)</p>
            <p><strong>Hours:</strong> 24/7</p>
          </div>

          <div className="info-box">
            <h3>💜 Ovarian Cancer Coalition</h3>
            <p><strong>Phone:</strong> 1-866-OVARIAN (1-866-682-7426)</p>
            <p><strong>Website:</strong> www.ovariancancercoalition.org</p>
          </div>

          <div className="info-box">
            <h3>❤️ Cancer Support Community</h3>
            <p><strong>Phone:</strong> 1-888-793-9355</p>
            <p><strong>Hours:</strong> Monday-Friday, 9 AM - 5 PM EST</p>
          </div>
        </div>
      </div>

      <section className="section">
        <h2>Quick Links</h2>
        <div className="quick-links">
          <a href="/" className="link-btn">Home</a>
          <a href="/about" className="link-btn">Learn About Ovarian Cancer</a>
          <a href="/symptoms" className="link-btn">Symptom Checker</a>
          <a href="/resources" className="link-btn">Support Resources</a>
          <a href="/faq" className="link-btn">FAQ</a>
        </div>
      </section>

      <section className="section disclaimer">
        <p>
          <strong>Important Disclaimer:</strong> This website is for educational purposes only. 
          It is not intended to provide medical advice or diagnosis. Always consult with a qualified 
          healthcare professional for medical concerns and treatment recommendations.
        </p>
      </section>
    </div>
  );
}

export default Contact;