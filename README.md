
# HealthSaathi Admin Panel  
**Admin Panel for HealthSaathi Android App**

## About the Project  
The HealthSaathi Admin Panel is an integral part of the [HealthSaathi project](https://github.com/vcint/MyHealth). This web-based admin panel is used to manage the orders, users, and other aspects of the HealthSaathi app. It provides administrators with an easy interface to handle orders, approve or reject them, and monitor app activities. 

This admin panel complements the [HealthSaathi Android app](https://github.com/vcint/MyHealth), which is designed to assist senior citizens with healthcare services like ordering medicines, calling their doctors, and sharing location in emergencies.

---

## Tech Stack  
The HealthSaathi Admin Panel is built using the following technologies:  

- **Frontend:** EJS,HTML  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **API Requests:** Axios  
- **Deployment:** Can be deployed on any cloud service (Heroku, AWS, etc.)

---

## How to Get Started  

### Step 1: Clone the Repository  
```bash
git clone https://github.com/vcint/HealthSaathi-Admin.git
```

### Step 2: Install Dependencies  
Navigate to the project directory and install the required dependencies:  
```bash
cd HealthSaathi-Admin
npm install
```

### Step 3: Configure Environment Variables  
Create a `.env` file in the root of the project and add the necessary configuration:  
```bash
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

### Step 4: Run the Project  
Start the server:  
```bash
npm start
```

The admin panel should now be running locally at `http://localhost:3000`.

---

## Testing  
You can test the Admin Panel by visiting `http://localhost:3000` after following the setup instructions above. Ensure your MongoDB server is running and the environment variables are properly configured.

---

## Contributing  
We welcome contributions to improve the HealthSaathi Admin Panel! To contribute, follow these steps:

1. Fork the repository.  
2. Create a branch:  
   ```bash
   git checkout -b your-feature
   ```
3. Make your changes and commit them:  
   ```bash
   git commit -m "Added a feature"
   ```
4. Push your changes to your fork:  
   ```bash
   git push origin your-feature
   ```
5. Submit a pull request.
