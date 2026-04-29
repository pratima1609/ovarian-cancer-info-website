import React from 'react';
import '../styles/Pages.css';

function Resources() {
  return (
    <div className="page resources-page">
      <h1>Resources & Support</h1>

      <section className="section">
        <h2>National Hotlines & Support</h2>
        <div className="hotlines">
          <div className="hotline-card">
            <h4>🏥 National Cancer Institute</h4>
            <p><strong>Phone:</strong> 1-800-4-CANCER (1-800-422-6237)</p>
            <p><strong>Hours:</strong> Monday-Friday, 8 AM - 8 PM EST</p>
            <p>Free information and support from cancer specialists</p>
          </div>
          <div className="hotline-card">
            <h4>🎗️ American Cancer Society</h4>
            <p><strong>Phone:</strong> 1-800-ACS-2345 (1-800-227-2345)</p>
            <p><strong>Hours:</strong> 24/7</p>
            <p>Information, support groups, transportation, lodging assistance</p>
          </div>
          <div className="hotline-card">
            <h4>💜 Ovarian Cancer Coalition</h4>
            <p><strong>Website:</strong> www.ovariancancercoalition.org</p>
            <p><strong>Phone:</strong> 1-866-OVARIAN (1-866-682-7426)</p>
            <p>Ovarian cancer-specific support and resources</p>
          </div>
          <div className="hotline-card">
            <h4>❤️ Cancer Support Community</h4>
            <p><strong>Phone:</strong> 1-888-793-9355</p>
            <p><strong>Hours:</strong> Monday-Friday, 9 AM - 5 PM EST</p>
            <p>Free emotional support and patient services</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Ovarian Cancer Organizations</h2>
        <div className="organizations">
          <h4>National Organizations</h4>
          <ul className="org-list">
            <li><a href="https://www.ovarianalliance.org" target="_blank" rel="noopener noreferrer">Ovarian Cancer Research Alliance</a> - Research funding and patient support</li>
            <li><a href="https://www.asco.org" target="_blank" rel="noopener noreferrer">American Society of Clinical Oncology (ASCO)</a> - Provider information and patient resources</li>
            <li><a href="https://www.pathology.org" target="_blank" rel="noopener noreferrer">College of American Pathologists</a> - Pathology and lab testing information</li>
            <li><a href="https://www.seaho.org" target="_blank" rel="noopener noreferrer">Sharsheret</a> - Support for Jewish women with ovarian cancer</li>
            <li><a href="https://www.cancersupport.org" target="_blank" rel="noopener noreferrer">Patient Advocate Foundation</a> - Patient advocacy and financial assistance</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Medical Resources</h2>
        <div className="medical-resources">
          <div className="resource-item">
            <h4>🏥 Major Cancer Centers</h4>
            <ul>
              <li><a href="https://www.mskcc.org" target="_blank" rel="noopener noreferrer">Memorial Sloan Kettering Cancer Center</a></li>
              <li><a href="https://www.mdanderson.org" target="_blank" rel="noopener noreferrer">MD Anderson Cancer Center</a></li>
              <li><a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer">Mayo Clinic</a></li>
              <li><a href="https://www.cancer.gov/about-nci/organization/ccg" target="_blank" rel="noopener noreferrer">NCI Comprehensive Cancer Centers</a></li>
            </ul>
          </div>
          <div className="resource-item">
            <h4>💻 Online Communities</h4>
            <ul>
              <li><a href="https://www.inspire.com" target="_blank" rel="noopener noreferrer">Inspire Health Community</a> - Online support groups</li>
              <li><a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer">ACS Cancer Survivors Network</a> - Peer support</li>
              <li><a href="https://www.cancerchat.org" target="_blank" rel="noopener noreferrer">Cancer Chat UK</a> - Discussion forums</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Patient Education Resources</h2>
        <div className="education-resources">
          <h4>Recommended Reading</h4>
          <ul>
            <li><em>"A Patient's Guide to Ovarian Cancer"</em> - American Cancer Society</li>
            <li><em>"Living with Ovarian Cancer"</em> - Ovarian Cancer Research Alliance</li>
            <li><em>"The Ovarian Cancer Book"</em> - Medical and patient perspectives</li>
            <li><em>"What You Really Need to Know About Cancer"</em> - Comprehensive guide</li>
          </ul>
          <h4>Websites</h4>
          <ul>
            <li><a href="https://www.cancer.gov" target="_blank" rel="noopener noreferrer">Cancer.gov</a> - NCI official resource</li>
            <li><a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer">Cancer.org</a> - American Cancer Society</li>
            <li><a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer">Mayo Clinic Health Information</a></li>
            <li><a href="https://www.healthline.com" target="_blank" rel="noopener noreferrer">Healthline - Ovarian Cancer Information</a></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Financial Assistance Programs</h2>
        <div className="financial-resources">
          <ul>
            <li><strong>Patient Advocate Foundation</strong> - Helps with copayments and treatment costs</li>
            <li><strong>CancerCare</strong> - Financial assistance for treatment and medications</li>
            <li><strong>American Cancer Society</strong> - Emergency financial assistance and support services</li>
            <li><strong>National Association of Free & Charitable Clinics</strong> - Free/reduced-cost care</li>
            <li><strong>Pharmaceutical Assistance Programs</strong> - Drug manufacturers offer free medications to eligible patients</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Caregiver Support</h2>
        <p>Resources specifically for family members and caregivers:</p>
        <ul>
          <li>Family caregiver support groups</li>
          <li>Counseling and mental health services</li>
          <li>Home care and hospice resources</li>
          <li>Financial and legal planning assistance</li>
          <li>Respite care services</li>
        </ul>
      </section>
    </div>
  );
}

export default Resources;