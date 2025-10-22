# Kambaz React Web App

Kambaz is a full-stack course & quiz management platform. The frontend is a fast, client-side React app built with TypeScript + Vite for HMR, typed components, and easy static deployment; it reads its API base URL from VITE_ env vars at build time and renders student/faculty flows for browsing courses, managing assignments, creating/publishing quizzes, taking quizzes, and reviewing attempts. 
GitHub

The backend is a Node.js API (Express style) that exposes REST endpoints for courses, assignments, quizzes, questions, and student attempts, persisting data in MongoDB via Mongoose. It enforces quiz settings (e.g., availability windows, attempt limits), tracks submissions and scores, and returns results with correct/incorrect highlighting to the UI; faculty endpoints support quiz CRUD and publish states. (Stack aligns with your Kambaz quiz work: MongoDB/Mongoose models for quizzes, questions, attempts; student attempt persistence and history; publish/unpublish; access-code gating.)
Together, the system supports: role-aware pages (student/faculty), real-time quiz taking with stored results, multiple attempts with limits, time-window access, and admin views of attempts—served by the Node API to the React client. The repos are organized as a React TS + Vite frontend and a JavaScript/Node server app.

---

You find the deployed version in the link below:
https://kambaz-quiz-app-summer-project.netlify.app/#/Kambaz/Account/Signin
