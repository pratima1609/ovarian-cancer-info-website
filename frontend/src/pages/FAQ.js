import React, { useState } from 'react';
import '../styles/FAQ.css';

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between benign ovarian cysts and ovarian cancer?",
      answer: "Benign ovarian cysts are fluid-filled sacs that are very common and usually harmless. They often disappear on their own. Ovarian cancer involves malignant cells that can spread. Imaging tests and blood work can help distinguish between them. Most ovarian cysts are benign."
    },
    {
      question: "Is ovarian cancer hereditary?",
      answer: "About 10-15% of ovarian cancers are hereditary, mainly due to BRCA1 and BRCA2 gene mutations. If you have a family history of ovarian or breast cancer, genetic testing and counseling are recommended. Hereditary ovarian cancers tend to occur at younger ages and may respond differently to treatment."
    },
    {
      question: "What is BRCA testing and who should get tested?",
      answer: "BRCA testing is a blood test that identifies mutations in BRCA1 and BRCA2 genes, which increase cancer risk. You should consider testing if you have a personal or family history of ovarian, breast, or pancreatic cancer, or are of Ashkenazi Jewish descent. A genetic counselor can help determine if testing is appropriate for you."
    },
    {
      question: "Can ovarian cancer be prevented?",
      answer: "While there's no guaranteed prevention, certain factors may reduce risk: having children, breastfeeding, using oral contraceptives, and maintaining a healthy weight. For high-risk women, prophylactic surgery (removal of ovaries) may be considered. Regular screening is recommended for high-risk individuals."
    },
    {
      question: "What are the chances of survival for ovarian cancer?",
      answer: "Five-year survival rates vary by stage: Stage I (90-95%), Stage II (70-80%), Stage III (35-40%), Stage IV (15-20%). Factors affecting survival include stage at diagnosis, cancer grade, age, overall health, and response to treatment. Early detection significantly improves outcomes."
    },
    {
      question: "What is the standard treatment for ovarian cancer?",
      answer: "Standard treatment typically involves surgery followed by chemotherapy. The goal of surgery is to remove as much cancer as possible (cytoreduction). Chemotherapy is then given to kill remaining cancer cells. Treatment may be followed by targeted therapy or maintenance treatment to prevent recurrence."
    },
    {
      question: "How often should high-risk women be screened?",
      answer: "There is no proven screening test for ovarian cancer in the general population. However, women with BRCA mutations or strong family history may benefit from annual screening with transvaginal ultrasound and CA-125 blood tests. Discuss screening options with your healthcare provider based on your individual risk."
    },
    {
      question: "What happens after treatment is completed?",
      answer: "After treatment, you'll have regular follow-up visits with your oncologist including physical exams and imaging tests. These appointments are important to monitor for recurrence or late effects. Many women also benefit from support groups, counseling, and focus on healthy lifestyle choices including nutrition and exercise."
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>

      <section className="info-section">
        <p>
          Here are answers to common questions about ovarian cancer. If you have questions not addressed here, 
          please consult with your healthcare provider or call one of our helplines.
        </p>
      </section>

      <section className="faq-section">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleExpanded(index)}
              >
                <span className="question-text">{faq.question}</span>
                <span className={`toggle-icon ${expandedIndex === index ? 'expanded' : ''}`}>
                  ▼
                </span>
              </button>
              {expandedIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="additional-info">
        <h2>Still Have Questions?</h2>
        <p>
          If you have additional questions not answered here, please don't hesitate to:
        </p>
        <ul>
          <li>Contact your healthcare provider or oncologist</li>
          <li>Call the National Cancer Institute at 1-800-4-CANCER</li>
          <li>Call the American Cancer Society at 1-800-ACS-2345</li>
          <li>Visit the <a href="/resources">Resources page</a> for more information</li>
          <li>Fill out the <a href="/contact">Contact form</a> to reach our team</li>
        </ul>
      </section>
    </div>
  );
}

export default FAQ;
