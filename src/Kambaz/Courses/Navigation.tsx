import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();

  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((label) => {
        const to = `/Kambaz/Courses/${cid}/${label}`;
        const isActive = pathname === to;
        const className = `list-group-item border border-0 ${isActive ? "active" : "text-danger"}`;
        
        return (
          <Link
            key={label}
            to={to}
            id={`wd-course-${label.toLowerCase()}-link`}
            className={className}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
