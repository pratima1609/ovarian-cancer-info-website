import React from 'react';
import '../styles/Pages.css';

function About() {
  return (
    <div className="page about-page">
      <h1>Understanding Ovarian Cancer</h1>

      <section className="section">
        <h2>What is Ovarian Cancer?</h2>
        <p>
          Ovarian cancer is a disease in which malignant (cancer) cells form in the ovaries. 
          The ovaries are small, almond-shaped organs located on each side of the uterus and 
          produce eggs and the hormones estrogen and progesterone.
        </p>
      </section>

      <section className="section">
        <h2>Types of Ovarian Cancer</h2>
        <div className="content-grid">
          <div className="info-card">
            <h3>Epithelial Ovarian Cancer</h3>
            <p>
              The most common type, accounting for about 85-90% of all ovarian cancers. 
              It begins in the layer of tissue that covers the ovaries.
            </p>
            <strong>Subtypes:</strong>
            <ul>
              <li>Serous (40-50%)</li>
              <li>Mucinous (10%)</li>
              <li>Endometrioid (10%)</li>
              <li>Clear cell (10%)</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Germ Cell Ovarian Cancer</h3>
            <p>
              Rare type that begins in egg-producing cells. Usually affects younger women 
              and often has a better prognosis than epithelial cancers.
            </p>
          </div>
          <div className="info-card">
            <h3>Stromal Cell Tumors</h3>
            <p>
              Rare tumors that begin in the cells that produce ovarian hormones. 
              Often discovered at an earlier stage.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Cancer Stages</h2>
        <div className="stages">
          <div className="stage">
            <h3>Stage 1 - 49% 5-Year Survival</h3>
            <p>Cancer is limited to the ovaries.</p>
            <ul>
              <li>Stage 1A: One ovary affected</li>
              <li>Stage 1B: Both ovaries affected</li>
              <li>Stage 1C: Stage 1A or 1B with cancer cells in fluid</li>
            </ul>
          </div>
          <div className="stage">
            <h3>Stage 2 - 42% 5-Year Survival</h3>
            <p>Cancer involves one or both ovaries and extends to nearby structures.</p>
            <ul>
              <li>Stage 2A: Extension to uterus and/or fallopian tubes</li>
              <li>Stage 2B: Extension to other abdominal structures</li>
              <li>Stage 2C: Stage 2A or 2B with cancer cells in fluid</li>
            </ul>
          </div>
          <div className="stage">
            <h3>Stage 3 - 29% 5-Year Survival</h3>
            <p>Cancer is in one or both ovaries with spread to the peritoneum and/or lymph nodes.</p>
            <ul>
              <li>Stage 3A: Microscopic peritoneal involvement</li>
              <li>Stage 3B: Macroscopic peritoneal involvement &lt;2 cm</li>
              <li>Stage 3C: Macroscopic peritoneal involvement &gt;2 cm</li>
            </ul>
          </div>
          <div className="stage">
            <h3>Stage 4 - 13% 5-Year Survival</h3>
            <p>Cancer has spread beyond the abdomen to distant organs.</p>
            <ul>
              <li>Stage 4A: Pleural fluid involvement</li>
              <li>Stage 4B: Distant metastases (liver, brain, lungs)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Risk Factors</h2>
        <div className="risk-factors">
          <div className="risk-item">
            <h4>🧬 Genetic Factors</h4>
            <p>BRCA1 and BRCA2 gene mutations significantly increase risk (up to 45% lifetime risk)</p>
          </div>
          <div className="risk-item">
            <h4>👨‍👩‍👧 Family History</h4>
            <p>Close relatives with ovarian, breast, or colon cancer</p>
          </div>
          <div className="risk-item">
            <h4>📅 Age</h4>
            <p>Risk increases with age, most common after age 55 (median age 63)</p>
          </div>
          <div className="risk-item">
            <h4>⚖️ Obesity</h4>
            <p>Higher BMI is associated with increased risk</p>
          </div>
          <div className="risk-item">
            <h4>🚬 Smoking</h4>
            <p>Cigarette smoking increases risk of mucinous ovarian cancer</p>
          </div>
          <div className="risk-item">
            <h4>💊 Hormone Therapy</h4>
            <p>Long-term postmenopausal hormone use may increase risk</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Prevention & Protective Factors</h2>
        <div className="protective-factors">
          <h3>Factors That May Lower Risk:</h3>
          <ul>
            <li>Oral contraceptive use (reduces risk by 40-50%)</li>
            <li>Pregnancy and breastfeeding</li>
            <li>Surgical procedures (tubal ligation, hysterectomy)</li>
            <li>Regular exercise and physical activity</li>
            <li>Healthy diet rich in vegetables and fruits</li>
            <li>Maintaining healthy weight</li>
            <li>Genetic testing and counseling for high-risk individuals</li>
          </ul>
        </div>
      </section>

      <section className="section disclaimer">
        <p>
          <strong>Disclaimer:</strong> This information is for educational purposes only. 
          Please consult with healthcare professionals for medical advice, diagnosis, and treatment.
        </p>
      </section>
    </div>
  );
}

export default About;