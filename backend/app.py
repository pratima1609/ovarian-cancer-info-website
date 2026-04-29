from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ovarian_cancer.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
CORS(app)

# Database Models
class DiseaseInfo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Symptom(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    severity = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Treatment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text)
    type = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Resource(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    url = db.Column(db.String(500))
    phone = db.Column(db.String(20))
    category = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class FAQ(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(500), nullable=False)
    answer = db.Column(db.Text, nullable=False)
    category = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class ContactSubmission(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(200), nullable=False)
    subject = db.Column(db.String(300))
    message = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class RiskAssessment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    age = db.Column(db.Integer)
    family_history = db.Column(db.Boolean)
    personal_history = db.Column(db.Boolean)
    symptoms_count = db.Column(db.Integer)
    risk_score = db.Column(db.Float)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Statistics(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    value = db.Column(db.String(100))
    description = db.Column(db.Text)
    year = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

# Routes
@app.route('/api/diseases', methods=['GET'])
def get_diseases():
    diseases = DiseaseInfo.query.all()
    return jsonify([{'id': d.id, 'title': d.title, 'description': d.description, 'category': d.category} for d in diseases])

@app.route('/api/symptoms', methods=['GET'])
def get_symptoms():
    symptoms = Symptom.query.all()
    return jsonify([{'id': s.id, 'name': s.name, 'description': s.description, 'severity': s.severity} for s in symptoms])

@app.route('/api/treatment', methods=['GET'])
def get_treatments():
    treatments = Treatment.query.all()
    return jsonify([{'id': t.id, 'name': t.name, 'description': t.description, 'type': t.type} for t in treatments])

@app.route('/api/resources', methods=['GET'])
def get_resources():
    resources = Resource.query.all()
    return jsonify([{'id': r.id, 'name': r.name, 'url': r.url, 'phone': r.phone, 'category': r.category} for r in resources])

@app.route('/api/faq', methods=['GET'])
def get_faqs():
    faqs = FAQ.query.all()
    return jsonify([{'id': f.id, 'question': f.question, 'answer': f.answer, 'category': f.category} for f in faqs])

@app.route('/api/statistics', methods=['GET'])
def get_statistics():
    stats = Statistics.query.all()
    return jsonify([{'id': s.id, 'title': s.title, 'value': s.value, 'description': s.description, 'year': s.year} for s in stats])

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json
    if not data or not all(k in data for k in ['name', 'email', 'subject', 'message']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    try:
        contact = ContactSubmission(
            name=data['name'],
            email=data['email'],
            subject=data['subject'],
            message=data['message']
        )
        db.session.add(contact)
        db.session.commit()
        return jsonify({'message': 'Contact submitted successfully', 'id': contact.id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/risk-assessment', methods=['POST'])
def submit_risk_assessment():
    data = request.json
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    try:
        assessment = RiskAssessment(
            age=data.get('age'),
            family_history=data.get('family_history', False),
            personal_history=data.get('personal_history', False),
            symptoms_count=data.get('symptoms_count', 0),
            risk_score=data.get('risk_score', 0)
        )
        db.session.add(assessment)
        db.session.commit()
        return jsonify({'message': 'Risk assessment submitted successfully', 'id': assessment.id}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Ovarian Cancer Information API is running'}), 200

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)