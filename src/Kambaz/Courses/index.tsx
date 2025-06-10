import CourseNavigation from "./Navigation";
import { Route, Routes, useParams, useLocation, Navigate } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { useSelector } from "react-redux";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const course = courses.find((c) => c._id === cid);
  const isFaculty = currentUser?.role === "FACULTY";
  const isEnrolled = isFaculty || course?.enrolled;

  if (!isEnrolled) {
    return <Navigate to="/Kambaz/Dashboard" replace />;
  }

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name} {'>'} {pathname.split("/")[4]}
      </h2>
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
