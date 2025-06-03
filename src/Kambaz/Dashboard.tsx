import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { enroll, unenroll } from "./Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((state: any) => state.courseReducer.courses);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments || []);

  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);

  const enrolledCourses = courses.filter((course: any) =>
    enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser?._id && enrollment.course === course._id
    )
  );

  const displayedCourses = showAllCourses ? courses : enrolledCourses;

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const handleEnroll = (courseId: string) => {
    if (!currentUser?._id) return;
    dispatch(enroll({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    if (!currentUser?._id) return;
    dispatch(unenroll({ userId: currentUser._id, courseId }));
  };

  const addNewCourse = () => {
    dispatch(addCourse(course));
    setCourse({
      _id: "1234",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
    });
  };

  const handleDeleteCourse = (courseId: any) => {
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <Row className="align-items-center mb-3">
        <Col>
          <h5 className="mb-0">New Course</h5>
        </Col>
        {currentUser?.role !== "FACULTY" && (
          <Col className="text-end">
            <Button variant="primary" onClick={toggleShowAllCourses}>
              Enrollments
            </Button>
          </Col>
        )}
      </Row>

      {!showAllCourses && currentUser?.role === "FACULTY" && (
        <>
          <FormControl
            value={course.name}
            className="mb-2"
            placeholder="Course Name"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            placeholder="Course Description"
            className="mb-2"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <Button onClick={addNewCourse} className="mb-3">
            Add Course
          </Button>
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : `Published Courses (${enrolledCourses.length})`}
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => {
            const isEnrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser?._id && enrollment.course === course._id
            );
            return (
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card>
                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </Card.Text>
                    </Card.Body>
                  </Link>

                  {showAllCourses && (
                    <div className="p-2 d-flex justify-content-between">
                      {isEnrolled ? (
                        <Button variant="danger" onClick={() => handleUnenroll(course._id)}>
                          Unenroll
                        </Button>
                      ) : (
                        <Button variant="success" onClick={() => handleEnroll(course._id)}>
                          Enroll
                        </Button>
                      )}
                    </div>
                  )}

                  {!showAllCourses && (
                    <Card.Body className="d-flex justify-content-between align-items-center">
                      <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                        <Button variant="primary">Go</Button>
                      </Link>
                      {currentUser?.role === "FACULTY" && (
                        <div className="ms-auto">
                          <Button
                            className="btn btn-warning me-2"
                            onClick={handleUpdateCourse}
                            id="wd-update-course-click"
                          >
                            Update
                          </Button>
                          <Button
                            onClick={(event) => {
                              event.preventDefault();
                              handleDeleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </Button>
                        </div>
                      )}
                    </Card.Body>
                  )}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
