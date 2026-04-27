<div align="center">

# 🚌 Trakio
### Real-Time School Bus Tracking System

A full-stack platform that empowers parents, schools, and drivers with live GPS tracking, smart notifications, and role-based dashboards — keeping every child's commute safe and transparent.

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-4.x-010101?style=flat-square&logo=socket.io)](https://socket.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Features](#-features) · [Tech Stack](#️-tech-stack) ·

</div>

---

## 📌 Problem Statement

Parents often face uncertainty about their child's commute whether the bus has arrived, if the child has boarded, or when they'll reach home. Schools also lack efficient systems to monitor transport operations in real time.

**BusTrackr** solves this by providing a unified platform for live tracking, instant alerts, and complete operational control.

---

## Features

| Feature | Description |
|---|---|
| 🗺️ **Live Bus Tracking** | Real-time GPS location displayed on an interactive map |
| ⏱️ **ETA Calculation** | Smart estimated arrival times based on live traffic |
| 🔔 **Push Notifications** | Instant alerts for pickup, drop-off, and delays |
| 👥 **Role-Based Dashboards** | Tailored views for Parents, Drivers, and Admins |
| 🆘 **SOS / Emergency Alerts** | One-tap emergency broadcast from the driver's app |
| 🛣️ **Route Management** | Admin panel to create and manage bus routes |
| 📋 **Trip History** | Logs of past trips with timestamps and stops |
| 🔐 **Secure Authentication** | JWT-based auth with role-based access control |

---

## Tech Stack

### Frontend
- **[React 18](https://reactjs.org/)** + **[Vite](https://vitejs.dev/)** — Fast, modern UI framework
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[Zustand](https://zustand-demo.pmnd.rs/)** — Lightweight global state management
- **[Google Maps API](https://developers.google.com/maps)** — Interactive maps and routing

### Backend
- **[Node.js](https://nodejs.org/)** + **[Express.js](https://expressjs.com/)** — REST API server
- **[Socket.IO](https://socket.io/)** — Bidirectional real-time communication
- **[MongoDB](https://mongodb.com/)** + **[Mongoose](https://mongoosejs.com/)** — Database and ODM

### Auth & Infrastructure
- **JWT** — Stateless, role-based token authentication
- **Firebase Auth** *(optional)* — Social login support
- **dotenv** — Environment configuration

---
