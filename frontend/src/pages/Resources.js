import React from 'react';
import '../styles/Resources.css';

function Resources() {
  return (
    <div className="resources">
      <h1>Resources & Support</h1>

      <section className="info-section">
        <h2>Important Helplines</h2>
        <div className="helplines-grid">
          <div className="helpline-card">
            <h3>National Cancer Institute</h3>
            <p><strong>Phone:</strong> 1-800-4-CANCER (1-800-422-6237)</p>
            <p><strong>Available:</strong> Monday-Friday, 8am-8pm EST</p>
            <p>Free, confidential information about cancer and cancer treatments.</p>
          </div>
          <div className="helpline-card">
            <h3>American Cancer Society</h3>
            <p><strong>Phone:</strong> 1-800-ACS-2345 (1-800-227-2345)</p>
            <p><strong>Available:</strong> 24 hours a day, 7 days a week</p>
            <p>Information, support, and referrals to local resources.</p>
          </div>
          <div className="helpline-card">
            <h3>Cancer Support Community</h3>
            <p><strong>Phone:</strong> 1-888-793-9355</p>
            <p><strong>Website:</strong> www.cancersupportcommunity.org</p>
            <p>Emotional support and practical help for patients and families.</p>
          </div>
          <div className="helpline-card">
            <h3>National Ovarian Cancer Coalition</h3>
            <p><strong>Phone:</strong> 1-888-OVARIAN</p>
            <p><strong>Website:</strong> www.ovarian.org</p>
            <p>Education, support, and advocacy for ovarian cancer.</p>
          </div>
        </div>
      </section>

      <section className="support-organizations">
        <h2>Support Organizations</h2>
        
        <div className="org-category">
          <h3>🎯 Ovarian Cancer Specific Organizations</h3>
          <div className="organizations-list">
            <div className="org-item">
              <h4>National Ovarian Cancer Coalition (NOCC)</h4>
              <p>Provides education, support services, and advocacy for ovarian cancer patients and families.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>Ovarian Cancer Institute</h4>
              <p>Dedicated to research, education, and support for women with ovarian cancer.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>Gilda Radner Familial Ovarian Cancer Registry</h4>
              <p>Registry for families with hereditary ovarian cancer and support services.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>Facing Our Risk of Cancer Empowered (FORCE)</h4>
              <p>Support for people with hereditary cancer predisposition, including BRCA mutations.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
          </div>
        </div>

        <div className="org-category">
          <h3>💚 General Cancer Support</h3>
          <div className="organizations-list">
            <div className="org-item">
              <h4>American Cancer Society</h4>
              <p>Comprehensive cancer information, support programs, and local resources.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>Cancer Support Community</h4>
              <p>Emotional support groups, workshops, and counseling services nationwide.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>National Cancer Institute</h4>
              <p>Government resource for cancer research, clinical trials, and patient education.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>Cancer.Net</h4>
              <p>Free, evidence-based information about cancer and treatment options.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
          </div>
        </div>

        <div className="org-category">
          <h3>👥 Genetic Counseling & Testing</h3>
          <div className="organizations-list">
            <div className="org-item">
              <h4>National Cancer Institute - BRCA Information</h4>
              <p>Information about genetic testing and hereditary cancer risk.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>National Society of Genetic Counselors</h4>
              <p>Find a genetic counselor in your area for personalized genetic risk assessment.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>MyRisk: The Genetic Cancer Risk Assessment Tool</h4>
              <p>Online tool to assess personal cancer risk and hereditary patterns.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>ClinicalTrials.gov</h4>
              <p>Search for clinical trials testing new treatments and genetic interventions.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
          </div>
        </div>

        <div className="org-category">
          <h3>📚 Educational & Research Resources</h3>
          <div className="organizations-list">
            <div className="org-item">
              <h4>PubMed Central</h4>
              <p>Free access to peer-reviewed medical literature and research articles.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>UpToDate Patient Education</h4>
              <p>Comprehensive, evidence-based medical information for patients.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>Medscape Patient Education</h4>
              <p>Medical information written for patients by healthcare professionals.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
            <div className="org-item">
              <h4>Mayo Clinic Patient Resources</h4>
              <p>Reliable medical information and patient education materials.</p>
              <a href="#" target="_blank">Visit Website →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="recommended-reading">
        <h2>Recommended Reading</h2>
        <div className="books-grid">
          <div className="book-card">
            <h4>The Cancer Survivor's Almanac</h4>
            <p>Practical advice and resources for cancer survivors and their families.</p>
          </div>
          <div className="book-card">
            <h4>100 Questions & Answers About Ovarian Cancer</h4>
            <p>Comprehensive Q&A about diagnosis, treatment, and living with ovarian cancer.</p>
          </div>
          <div className="book-card">
            <h4>When Your Life Isn't Perfect (And You Decide It's OK)</h4>
            <p>Inspirational stories from ovarian cancer survivors and how they coped.</p>
          </div>
          <div className="book-card">
            <h4>A Patient's Guide to Navigating a Cancer Diagnosis</h4>
            <p>Step-by-step guide to understanding treatment options and making decisions.</p>
          </div>
        </div>
      </section>

      <section className="info-section">
        <h2>Online Support Communities</h2>
        <ul>
          <li><strong>Reddit:</strong> r/cancer, r/OvarianCancer - Connect with other patients and survivors</li>
          <li><strong>Facebook Groups:</strong> Many disease-specific support groups available</li>
          <li><strong>Online Forums:</strong> Patient-to-patient support on disease-specific websites</li>
          <li><strong>Zoom Support Groups:</strong> Virtual meetings with professional facilitators</li>
          <li><strong>Peer Support Programs:</strong> Matched with someone with similar experience</li>
        </ul>
      </section>

      <section className="info-section">
        <h2>Finding Local Resources</h2>
        <p>Your healthcare team can help connect you with local resources including:</p>
        <ul>
          <li>Support groups in your area</li>
          <li>Counseling and mental health services</li>
          <li>Financial assistance programs</li>
          <li>Nutritional counseling</li>
          <li>Exercise and rehabilitation programs</li>
          <li>Hospice and end-of-life care (if needed)</li>
        </ul>
      </section>
    </div>
  );
}

export default Resources;
