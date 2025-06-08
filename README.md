# 🩺 HealthSaathi Admin Panel

**Secure Admin Dashboard for Managing Healthcare Services for Seniors**

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/vcint/HealthSaathi-Admin/actions)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Backend-Node.js-green)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-lightgreen)](https://www.mongodb.com/)
[![JWT Auth](https://img.shields.io/badge/Auth-JWT-orange)](https://jwt.io)

---

## 🧩 About the Project

**HealthSaathi Admin Panel** is the backend interface of the [HealthSaathi Android App](https://github.com/vcint/MyHealth), a healthcare application built specifically for senior citizens. This web-based panel provides administrators with full control over the app’s operations, including:

* Managing medicine orders submitted by users.
* Approving or rejecting prescriptions.
* Monitoring real-time app activities.
* Ensuring secure communication between the app and the backend.

This admin dashboard ensures smooth, secure, and scalable management of healthcare workflows tailored for elderly users. Designed using scalable Node.js architecture, it provides an intuitive UI for admin-level operations.

> 🚀 **SEO Optimized**: Designed to be fast, lightweight, and indexed well by search engines to support broader access and visibility.

---

## ⚙️ Tech Stack

| Layer      | Technologies Used                      |
| ---------- | -------------------------------------- |
| Frontend   | EJS, HTML, Bootstrap                   |
| Backend    | Node.js, Express.js                    |
| Database   | MongoDB                                |
| Auth       | JWT (JSON Web Tokens)                  |
| API Client | Axios                                  |
| Hosting    | Cloud-friendly: Heroku, Render, or AWS |

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally:

### 📥 Step 1: Clone the Repository

```bash
git clone https://github.com/vcint/HealthSaathi-Admin.git
```

### 📂 Step 2: Install Dependencies

```bash
cd HealthSaathi-Admin
npm install
```

### 🔐 Step 3: Configure Environment Variables

Create a `.env` file in the root folder:

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```

### ▶️ Step 4: Start the Server

```bash
npm start
```

The admin panel will be accessible at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testing

Ensure MongoDB is running and all `.env` values are correct. Then open your browser and visit:

```bash
http://localhost:3000
```

You should see the login panel and admin interface.

---

## 🤝 Contributing

We welcome contributions to improve HealthSaathi Admin Panel:

1. Fork this repository.
2. Create a new feature branch:

```bash
git checkout -b feature-name
```

3. Commit your changes:

```bash
git commit -m "Add feature"
```

4. Push to your fork:

```bash
git push origin feature-name
```

5. Submit a pull request 🚀

---

## 📃 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for more information.

---

## 🧑‍💻 Maintainer

* [Vinay Chitade](https://github.com/vcint)

