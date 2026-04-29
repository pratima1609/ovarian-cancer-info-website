import React from 'react';
import '../styles/Pages.css';

function Treatment() {
  return (
    <div className="page treatment-page">
      <h1>Treatment Options</h1>

      <section className="section">
        <h2>Overview</h2>
        <p>
          Treatment for ovarian cancer typically involves a combination of surgery and chemotherapy. 
          The specific treatment plan depends on the stage, grade, type of cancer, and the patient's overall health.
        </p>
      </section>

      <section className="section">
        <h2>Primary Treatment Options</h2>
        <div className="treatment-options">
          <div className="treatment-card">
            <h3>🏥 Surgery</h3>
            <p>
              Surgery is usually the first treatment for ovarian cancer. The goal is to remove as much cancer as possible.
            </p>
            <strong>Types:</strong>
            <ul>
              <li><strong>Debulking Surgery:</strong> Removal of the tumor and affected tissues</li>
              <li><strong>Total Abdominal Hysterectomy:</strong> Removal of uterus</li>
              <li><strong>Bilateral Salpingo-Oophorectomy:</strong> Removal of both ovaries and fallopian tubes</li>
              <li><strong>Omentectomy:</strong> Removal of tissue covering abdominal organs</li>
              <li><strong>Lymphadenectomy:</strong> Removal of lymph nodes for staging</li>
            </ul>
          </div>

          <div className="treatment-card">
            <h3>💊 Chemotherapy</h3>
            <p>
              Uses anti-cancer drugs to kill cancer cells throughout the body. Can be given intravenously or orally.
            </p>
            <strong>Common Drugs:</strong>
            <ul>
              <li><strong>Carboplatin:</strong> A platinum-based drug</li>
              <li><strong>Paclitaxel:</strong> A taxane drug</li>
              <li><strong>Cisplatin:</strong> Another platinum-based drug</li>
              <li><strong>Gemcitabine:</strong> A nucleoside analog</li>
              <li><strong>Docetaxel:</strong> Another taxane drug</li>
            </ul>
          </div>

          <div className="treatment-card">
            <h3>🎯 Targeted Therapy</h3>
            <p>
              Targets specific cancer cell characteristics. Often used in combination with chemotherapy.
            </p>
            <strong>Examples:</strong>
            <ul>
              <li><strong>Bevacizumab (Avastin):</strong> Targets blood vessel formation</li>
              <li><strong>PARP Inhibitors:</strong> Olaparib, rucaparib, niraparib - for BRCA-mutated cancers</li>
              <li><strong>PD-1 Inhibitors:</strong> Nivolumab, pembrolizumab - checkpoint inhibitors</li>
            </ul>
          </div>

          <div className="treatment-card">
            <h3>☢️ Radiation Therapy</h3>
            <p>
              Uses high-energy radiation to kill cancer cells. Less commonly used as primary treatment but may help with palliative care.
            </p>
            <strong>Types:</strong>
            <ul>
              <li><strong>External Beam Radiation:</strong> Directed from outside the body</li>
              <li><strong>Internal Radiation:</strong> Radioactive materials placed near the tumor</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Treatment by Stage</h2>
        <div className="stage-treatment">
          <div className="stage-box">
            <h4>Stage 1</h4>
            <p><strong>Treatment:</strong> Surgery followed by observation or chemotherapy</p>
            <p><strong>Approach:</strong> Conservative surgery if fertility preservation desired</p>
          </div>
          <div className="stage-box">
            <h4>Stage 2</h4>
            <p><strong>Treatment:</strong> Surgery (debulking) followed by chemotherapy</p>
            <p><strong>Approach:</strong> Combination therapy is standard</p>
          </div>
          <div className="stage-box">
            <h4>Stage 3</h4>
            <p><strong>Treatment:</strong> Debulking surgery + platinum/taxane chemotherapy</p>
            <p><strong>Approach:</strong> Aggressive treatment with maintenance therapy</p>
          </div>
          <div className="stage-box">
            <h4>Stage 4</h4>
            <p><strong>Treatment:</strong> Debulking surgery + chemotherapy + targeted therapy</p>
            <p><strong>Approach:</strong> Combination and maintenance therapies</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Side Effects Management</h2>
        <div className="side-effects">
          <div className="side-effect-card">
            <h4>Hair Loss</h4>
            <p>Temporary loss of hair due to chemotherapy. Hair usually grows back 3-6 months after treatment ends.</p>
          </div>
          <div className="side-effect-card">
            <h4>Nausea & Vomiting</h4>
            <p>Anti-nausea medications are given preventatively. Most effective with newer drugs.</p>
          </div>
          <div className="side-effect-card">
            <h4>Fatigue</h4>
            <p>Most common side effect. Managed through rest, nutrition, and gentle exercise.</p>
          </div>
          <div className="side-effect-card">
            <h4>Peripheral Neuropathy</h4>
            <p>Nerve damage causing numbness or tingling. May be temporary or long-term.</p>
          </div>
          <div className="side-effect-card">
            <h4>Reduced Blood Cells</h4>
            <p>Lower immune function and increased infection risk. Monitored with blood tests.</p>
          </div>
          <div className="side-effect-card">
            <h4>Cognitive Changes</h4>
            <p>"Chemo brain" - temporary memory and concentration issues during and after treatment.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Clinical Trials</h2>
        <p>
          Clinical trials test new treatment combinations and approaches. Ask your doctor if you're eligible for trials 
          testing new therapies for ovarian cancer.
        </p>
      </section>

      <section className="section">
        <h2>Fertility Preservation</h2>
        <p>
          Women who want to preserve fertility options should discuss with their doctor before treatment:
        </p>
        <ul>
          <li>Egg or embryo freezing before chemotherapy</li>
          <li>Ovarian tissue freezing</li>
          <li>Conservative surgery when possible</li>
          <li>Fertility counseling and support services</li>
        </ul>
      </section>
    </div>
  );
}

export default Treatment;