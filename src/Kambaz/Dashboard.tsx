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

  const addNewCourse = () => {
    const newId = uuidv4();
    const newCourse = { ...course, _id: newId };

    dispatch(addCourse(newCourse));

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

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>New Course</h5>
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
        Enrolled Courses ({courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course: any) => (
            <Col key={course._id} style={{ width: "300px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                  </Card.Body>
                </Link>
                {currentUser?.role === "FACULTY" && (
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                      <Button variant="primary">Go</Button>
                    </Link>
                    <div className="ms-auto">
                      <Button
                        className="btn btn-warning me-2"
                        onClick={() => handleEditCourse(course)}
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDeleteCourse(course._id);
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
