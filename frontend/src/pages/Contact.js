import React, { useState } from 'react';
import '../styles/Contact.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>

      <section className="contact-intro">
        <p>
          Have questions or feedback about our website? Want to share your story or request specific information? 
          We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </section>

      <section className="contact-container">
        <div className="contact-form-section">
          <h2>Send us a Message</h2>
          {submitted ? (
            <div className="success-message">
              <h3>✅ Thank You!</h3>
              <p>Your message has been received. We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
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
                  placeholder="Enter your email address"
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
                  placeholder="What is this regarding?"
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
                  placeholder="Please share your message or question..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          )}
        </div>

        <div className="contact-info-section">
          <h2>Other Ways to Reach Us</h2>
          
          <div className="info-box">
            <h3>📞 Helplines</h3>
            <p><strong>National Cancer Institute:</strong></p>
            <p>1-800-4-CANCER (1-800-422-6237)</p>
            <p className="info-detail">Monday-Friday, 8am-8pm EST</p>

            <p><strong>American Cancer Society:</strong></p>
            <p>1-800-ACS-2345 (1-800-227-2345)</p>
            <p className="info-detail">24/7 support</p>
          </div>

          <div className="info-box">
            <h3>🌐 Online Resources</h3>
            <p><strong>National Ovarian Cancer Coalition</strong></p>
            <p><a href="#" target="_blank">www.ovarian.org</a></p>
            <p className="info-detail">Phone: 1-888-OVARIAN</p>

            <p><strong>Cancer Support Community</strong></p>
            <p><a href="#" target="_blank">www.cancersupportcommunity.org</a></p>
            <p className="info-detail">Phone: 1-888-793-9355</p>
          </div>

          <div className="info-box">
            <h3>🏥 Healthcare Providers</h3>
            <p>For medical questions and concerns, please contact:</p>
            <p>Your primary care physician or oncologist</p>
            <p className="info-detail">Emergency: Call 911 or visit the nearest emergency room</p>
          </div>

          <div className="info-box">
            <h3>❓ Quick Support</h3>
            <ul>
              <li><a href="/about">Learn about ovarian cancer</a></li>
              <li><a href="/symptoms">Check symptoms</a></li>
              <li><a href="/faq">View frequently asked questions</a></li>
              <li><a href="/resources">Find support resources</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="important-notice">
        <h2>⚠️ Important Notice</h2>
        <p>
          <strong>This website is for educational purposes only and should not be used for medical diagnosis or treatment.</strong>
          The information provided here is not a substitute for professional medical advice. If you believe you have ovarian cancer 
          or are experiencing concerning symptoms, please consult with a qualified healthcare provider immediately.
        </p>
        <p>
          In case of medical emergency, please call 911 or visit your nearest emergency room.
        </p>
      </section>
    </div>
  );
}

export default Contact;
