import React, { useState } from 'react';
import '../styles/Pages.css';

function Symptoms() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [selectedRiskFactors, setSelectedRiskFactors] = useState([]);

  const commonSymptoms = [
    'Abdominal pain or cramps',
    'Persistent bloating',
    'Increased abdominal size',
    'Difficulty eating or feeling full quickly',
    'Pelvic pain',
    'Fatigue',
    'Indigestion or heartburn',
    'Constipation or diarrhea'
  ];

  const riskFactors = [
    'Age over 55',
    'Family history of ovarian cancer',
    'Personal history of breast cancer',
    'BRCA1 or BRCA2 mutation',
    'Obesity',
    'Never had children',
    'Postmenopausal hormone use',
    'Smoking history'
  ];

  const handleSymptomChange = (symptom) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleRiskFactorChange = (factor) => {
    setSelectedRiskFactors(prev =>
      prev.includes(factor)
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    );
  };

  const calculateRiskScore = () => {
    const symptomScore = selectedSymptoms.length * 10;
    const riskFactorScore = selectedRiskFactors.length * 8;
    return Math.min(100, symptomScore + riskFactorScore);
  };

  const getRiskLevel = (score) => {
    if (score >= 80) return 'HIGH';
    if (score >= 50) return 'ELEVATED';
    if (score >= 20) return 'MODERATE';
    return 'LOW';
  };

  const riskScore = calculateRiskScore();
  const riskLevel = getRiskLevel(riskScore);

  return (
    <div className="page symptoms-page">
      <h1>Symptoms & Risk Assessment</h1>

      <section className="section">
        <h2>Common Symptoms</h2>
        <p>
          Ovarian cancer symptoms are often subtle and can be similar to other conditions. 
          It's important to be aware of these signs and seek medical attention if they persist for more than 2-3 weeks.
        </p>
        <div className="symptoms-list">
          <ul>
            <li><strong>Abdominal pain or cramps</strong> - Persistent pain in the lower abdomen</li>
            <li><strong>Bloating</strong> - Persistent or increasing bloating not related to meals</li>
            <li><strong>Increased abdominal size</strong> - Noticeable increase in waist or abdomen size</li>
            <li><strong>Difficulty eating</strong> - Loss of appetite or feeling full quickly</li>
            <li><strong>Pelvic pain</strong> - Pain in the pelvic region</li>
            <li><strong>Fatigue</strong> - Unusual tiredness or weakness</li>
            <li><strong>Digestive issues</strong> - Indigestion, heartburn, constipation, or diarrhea</li>
            <li><strong>Urinary symptoms</strong> - Urgent or frequent urination</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Interactive Risk Assessment Tool</h2>
        <p>Select your symptoms and risk factors to get a personalized risk assessment.</p>
        
        <div className="assessment-grid">
          <div className="assessment-section">
            <h3>Current Symptoms</h3>
            <div className="symptoms-grid">
              {commonSymptoms.map(symptom => (
                <label key={symptom} className="symptom-item">
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => handleSymptomChange(symptom)}
                  />
                  <span>{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="assessment-section">
            <h3>Risk Factors</h3>
            <div className="symptoms-grid">
              {riskFactors.map(factor => (
                <label key={factor} className="symptom-item">
                  <input
                    type="checkbox"
                    checked={selectedRiskFactors.includes(factor)}
                    onChange={() => handleRiskFactorChange(factor)}
                  />
                  <span>{factor}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {(selectedSymptoms.length > 0 || selectedRiskFactors.length > 0) && (
        <section className="section">
          <div className={`risk-result risk-${riskLevel.toLowerCase()}`}>
            <h3>Risk Assessment Result</h3>
            <div className="result-details">
              <p><strong>Symptoms selected:</strong> {selectedSymptoms.length}</p>
              <p><strong>Risk factors identified:</strong> {selectedRiskFactors.length}</p>
              <p><strong>Risk Score:</strong> {riskScore}/100</p>
              <p><strong>Risk Level:</strong> <span className="risk-badge">{riskLevel}</span></p>
            </div>
            <div className="risk-bar">
              <div className="risk-fill" style={{width: `${riskScore}%`}}></div>
            </div>
            <p className="disclaimer">
              ⚠️ <strong>Important:</strong> This is a screening tool only and should not be used for diagnosis. 
              If you experience persistent symptoms, please consult with a healthcare professional immediately.
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <h2>When to See a Doctor</h2>
        <div className="when-to-see">
          <p><strong>Seek medical attention immediately if you experience:</strong></p>
          <ul>
            <li>Any symptoms that persist for more than 2-3 weeks</li>
            <li>Severe abdominal pain or swelling</li>
            <li>Significant changes in bowel or bladder habits</li>
            <li>Unexplained weight loss</li>
            <li>Any combination of abdominal and pelvic symptoms</li>
          </ul>
          <p><strong>Talk to your doctor about screening if you have:</strong></p>
          <ul>
            <li>Family history of ovarian cancer</li>
            <li>BRCA1 or BRCA2 mutations</li>
            <li>Multiple relatives with breast or ovarian cancer</li>
            <li>Age over 50</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Symptoms;