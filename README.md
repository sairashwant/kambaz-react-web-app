# Kambaz Quiz Application

A full-stack Learning Management System (LMS) inspired by Canvas, built
using React, Node.js, Express, and MongoDB.\
The application allows faculty to create and manage quizzes and
assignments while students can attempt quizzes, submit answers, and
review results.

Live Application:
https://kambaz-quiz-app-summer-project.netlify.app/#/Kambaz/Account/Profile

Frontend Repository: https://github.com/sairashwant/kambaz-react-web-app

Backend Repository:
https://github.com/sairashwant/kambaz-node-server-app

------------------------------------------------------------------------

# Project Overview

The Kambaz Quiz Application simulates a modern LMS environment where
instructors create course content and assessments while students
interact with those resources through a web interface.

Core capabilities include:

-   Course dashboards
-   Assignment management
-   Quiz creation and editing
-   Multiple question types
-   Student quiz attempts
-   Score calculation
-   Attempt limits
-   Access code validation
-   Result review functionality

The system follows a client--server architecture where the frontend
communicates with backend REST APIs to perform all data operations.

------------------------------------------------------------------------

# System Architecture

The Kambaz Quiz Application follows a three‑tier architecture consisting
of:

1.  Presentation Layer (Frontend)
2.  Application Layer (Backend)
3.  Data Layer (Database)

Architecture Overview:

Browser \| \| HTTP Requests v React Frontend (Client) \| \| REST API
(Axios) v Node.js + Express Backend \| \| Mongoose ODM v MongoDB
Database

------------------------------------------------------------------------

## Presentation Layer (Frontend)

The frontend is built using React with TypeScript and serves as the user
interface of the system.

Responsibilities include:

-   Rendering dashboards and course content
-   Displaying quizzes and assignments
-   Providing quiz editing tools for instructors
-   Allowing students to attempt quizzes
-   Managing navigation using React Router
-   Managing application state using Redux
-   Communicating with backend APIs using Axios

Users interact entirely through this layer.

------------------------------------------------------------------------

## Application Layer (Backend)

The backend is implemented using Node.js and Express.js.

Responsibilities include:

-   Processing API requests from the frontend
-   Implementing business logic
-   Managing quiz creation and updates
-   Validating quiz attempts
-   Calculating quiz scores
-   Enforcing attempt limits
-   Managing quiz access codes
-   Persisting data to the database

The backend acts as the core processing layer of the system.

------------------------------------------------------------------------

## Data Layer (Database)

MongoDB is used as the database, with Mongoose acting as the Object Data
Modeling (ODM) library.

Responsibilities include:

-   Storing quiz documents
-   Managing question data
-   Recording student quiz attempts
-   Storing scores and submission timestamps

Example collections:

-   quizzes
-   questions
-   attempts

------------------------------------------------------------------------

# Request Flow Example (Student Taking a Quiz)

1.  Student opens a quiz from the React frontend.
2.  The frontend requests quiz data from the backend API.
3.  The backend retrieves quiz and question data from MongoDB.
4.  The frontend displays the quiz interface.
5.  The student submits answers.
6.  The backend evaluates answers and calculates the score.
7.  Attempt data is stored in MongoDB.
8.  Results are returned to the frontend and displayed to the student.

------------------------------------------------------------------------

# Features

## Course Dashboard

-   View available courses
-   Navigate into modules, assignments, and quizzes

------------------------------------------------------------------------

## Quiz Management (Faculty)

Faculty users can:

-   Create quizzes
-   Edit quiz details
-   Publish or unpublish quizzes
-   Configure attempt limits
-   Set quiz access codes
-   Add questions dynamically

Supported question types:

-   Multiple Choice
-   True / False
-   Fill in the Blank

------------------------------------------------------------------------

## Quiz Question Editor

Faculty can configure:

-   Question title
-   Question text
-   Points
-   Answer choices
-   Correct answer

Questions are dynamically saved and synced with the quiz document in
MongoDB.

------------------------------------------------------------------------

## Student Quiz Experience

Students can:

-   Start quizzes
-   Enter access code if required
-   Answer questions
-   Submit quiz attempts
-   View scores
-   Review correct and incorrect answers

The system highlights:

-   Correct answers
-   Incorrect answers
-   Student selections

------------------------------------------------------------------------

# Attempt Management

The system supports:

-   Configurable number of attempts
-   Attempt tracking per student
-   Attempt count validation
-   Submission timestamps

All attempts are stored in MongoDB.

------------------------------------------------------------------------

# Score Calculation

When a quiz is submitted:

1.  Student answers are compared against correct answers
2.  Points are calculated per question
3.  Total score is computed
4.  Attempt data is stored in the database

Stored attempt data includes:

-   Student ID
-   Quiz ID
-   Selected answers
-   Score
-   Submission time

------------------------------------------------------------------------

# Technologies Used

Frontend

-   React
-   TypeScript
-   React Router
-   Redux
-   Axios
-   React Bootstrap

Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

Deployment

-   Netlify (Frontend)

------------------------------------------------------------------------

# Repository Structure

Frontend (React)

kambaz-react-web-app │ ├── src │ ├── Kambaz │ │ ├── Dashboard │ │ ├──
Courses │ │ │ ├── Quizzes │ │ │ ├── Assignments │ │ │ └── Modules │ │
└── Account │ ├── components │ ├── reducers │ ├── client │ └── App.tsx

Backend (Node Server)

kambaz-node-server-app │ ├── routes │ ├── quizzes │ ├── questions │ └──
attempts │ ├── models │ ├── Quiz │ ├── Question │ └── Attempt │ ├──
database ├── index.js └── server.js

------------------------------------------------------------------------

# Installation and Setup

Clone repositories

Frontend

git clone https://github.com/sairashwant/kambaz-react-web-app

Backend

git clone https://github.com/sairashwant/kambaz-node-server-app

------------------------------------------------------------------------

Install dependencies

Frontend

cd kambaz-react-web-app npm install

Backend

cd kambaz-node-server-app npm install

------------------------------------------------------------------------

Start backend server

npm start

Server runs on:

http://localhost:4000

------------------------------------------------------------------------

Start frontend

npm start

Application runs on:

http://localhost:3000

------------------------------------------------------------------------

# Example API Endpoints

Quiz APIs

GET /api/quizzes\
POST /api/quizzes\
PUT /api/quizzes/:quizId\
DELETE /api/quizzes/:quizId

Question APIs

GET /api/quizzes/:quizId/questions\
POST /api/quizzes/:quizId/questions\
PUT /api/questions/:questionId\
DELETE /api/questions/:questionId

Attempt APIs

POST /api/quizzes/:quizId/attempts\
GET /api/quizzes/:quizId/attempts/:studentId\
GET /api/quizzes/:quizId/attempts/count/:studentId

------------------------------------------------------------------------

# Future Improvements

Potential enhancements:

-   JWT authentication
-   Gradebook system
-   Timed quizzes
-   Randomized question order
-   Assignment file uploads
-   Instructor analytics dashboard

------------------------------------------------------------------------

# Author

Sai Rashwant\
GitHub: https://github.com/sairashwant
