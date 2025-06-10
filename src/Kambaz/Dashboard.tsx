import { Link } from "react-router-dom";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";

export default function Dashboard({ courses }: { courses: any[] }) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [course, setCourse] = useState<any>({
    _id: "",
    name: "",
    number: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const resetCourseForm = () => {
    setCourse({
      _id: "",
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsEditing(false);
  };

  const handleEditCourse = (selectedCourse: any) => {
    setCourse(selectedCourse);
    setIsEditing(true);
  };

  const toggleShowAllCourses = () => {
    setShowAllCourses(!showAllCourses);
  };

  const addNewCourse = () => {
    const newId = uuidv4();
    const newCourse = { ...course, _id: newId };
    dispatch(addCourse(newCourse));
    resetCourseForm();
  };

  const handleDeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const handleUpdateCourse = () => {
    dispatch(updateCourse(course));
    resetCourseForm();
  };

  const displayedCourses = courses;

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

      {currentUser?.role === "FACULTY" && (
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
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          {isEditing ? (
            <>
              <Button onClick={handleUpdateCourse} className="mb-2 me-2">
                Update Course
              </Button>
              <Button
                variant="secondary"
                onClick={resetCourseForm}
                className="mb-3"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button onClick={addNewCourse} className="mb-3">
              Add Course
            </Button>
          )}
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
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

                <Card.Body className="d-flex justify-content-between align-items-center">
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                    <Button variant="primary">Go</Button>
                  </Link>
                  {currentUser?.role === "FACULTY" && (
                    <div className="ms-auto">
                      <Button
                        className="btn btn-warning me-2"
                        onClick={() => handleEditCourse(course)}
                        id="wd-edit-course-click"
                      >
                        Edit
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
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
