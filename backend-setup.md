# Backend Setup Guide

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Setup Steps

1. **Create a new directory for the backend:**

   ```bash
   mkdir quantum-pmc-backend
   cd quantum-pmc-backend
   ```

2. **Initialize the project:**

   ```bash
   npm init -y
   ```

3. **Install required dependencies:**

   ```bash
   npm install express cors nodemailer dotenv
   npm install -D nodemon
   ```

4. **Create the server file (server.js):**
   Copy the provided server code into `server.js`

5. **Create environment file (.env):**

   ```env
   PORT=4000
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-email-password
   MAIL_FROM=your-email@domain.com
   MAIL_TO=recipient@domain.com
   ```

6. **Update package.json scripts:**

   ```json
   {
     "scripts": {
       "start": "node server.js",
       "dev": "nodemon server.js"
     }
   }
   ```

7. **Run the backend:**
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /health` - Health check
- `POST /api/contact` - Contact form submission
- `POST /api/careers` - Career application submission

## Testing

Test the endpoints using curl or Postman:

```bash
# Health check
curl http://localhost:4000/health

# Contact form
curl -X POST http://localhost:4000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'

# Career application
curl -X POST http://localhost:4000/api/careers \
  -H "Content-Type: application/json" \
  -d '{"position":"senior-forensic-planner","name":"Test User","email":"test@example.com","phone":"+1234567890","subject":"Application","message":"Test application","linkedin":"https://linkedin.com/in/testuser"}'
```

## Frontend Integration

The Angular frontend is now configured to send form data to:

- Contact form: `http://localhost:4000/api/contact`
- Career form: `http://localhost:4000/api/careers`

Make sure the backend is running before testing the forms.
