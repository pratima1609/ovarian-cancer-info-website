# Ovarian Cancer Informational Website

A comprehensive full-stack web application built with React (frontend) and Python Flask (backend) to educate users about ovarian cancer, its symptoms, risk factors, screening methods, and treatment options.

## 🎯 Project Overview

This mini project demonstrates full-stack development skills by creating an informational platform about ovarian cancer. It features:

- **Comprehensive Information**: Detailed content about ovarian cancer types, stages, and causes
- **Symptom Checker**: Interactive tool to understand common symptoms and assess personal risk
- **Risk Assessment**: Evaluate personal risk factors with scoring system
- **Educational Resources**: Links to reputable medical sources and support organizations
- **FAQ Section**: Answers to 8 common questions
- **Treatment Information**: Detailed overview of all treatment options
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library for building interactive components
- **React Router** - Client-side routing for navigation
- **CSS3** - Responsive styling with flexbox and grid
- **Axios** - HTTP client for API communication

### Backend
- **Python 3.8+** - Programming language
- **Flask** - Lightweight web framework
- **Flask-CORS** - Cross-Origin Resource Sharing support
- **SQLAlchemy** - ORM for database management
- **SQLite** - Lightweight database

## 📁 Project Structure

```
ovarian-cancer-info-website/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Symptoms.js
│   │   │   ├── Screening.js
│   │   │   ├── Treatment.js
│   │   │   ├── Resources.js
│   │   │   ├── FAQ.js
│   │   │   └── Contact.js
│   │   ├── styles/
│   │   │   ├── App.css
│   │   │   ├���─ Header.css
│   │   │   ├── Footer.css
│   │   │   └── Pages.css
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   ├── data.py
│   ├── requirements.txt
│   └── README.md
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Python 3.8+
- npm or yarn package manager

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the Flask application:
```bash
python app.py
```

The backend will run on `http://localhost:5000`

## 📚 Features

### 1. Home Page
- Hero section with key statistics
- Quick navigation cards
- Featured resources and calls-to-action

### 2. About Ovarian Cancer
- Cancer types (epithelial, germ cell, stromal)
- Cancer stages and survival rates
- Risk factors and epidemiology
- Causes and prevention

### 3. Symptoms & Risk Assessment
- Common and uncommon symptoms
- Interactive risk assessment tool
- Symptom checker with 8 symptoms
- Risk score calculation
- When to see a doctor

### 4. Screening & Diagnosis
- Screening methods
- Diagnostic procedures
- Imaging tests (ultrasound, CT, MRI, PET)
- Blood tests and tumor markers
- 6-step diagnostic process

### 5. Treatment Options
- Surgery details and types
- Chemotherapy overview
- Radiation therapy
- Targeted therapy
- Immunotherapy
- Hormone therapy
- Treatment planning

### 6. Resources
- National Cancer Institute hotline
- American Cancer Society
- Ovarian Cancer Coalition
- Support organizations and communities
- Reading recommendations

### 7. FAQ
- 8 expandable frequently asked questions
- Answers covering common concerns
- Medical information for patients

### 8. Contact Form
- User inquiry submission
- Feedback collection
- Email validation
- Response confirmation

## 🔌 API Endpoints

### Disease Information
- `GET /api/diseases` - Get disease information
- `GET /api/symptoms` - Get symptoms list
- `GET /api/risk-factors` - Get risk factors

### Content
- `GET /api/screening` - Get screening information
- `GET /api/treatment` - Get treatment options
- `GET /api/resources` - Get external resources
- `GET /api/faq` - Get FAQ entries
- `GET /api/statistics` - Get cancer statistics

### Forms
- `POST /api/contact` - Submit contact form
- `POST /api/risk-assessment` - Submit risk assessment

## 📖 Database Schema

### Contact Submissions
```
- id: Integer (Primary Key)
- name: String
- email: String
- subject: String
- message: Text
- created_at: DateTime
```

### Risk Assessments
```
- id: Integer (Primary Key)
- age: Integer
- family_history: Boolean
- personal_history: Boolean
- bmi: Float
- reproductive_factors: String
- risk_score: Float
- created_at: DateTime
```

## 🎨 Design Features

- **Responsive Layout**: Mobile-first design approach
- **Color Scheme**: Professional medical website colors (purples and blues)
- **Accessibility**: Semantic HTML and ARIA labels
- **User Experience**: Intuitive navigation and clear information hierarchy
- **Performance**: Optimized assets and efficient API calls

## 🔐 Security Considerations

- Input validation on all forms
- SQL injection prevention with SQLAlchemy ORM
- CORS properly configured
- Sensitive information not exposed in API responses
- Error handling without exposing system details

## 📝 Usage

1. **For Users**: Visit the website to learn about ovarian cancer, check symptoms, and access resources
2. **For Healthcare Providers**: Use the information to educate patients
3. **For Researchers**: Access statistics and epidemiological data
4. **For Students**: Learn full-stack development implementation

## 🚢 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the build folder to Vercel or Netlify
```

### Backend Deployment (Heroku/PythonAnywhere)
```bash
# Configure your hosting platform
# Push your code and environment variables
```

## 📚 Resources & References

- [American Cancer Society - Ovarian Cancer](https://www.cancer.org/cancer/ovarian-cancer.html)
- [National Cancer Institute](https://www.cancer.gov)
- [Ovarian Cancer Research Alliance](https://www.ovarianalliance.org)
- [Mayo Clinic - Ovarian Cancer](https://www.mayoclinic.org/diseases-conditions/ovarian-cancer)
- [CDC - Ovarian Cancer](https://www.cdc.gov/cancer/ovarian/index.htm)

## 👥 Contributors

- Pratima Vishwakarma (Developer)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact & Support

For questions or suggestions about this project, please open an issue or contact the project maintainer.

---

**Note**: This website is for educational purposes and should not be used as a substitute for professional medical advice. Always consult with qualified healthcare professionals for medical concerns.