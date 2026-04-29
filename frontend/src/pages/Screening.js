import React from 'react';
import '../styles/Pages.css';

function Screening() {
  return (
    <div className="page screening-page">
      <h1>Screening & Diagnosis</h1>

      <section className="section">
        <h2>Screening Methods</h2>
        <p>
          There are no proven screening tests for ovarian cancer in asymptomatic women. 
          However, women at high risk may benefit from surveillance approaches.
        </p>
        <div className="screening-methods">
          <div className="method-card">
            <h3>1. Transvaginal Ultrasound (TVU)</h3>
            <p>
              A small ultrasound probe is inserted into the vagina to get detailed images of the ovaries. 
              This is the most sensitive imaging test for detecting ovarian abnormalities.
            </p>
          </div>
          <div className="method-card">
            <h3>2. CA-125 Blood Test</h3>
            <p>
              Measures a protein marker (CA-125) that may be elevated in ovarian cancer. 
              Can be elevated in benign conditions, so it's not specific for cancer diagnosis.
            </p>
          </div>
          <div className="method-card">
            <h3>3. Pelvic Examination</h3>
            <p>
              A physical examination where the doctor feels the ovaries and surrounding tissues. 
              May detect abnormal growths or masses.
            </p>
          </div>
          <div className="method-card">
            <h3>4. Transvaginal Duplex Sonography</h3>
            <p>
              Ultrasound combined with Doppler to assess blood flow patterns in suspicious masses. 
              Helps differentiate benign from malignant lesions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Diagnostic Procedures</h2>
        <div className="diagnostic-steps">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4>Clinical Evaluation</h4>
              <p>Doctor reviews symptoms, medical history, and performs physical examination</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4>Imaging Tests</h4>
              <p>Pelvic ultrasound, CT scan, or MRI to visualize the ovaries and surrounding tissues</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4>Tumor Markers</h4>
              <p>Blood tests for CA-125 and other markers to support diagnosis</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4>Biopsy/Pathology</h4>
              <p>Tissue sample collected and examined under microscope to confirm cancer</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4>Staging Tests</h4>
              <p>Additional imaging and tests to determine cancer stage and extent</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">6</div>
            <div className="step-content">
              <h4>Genetic Testing</h4>
              <p>BRCA1/BRCA2 testing to identify inherited cancer risk</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Imaging Tests</h2>
        <div className="imaging-tests">
          <div className="imaging-item">
            <h4>🖼️ Ultrasound</h4>
            <p>
              Uses sound waves to create images. Usually the first imaging test. 
              Transvaginal ultrasound is most effective for evaluating the ovaries.
            </p>
          </div>
          <div className="imaging-item">
            <h4>🔬 CT Scan (Computed Tomography)</h4>
            <p>
              Creates detailed cross-sectional images using X-rays. 
              Shows whether cancer has spread to other organs.
            </p>
          </div>
          <div className="imaging-item">
            <h4>🧲 MRI (Magnetic Resonance Imaging)</h4>
            <p>
              Uses magnetic fields and radio waves to create detailed images. 
              Particularly useful for characterizing ovarian masses.
            </p>
          </div>
          <div className="imaging-item">
            <h4>☢️ PET Scan</h4>
            <p>
              Positron Emission Tomography shows metabolic activity. 
              Helps detect spread of cancer to distant sites.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Tumor Markers</h2>
        <div className="tumor-markers">
          <div className="marker">
            <h4>CA-125</h4>
            <p>Most commonly used marker. Elevated in 80% of advanced ovarian cancers but can be elevated in benign conditions.</p>
          </div>
          <div className="marker">
            <h4>HE4 (Human Epididymis Protein 4)</h4>
            <p>More specific for ovarian cancer than CA-125. Often used together with CA-125.</p>
          </div>
          <div className="marker">
            <h4>OVA1</h4>
            <p>A panel of five markers that together help assess the risk of ovarian cancer.</p>
          </div>
          <div className="marker">
            <h4>AFP (Alpha-fetoprotein)</h4>
            <p>Elevated in germ cell tumors and in some cases of endometrioid ovarian cancer.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Cancer Staging</h2>
        <p>Once ovarian cancer is diagnosed, it is staged to determine the extent of spread:</p>
        <table className="staging-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Description</th>
              <th>5-Year Survival</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Stage 1</strong></td>
              <td>Cancer limited to ovaries</td>
              <td>90%</td>
            </tr>
            <tr>
              <td><strong>Stage 2</strong></td>
              <td>Cancer extends beyond ovaries to pelvis</td>
              <td>70%</td>
            </tr>
            <tr>
              <td><strong>Stage 3</strong></td>
              <td>Cancer spread to peritoneum and/or lymph nodes</td>
              <td>39%</td>
            </tr>
            <tr>
              <td><strong>Stage 4</strong></td>
              <td>Cancer spread to distant organs</td>
              <td>17%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2>High-Risk Women Surveillance</h2>
        <p>Women with BRCA1/BRCA2 mutations or strong family history may consider:</p>
        <ul>
          <li>Regular pelvic examinations (every 6 months)</li>
          <li>Transvaginal ultrasound annually or semi-annually</li>
          <li>CA-125 blood tests annually or semi-annually</li>
          <li>Risk-reducing salpingo-oophorectomy (RRSO) after age 35-40 or after childbearing</li>
          <li>Genetic counseling and testing</li>
        </ul>
      </section>
    </div>
  );
}

export default Screening;