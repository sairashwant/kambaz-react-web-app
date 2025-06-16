import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import Session from "./Account/Session";
import ProtectedRoute from "./Account/ProtectedRoute";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";
import * as enrollmentClient from "./Courses/Enrollments/client";

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [enrolling, setEnrolling] = useState<boolean>(false);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      console.log("All courses fetched:", allCourses);
      const enrolledCourses = await userClient.findMyCourses();
      console.log("Enrolled courses fetched:", enrolledCourses);
      const enrolledIds = new Set(enrolledCourses.map((c: any) => c._id));
      const mergedCourses = allCourses.map((course: any) => ({
        ...course,
        enrolled: enrolledIds.has(course._id),
      }));
      console.log("Merged courses:", mergedCourses);
      setCourses(mergedCourses);
    } catch (error) {
      console.error("Error fetching all courses:", error);
    }
  };

  const updateEnrollment = async (courseId: string, enrolled: boolean)   => {
    try {
      if (!currentUser) return;
      if (enrolled) {
        await enrollmentClient.enrollUser(currentUser._id, courseId);
      } else {
        await enrollmentClient.unenrollUser(currentUser._id, courseId);
      }
      await fetchCourses(); // refresh after enrollment change
    } catch (error) {
      console.error("Enrollment update failed:", error);
    }
  };

 const addCourse = async () => {
   const newCourse = await courseClient.createCourse(course);
   if (currentUser) {
     await enrollmentClient.enrollUser(currentUser._id, newCourse._id);
   }
   await fetchCourses();
 };


 const deleteCourse = async (courseId: string) => {
   const status = await courseClient.deleteCourse(courseId);
   setCourses(courses.filter((course) => course._id !== courseId));
 };

  const updateCourse = async () => {
    try {
      await courseClient.updateCourse(course);
      setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      enrolling ? fetchCourses() : findCoursesForUser();
    }
  }, [currentUser, enrolling]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="Account/*" element={<Account />} />
            <Route
              path="Dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addCourse={addCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="Courses/:cid/*"
              element={
                <ProtectedRoute>
                  <Courses courses={courses} />
                </ProtectedRoute>
              }
            />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}
