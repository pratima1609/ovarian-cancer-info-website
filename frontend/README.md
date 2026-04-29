# Ovarian Cancer Information Website - Frontend

React frontend for the Ovarian Cancer Informational Website.

## Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── Header.js      # Navigation header
│   └── Footer.js      # Footer with links
├── pages/
│   ├── Home.js        # Home page
│   ├── About.js       # About ovarian cancer
│   ├── Symptoms.js    # Symptom checker
│   ├── Screening.js   # Screening information
│   ├── Treatment.js   # Treatment options
│   ├── Resources.js   # Support resources
│   ├── FAQ.js         # Frequently asked questions
│   └── Contact.js     # Contact form
├── styles/
│   ├── App.css        # Main styles
│   ├── Header.css     # Header styles
│   ├── Footer.css     # Footer styles
│   └── Pages.css      # Page-specific styles
├── App.js             # Main app component
└── index.js           # Entry point
```

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm build`
Builds the app for production.

### `npm test`
Runs the test suite.

## Features

- 8 informational pages about ovarian cancer
- Interactive symptom checker with risk assessment
- Contact form for user inquiries
- Responsive mobile-friendly design
- Integration with Flask backend API

## Pages

1. **Home** - Overview and quick facts
2. **About** - Detailed cancer information
3. **Symptoms** - Symptom checker and risk assessment
4. **Screening** - Diagnostic procedures
5. **Treatment** - Treatment options
6. **Resources** - Support organizations
7. **FAQ** - Frequently asked questions
8. **Contact** - Contact form

## API Integration

The frontend connects to the Flask backend API at `http://localhost:5000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment

Deploy to Netlify, Vercel, or any static hosting service:

```bash
# Build the project
npm run build

# Deploy the build folder
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)