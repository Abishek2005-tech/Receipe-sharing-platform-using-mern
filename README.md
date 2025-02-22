# Receipe-sharing-platform-using-mern
Recipe Sharing Platform (MERN Stack)  Explore, share, and discover delicious recipes. Features:  - User authentication - Responsive interface - Easy navigation  React-based front-end, interacting with Node.js and MongoDB back-end.
🍽 Recipe Sharing Platform (Front-End)

This is the React Front-End for a Recipe Sharing Platform built using MERN Stack (MongoDB, Express.js, React, and Node.js). Users can register, log in, and explore different recipes categorized under various meal types.

🚀 Features
- User Authentication (Register & Login)
- Recipe Listing with images & descriptions
- Navigation Bar with Home, About, Contact
- Bootstrap Styling for a responsive UI

🛠 Tech Stack
- React (Frontend framework)
- React Router (Navigation)
- Bootstrap 5 (Styling)
- Axios (For API calls)

📂 Folder Structure

/recipe-sharing-platform-frontend
│── public/               # Static assets (favicon, manifest)
│── src/
│   ├── components/       # Reusable components (Navbar, Login, Register, Home)
│   ├── pages/            # Page components (Home.jsx, About.jsx, Contact.jsx)
│   ├── App.js            # Main App component
│   ├── index.js          # React entry point
│   ├── App.css           # Global styles
│── package.json          # Dependencies & scripts
│── README.md             # Documentation


🔧 Installation & Setup
1. Clone the Repository
   sh
   git clone https://github.com/your-username/recipe-sharing-platform-frontend.git
   cd recipe-sharing-platform-frontend
   
2. Install Dependencies
   sh
   npm install
   
3. Start the Development Server
   sh
   npm start
   
4. Backend Setup (Run the backend separately using Node.js & Express)

🔗 API Endpoints (Connected to Backend)
- POST /register – User Registration
- POST /login – User Login
- GET /recipes – Fetch Recipe List

📌 Future Enhancements
- Add Recipe Upload Feature
- Implement JWT Authentication
- User Dashboard for Personalized Recipes

👨‍💻 Contributing
Feel free to fork this repository and contribute! Create a pull request if you have feature improvements.
