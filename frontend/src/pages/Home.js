import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Pages.css';

function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Ovarian Cancer Information & Awareness</h1>
          <p>Your trusted resource for comprehensive ovarian cancer education and support</p>
          <div className="hero-buttons">
            <Link to="/symptoms" className="btn btn-primary">Check Symptoms</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="quick-facts">
        <h2>Quick Facts</h2>
        <div className="facts-grid">
          <div className="fact-card">
            <h3>22,000+ Cases</h3>
            <p>New cases diagnosed annually in the United States</p>
          </div>
          <div className="fact-card">
            <h3>14,000+ Deaths</h3>
            <p>Approximate annual deaths from ovarian cancer in the US</p>
          </div>
          <div className="fact-card">
            <h3>90% Survival</h3>
            <p>5-year survival rate when detected at Stage 1</p>
          </div>
          <div className="fact-card">
            <h3>1 in 78</h3>
            <p>Risk of developing ovarian cancer during lifetime</p>
          </div>
        </div>
      </section>

      <section className="featured-content">
        <h2>Featured Resources</h2>
        <div className="resource-cards">
          <div className="card">
            <h3>🩺 Understanding Ovarian Cancer</h3>
            <p>Learn about the types, stages, and risk factors of ovarian cancer.</p>
            <Link to="/about" className="card-link">Read More →</Link>
          </div>
          <div className="card">
            <h3>⚠️ Recognize the Symptoms</h3>
            <p>Know what symptoms to watch for and when to see a doctor.</p>
            <Link to="/symptoms" className="card-link">Explore →</Link>
          </div>
          <div className="card">
            <h3>🔍 Screening & Diagnosis</h3>
            <p>Understand screening methods and diagnostic procedures.</p>
            <Link to="/screening" className="card-link">Discover →</Link>
          </div>
          <div className="card">
            <h3>💊 Treatment Options</h3>
            <p>Overview of surgery, chemotherapy, and other treatment approaches.</p>
            <Link to="/treatment" className="card-link">Learn →</Link>
          </div>
        </div>
      </section>

      <section className="importance">
        <div className="importance-content">
          <h2>Why Awareness Matters</h2>
          <p>
            Ovarian cancer is often diagnosed at advanced stages because early signs can be subtle. 
            By understanding symptoms, risk factors, and screening options, women can take proactive 
            steps in their healthcare and catch the disease earlier when treatment is most effective.
          </p>
          <p>
            This informational website provides evidence-based information to help you stay informed 
            and make educated decisions about your health.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;