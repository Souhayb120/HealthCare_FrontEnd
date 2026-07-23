# 🏥 HealthCare Frontend

A modern and responsive **Hospital Management System** frontend built with **React.js**. This application provides an intuitive interface for managing patients, doctors, appointments, and medical records while communicating with a Spring Boot REST API.

---

## 📸 Preview

![Dashboard](src\assets\images\dashboard.png)
![Patients](src\assets\images\patients.png)
![AboutUs](src\assets\images\aboutUs.png)

---

## ✨ Features

- 🔐 Authentication (JWT)
- 👨‍⚕️ Doctor Management
  - View doctors
  - Add doctor
  - Edit doctor
  - Delete doctor
- 👤 Patient Management
  - View patients
  - Add patient
  - Edit patient
  - Delete patient
- 📅 Appointment Management
  - Create appointments
  - View appointments
  - Update appointment status
  - Delete appointments
- 📁 Medical Record Management
- 📊 Dashboard with statistics
  - Total Patients
  - Total Doctors
  - Total Appointments
- 📄 Pagination
- 🔍 Search and filtering
- 📱 Responsive design

---

## 🛠️ Built With

- React.js
- React Router DOM
- Axios
- React Hook Form
- CSS3
- Vite

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Cards.jsx
│   ├── Table.jsx
│   ├── Footer.jsx
│   └── Form.jsx
│
├── pages/
│   ├── Dashboard.jsx
│   ├── Patients.jsx
│   ├── Medecins.jsx
│   ├── RendezVous.jsx
│   ├── DossierMedical.jsx
│   ├── Login.jsx
│   └── NotFound.jsx
│
├── services/
│   ├── getPatients.js
│   ├── getMedecines.js
│   ├── getRendezVous.js
│   └── AuthService.js
│
├── layouts/
│
├── assets/
│
├── App.jsx
└── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/healthcare-frontend.git
```

### 2. Navigate into the project

```bash
cd healthcare-frontend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:5173
```

---

## 🔌 Backend API

This frontend communicates with a Spring Boot REST API.

Default backend URL:

```
http://localhost:8080
```

Example endpoints:

```
GET    /api/patients/listerLesPatientsPagination
GET    /api/medecins/listerLesMedecinPagination
GET    /api/rendezvous
POST   /api/patients
POST   /api/medecins
PUT    /api/patients/{id}
DELETE /api/patients/{id}
```

---

## 📊 Dashboard

The dashboard displays key statistics such as:

- Number of Patients
- Number of Doctors
- Number of Appointments
- Recent activity

---

## 🔐 Authentication

The application uses JWT authentication.

After login:

- JWT token is stored locally.
- Axios includes the token in API requests.
- Protected routes require authentication.

---

## 🎨 UI Features

- Clean Dashboard
- Responsive Sidebar
- Reusable Table Component
- Reusable Form Component
- Statistic Cards
- Mobile Friendly Layout

---

## 📦 Main Dependencies

```json
{
  "axios": "^latest",
  "react-router-dom": "^latest",
  "react-hook-form": "^latest"
}
```

---

## 📈 Future Improvements

- Dark Mode
- Export to PDF
- Export to Excel
- Advanced Search
- Notifications
- Charts and Analytics
- Role-based Access Control
- Profile Management

---

## 👨‍💻 Author

**Souhayb Hadi**

- Full Stack Java Developer
- Spring Boot
- React.js
- REST APIs
- MySQL
- Docker

---

## 📄 License

This project is licensed under the MIT License.