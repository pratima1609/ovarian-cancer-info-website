# Ovarian Cancer Information Website - Backend

Python Flask REST API for the Ovarian Cancer Informational Website.

## Setup

### 1. Create Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run the Server
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Disease Information
- **GET /api/diseases** - Get all disease information
- **GET /api/symptoms** - Get symptoms list
- **GET /api/treatment** - Get treatment options
- **GET /api/resources** - Get resources and support
- **GET /api/faq** - Get FAQ entries
- **GET /api/statistics** - Get cancer statistics

### Form Submissions
- **POST /api/contact** - Submit contact form
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Question about symptoms",
    "message": "I have a question..."
  }
  ```

- **POST /api/risk-assessment** - Submit risk assessment
  ```json
  {
    "age": 45,
    "family_history": true,
    "personal_history": false,
    "symptoms_count": 2,
    "risk_score": 35
  }
  ```

### Health Check
- **GET /api/health** - Check API status

## Database Models

1. **DiseaseInfo** - Disease information and details
2. **Symptom** - Ovarian cancer symptoms
3. **Treatment** - Treatment options
4. **Resource** - Support organizations and resources
5. **FAQ** - Frequently asked questions
6. **ContactSubmission** - Contact form submissions
7. **RiskAssessment** - Risk assessment data
8. **Statistics** - Cancer statistics and data

## Environment Variables

Create a `.env` file:
```
FLASK_ENV=development
FLASK_DEBUG=True
```

## CORS Configuration

CORS is enabled for all origins. For production, configure specific allowed origins.

## Production Deployment

For production deployment:

1. Set `FLASK_ENV=production`
2. Use a production WSGI server (Gunicorn)
3. Configure proper database (PostgreSQL recommended)
4. Set up SSL/HTTPS
5. Configure CORS properly
6. Use environment variables for sensitive data