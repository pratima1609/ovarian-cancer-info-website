# Ovarian Cancer Informational Website

A comprehensive full-stack web application providing detailed information about ovarian cancer, including symptoms, risk factors, screening methods, treatment options, and educational resources.

## 🎯 Project Overview

This mini project is built with **React** (frontend) and **Python Flask** (backend) to create an informational platform about ovarian cancer. It's designed for educational purposes and includes interactive tools for risk assessment and comprehensive medical information.

## 🛠️ Tech Stack

- **Frontend**: React.js with React Router
- **Backend**: Python Flask with REST API
- **Database**: SQLite
- **Styling**: CSS3 with Responsive Design
- **API Communication**: REST with CORS

## 📦 Project Structure

```
ovarian-cancer-info-website/
├── frontend/                 # React Application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
├── backend/                  # Python Flask API
│   ├── app.py
│   ├── models.py
│   ├─�� routes.py
│   ├── config.py
│   ├── data.py
│   ├── requirements.txt
│   └── README.md
└── .gitignore
```

## 🚀 Quick Start

### Prerequisites
- Node.js & npm (for frontend)
- Python 3.8+ (for backend)

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run at: **http://localhost:3000**

### Backend Setup

```bash
cd backend
python -m venv venv

# On Linux/Mac:
source venv/bin/activate

# On Windows:
venv\Scripts\activate

pip install -r requirements.txt
python app.py
```

Backend API will run at: **http://localhost:5000**

## 📄 Pages & Features

### Frontend Pages
- **Home** - Hero section with featured content
- **About** - Detailed ovarian cancer information
- **Symptoms** - Symptom guide and risk assessment tool
- **Screening** - Screening methods and diagnosis procedures
- **Treatment** - Treatment options and approaches
- **Resources** - Links to support groups and medical resources
- **FAQ** - Frequently asked questions
- **Contact** - Contact form for inquiries

### Backend API Endpoints
- `GET /api/diseases` - Disease information
- `GET /api/articles` - Articles and resources
- `GET /api/faqs` - FAQ entries
- `GET /api/statistics` - Cancer statistics
- `GET /api/symptoms` - Symptom information
- `GET /api/treatments` - Treatment information
- `POST /api/contact` - Submit contact form

## 📚 Features

✅ Comprehensive Information about Ovarian Cancer  
✅ Interactive Risk Assessment Tool  
✅ Symptom Checker  
✅ Treatment Options Guide  
✅ Educational Resources  
✅ FAQ Section  
✅ Contact Form  
✅ Responsive Mobile-Friendly Design  
✅ REST API Backend  
✅ SQLite Database  

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack web development
- Frontend framework (React) with component-based architecture
- Backend API development (Python Flask)
- Database design and management (SQLite)
- REST API development
- Responsive web design
- Frontend-backend communication
- Form handling and validation

## 📝 License

This project is created for educational purposes.

## 👤 Author

Pratima - College Mini Project

---

For detailed setup instructions, see:
- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)
