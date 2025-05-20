import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const location = useLocation();
  const path = location.pathname;

  const links = [
    { to: "/Kambaz/Courses/1234/Home", id: "wd-course-home-link", label: "Home" },
    { to: "/Kambaz/Courses/1234/Modules", id: "wd-course-modules-link", label: "Modules" },
    { to: "/Kambaz/Courses/1234/Piazza", id: "wd-course-piazza-link", label: "Piazza" },
    { to: "/Kambaz/Courses/1234/Zoom", id: "wd-course-zoom-link", label: "Zoom" },
    { to: "/Kambaz/Courses/1234/Assignments", id: "wd-course-quizzes-link", label: "Assignments" },
    { to: "/Kambaz/Courses/1234/Quizzes", id: "wd-course-assignments-link", label: "Quizzes" },
    { to: "/Kambaz/Courses/1234/People", id: "wd-course-people-link", label: "People" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(({ to, id, label }) => {
        const isActive = path === to;
        const className = `list-group-item border border-0 ${
          isActive ? "active" : "text-danger"
        }`;

        return (
          <Link key={to} to={to} id={id} className={className}>
            {label}
          </Link>
        );
      })}
    </div>
  );
}
