# Kambaz Quiz Application

A full-stack **Learning Management System (LMS)** inspired by Canvas,
built using **React, Node.js, Express, and MongoDB**.\
The application allows **faculty to create and manage quizzes and
assignments**, while **students can attempt quizzes and view results**.

Live Application:
https://kambaz-quiz-app-summer-project.netlify.app/#/Kambaz/Account/Profile

Frontend Repository: https://github.com/sairashwant/kambaz-react-web-app

Backend Repository:
https://github.com/sairashwant/kambaz-node-server-app

------------------------------------------------------------------------

# Project Overview

The Kambaz Quiz Application simulates a modern Learning Management
System where instructors create course content and assessments while
students interact with those resources through a web interface.

The system supports: - Course dashboards - Assignment management - Quiz
creation and editing - Multiple question types - Student quiz attempts -
Score calculation - Attempt limits - Access code validation - Result
review functionality

The project follows a client-server architecture where the frontend
communicates with backend REST APIs.

------------------------------------------------------------------------

# System Architecture

React (Frontend) \| \| REST API Calls \| Node.js + Express (Backend) \|
\| Mongoose ODM \| MongoDB Database

------------------------------------------------------------------------

# Features

## Course Dashboard

-   View available courses
-   Navigate into course modules, assignments, and quizzes

## Quiz Management (Faculty)

Faculty users can: - Create quizzes - Edit quiz details - Publish or
unpublish quizzes - Configure attempt limits - Set access codes - Add
questions dynamically

Supported question types: - Multiple Choice - True / False - Fill in the
Blank

## Quiz Question Editor

Faculty can configure: - Question title - Question text - Points -
Answer choices - Correct answer

Questions are dynamically saved and synced with the quiz document in
MongoDB.

## Student Quiz Experience

Students can: - Start quizzes - Enter access code if required - Answer
questions - Submit quiz attempts - View scores - Review correct and
incorrect answers

The system highlights: - Correct answers - Incorrect answers - Student
selected answers

------------------------------------------------------------------------

# Attempt Management

The application supports: - Configurable number of attempts - Attempt
tracking per student - Attempt count validation - Submission timestamps

All attempts are stored in MongoDB.

------------------------------------------------------------------------

# Score Calculation

When a quiz is submitted: 1. Student answers are compared with correct
answers 2. Points are calculated per question 3. Total score is computed
4. Attempt data is stored in the database

Stored attempt data includes: - Student ID - Quiz ID - Selected
answers - Score - Submission time

------------------------------------------------------------------------

# Technologies Used

## Frontend

-   React
-   React Router
-   Redux
-   TypeScript
-   Axios
-   React Bootstrap

## Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose

------------------------------------------------------------------------

# Installation and Setup

## Clone repositories

Frontend: git clone https://github.com/sairashwant/kambaz-react-web-app

Backend: git clone https://github.com/sairashwant/kambaz-node-server-app

------------------------------------------------------------------------

## Install dependencies

Frontend: cd kambaz-react-web-app npm install

Backend: cd kambaz-node-server-app npm install

------------------------------------------------------------------------

## Start backend server

npm start

Server runs on: http://localhost:4000

------------------------------------------------------------------------

## Start frontend

npm start

Application runs on: http://localhost:3000

------------------------------------------------------------------------

# Example API Endpoints

Quiz APIs: GET /api/quizzes POST /api/quizzes PUT /api/quizzes/:quizId
DELETE /api/quizzes/:quizId

Question APIs: GET /api/quizzes/:quizId/questions POST
/api/quizzes/:quizId/questions PUT /api/questions/:questionId DELETE
/api/questions/:questionId

Attempt APIs: POST /api/quizzes/:quizId/attempts GET
/api/quizzes/:quizId/attempts/:studentId GET
/api/quizzes/:quizId/attempts/count/:studentId

------------------------------------------------------------------------

# Future Improvements

Potential enhancements include: - JWT authentication - Gradebook
system - Quiz timer support - Randomized question order - File upload
for assignments - Instructor analytics dashboard

------------------------------------------------------------------------

# Author

Sai Rashwant GitHub: https://github.com/sairashwant
