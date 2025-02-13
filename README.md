Gro Skill

Gro Skill is a skill development platform that helps users learn and enhance their abilities through curated courses and interactive learning experiences. The system offers different dashboards for Users, Instructors, and Admins, each with role-based access to manage profiles, courses, and learning progress.

Table of Contents

Purpose

Live URL

Key Features

Technologies Used

Screenshots

Installation Instructions

Contributing

License

Purpose

The purpose of Gro Skill is to provide a user-friendly and interactive platform for individuals to upskill themselves efficiently. Users can enroll in courses, track their progress, and engage with learning materials, while instructors can create and manage courses. Admins oversee the entire system, ensuring smooth operations and content management.

Live URL[https://gro-skill.web.app/]

Visit Gro Skill

Key Features

User Authentication: Secure login and registration using email/password and Google authentication.

Role-based Dashboards: Separate dashboards for Users, Instructors, and Admins, each with specialized functionalities.

Course Management: Users can browse, enroll, and track progress in various skill-based courses.

Instructor Features: Instructors can create, update, and manage their courses with detailed descriptions and content.

Admin Features: Admins have complete control over the platform, including managing users, instructors, and course approvals.

Search & Filtering: Users can search for courses based on categories, skill levels, and keywords.

Responsive UI: The platform is optimized for desktops, tablets, and mobile devices.

JWT Authentication: Ensures secure access control with JSON Web Tokens.

Progress Tracking: Users can monitor their learning journey with progress indicators and completion badges.

Technologies Used

Frontend

React: A JavaScript library for building user interfaces.

React Router: For handling dynamic routing and navigation.

Tailwind CSS: A utility-first CSS framework for fast and responsive design.

Backend

Node.js: A runtime environment for running JavaScript on the server.

Express.js: A minimal web framework for building RESTful APIs.

JWT: Used for secure authentication and user authorization.

Database

MongoDB: NoSQL database to store user, course, and progress data.

Authentication

Firebase Authentication: Provides secure login via email/password and Google authentication.

NPM Packages

react-router-dom: For navigation and routing.

firebase: For authentication and user management.

react-toastify: For displaying notifications like success or error messages.

axios: For making API requests to the backend.

jwt-decode: For handling JWT authentication.

react-dropzone: For managing file uploads.

(Add other relevant packages used in your project)

Screenshots

Home Page



Course Dashboard



Instructor Panel



Admin Dashboard



Installation Instructions

To set up Gro Skill on your local machine, follow these steps:

Clone the Repository:

git clone https://github.com/YOUR-USERNAME/GroSkill.git

Navigate to the Project Directory:

cd GroSkill

Install Backend Dependencies:

cd backend
npm install

Install Frontend Dependencies:

cd frontend
npm install

Set Up Environment Variables:

Create .env files in both frontend and backend directories.

Configure Firebase authentication, database connections, and JWT secrets.

Run the Application:

Backend:

npm start

Frontend:

npm start

Visit http://localhost:3000 to access the application locally.

Contributing

We welcome contributions to Gro Skill! Follow these steps to contribute:

Fork the repository.

Create a new branch for your feature or bug fix.

Make your changes and commit with a descriptive message.

Push your changes to your fork.

Submit a pull request with a detailed description.

License

This project is licensed under the MIT License.

