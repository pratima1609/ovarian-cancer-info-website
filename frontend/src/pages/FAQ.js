import React, { useState } from 'react';
import '../styles/Pages.css';

function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "What's the difference between ovarian cysts and ovarian cancer?",
      answer: "Ovarian cysts are fluid-filled sacs that often appear in the ovaries and are usually benign (non-cancerous). Most cysts go away on their own. Ovarian cancer, however, is the growth of malignant cells in the ovary tissue. Size, appearance on imaging, and blood tests help distinguish between cysts and cancer. Any persistent ovarian mass should be evaluated by a doctor."
    },
    {
      question: "Is ovarian cancer hereditary?",
      answer: "About 10-15% of ovarian cancers are hereditary, mainly due to BRCA1 or BRCA2 gene mutations. However, 85-90% of ovarian cancers are sporadic (not inherited). If you have a family history of ovarian, breast, or colon cancer, genetic testing and counseling may be recommended. Talk to your doctor about your risk."
    },
    {
      question: "Can ovarian cancer be prevented?",
      answer: "While there's no guaranteed way to prevent ovarian cancer, certain factors may reduce risk: oral contraceptive use (reduces risk by 40-50%), pregnancy and breastfeeding, tubal ligation or hysterectomy, maintaining a healthy weight, and regular exercise. High-risk women with BRCA mutations may consider preventive surgery (removal of ovaries and fallopian tubes) after childbearing years."
    },
    {
      question: "What are the survival rates for ovarian cancer?",
      answer: "Overall 5-year survival rate for ovarian cancer is about 49%. However, survival varies significantly by stage: Stage 1 (90%), Stage 2 (70%), Stage 3 (39%), Stage 4 (17%). Early detection dramatically improves outcomes. Individual survival depends on cancer type, grade, treatment response, and overall health."
    },
    {
      question: "What treatment options are available?",
      answer: "Treatment typically combines surgery and chemotherapy, with possible addition of targeted therapy. Surgery aims to remove the tumor and affected tissues. Chemotherapy drugs (usually carboplatin and paclitaxel) target cancer cells throughout the body. Targeted therapies like PARP inhibitors and immunotherapies are increasingly used. Your treatment plan depends on cancer stage and type."
    },
    {
      question: "Who should be screened for ovarian cancer?",
      answer: "There are no proven screening tests for average-risk women. Women at high risk (BRCA mutations, strong family history, personal history of breast cancer) may benefit from surveillance with pelvic exams, ultrasound, and CA-125 tests. If you have risk factors, discuss screening options with your doctor."
    },
    {
      question: "What happens after ovarian cancer treatment?",
      answer: "After initial treatment (surgery and chemotherapy), regular follow-up is essential. You'll have periodic doctor visits, imaging tests, and blood work to monitor for recurrence. Many patients receive maintenance therapy to extend remission. Side effects of treatment usually improve over time, though some may be long-term. Support groups and counseling can help with recovery."
    },
    {
      question: "Can I have children after ovarian cancer treatment?",
      answer: "For young women wanting to preserve fertility, discuss options before treatment begins: egg freezing, embryo freezing, or ovarian tissue freezing. Some early-stage cancers may allow ovary-preserving surgery. Chemotherapy can affect fertility. Many women do successfully have children after cancer treatment, and pregnancy itself doesn't increase cancer recurrence risk. Talk to your oncologist about fertility options."
    }
  ];

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="page faq-page">
      <h1>Frequently Asked Questions</h1>
      
      <section className="section">
        <p>
          Below are answers to common questions about ovarian cancer. 
          If you don't find the answer you're looking for, please reach out to one of our support resources.
        </p>
      </section>

      <section className="section">
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleExpanded(index)}
              >
                <span>{faq.question}</span>
                <span className={`arrow ${expandedIndex === index ? 'expanded' : ''}`}>▼</span>
              </button>
              {expandedIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Need More Help?</h2>
        <p>
          If you have other questions or need support, please:
        </p>
        <ul>
          <li>Contact the National Cancer Institute: 1-800-4-CANCER</li>
          <li>Call American Cancer Society: 1-800-ACS-2345</li>
          <li>Reach out to Ovarian Cancer Coalition: 1-866-OVARIAN</li>
          <li>Use our contact form to send us your question</li>
        </ul>
      </section>
    </div>
  );
}

export default FAQ;