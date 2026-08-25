# AATPTC College Website & Administration System

A full-stack web application developed for **Addis Ababa Tegbareid Polytechnic College (AATPTC)** as an industrial practice project.

The system provides a modern public college website together with a secure administration portal for managing website content through a centralized backend and MySQL database.

## 🌐 Live Demo

**Public Website:**  
https://aatptc-frontend.onrender.com

**Backend API:**  
https://aatptc-backend.onrender.com

**Source Code:**  
https://github.com/aman-wo/aatptc-project

---

## 📌 Project Overview

The AATPTC College Website & Administration System was developed to provide a modern, responsive, and maintainable digital platform for the college.

The system consists of two major parts:

1. **Public Website** – Allows visitors to view college information, programs, departments, news, events, gallery content, announcements, staff information, downloads, and contact information.

2. **Administration Portal** – Allows authorized administrators to manage website content through a protected dashboard.

---

## ✨ Main Features

### Public Website

- Responsive homepage
- About page
- Departments
- Academic programs
- News
- Events
- Gallery
- Announcements
- Staff information
- Downloads
- Contact page
- Dynamic content loaded from the backend API
- Responsive image display

### Administration Portal

- Secure admin login
- JWT-based authentication
- Protected admin routes
- Admin dashboard
- Department management
- Program management
- News management
- Event management
- Staff management
- Gallery management
- Download management
- Announcement management
- Contact management
- Settings management
- Image and file uploads
- Create, read, update, and delete operations

---

## 🛠️ Technology Stack

### Frontend

- React
- Vite
- React Router
- Axios
- JavaScript
- CSS

### Backend

- Node.js
- Express.js
- MySQL2
- JWT
- bcryptjs
- Multer
- Helmet
- CORS
- Express Rate Limit
- Compression

### Database

- MySQL / MariaDB
- Aiven Cloud MySQL

### Development & Deployment

- Git
- GitHub
- Termux
- Code Server
- Render
- Aiven

---

## 🏗️ System Architecture

```text
                    ┌──────────────────────┐
                    │      Web Browser     │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React + Vite       │
                    │      Frontend        │
                    │      Render           │
                    └──────────┬───────────┘
                               │
                         REST API / HTTPS
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Node.js + Express  │
                    │       Backend        │
                    │       Render         │
                    └──────────┬───────────┘
                               │
                         MySQL / SSL
                               │
                               ▼
                    ┌──────────────────────┐
                    │     Aiven MySQL      │
                    │      Database        │
                    └──────────────────────┘
