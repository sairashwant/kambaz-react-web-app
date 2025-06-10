import { Button, Card, Col, Row, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      <Row className="align-items-center mb-3">
        <Col>
          <h5 className="mb-0">New Course</h5>
        </Col>
        <Col className="text-end">
          <Button variant="primary" onClick={() => setEnrolling(!enrolling)}>
            {enrolling ? "My Courses" : "All Courses"}
          </Button>
        </Col>
      </Row>

      {isFaculty && !enrolling && (
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
          <div className="mb-3">
            <Button onClick={addCourse} className="me-2">
              Add Course
            </Button>
            <Button variant="danger" onClick={updateCourse}>
              Update Course
            </Button>
          </div>
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {enrolling ? "All Courses" : `Published Courses (${courses.length})`}
      </h2>
      <hr />

      <Row xs={1} md={5} className="g-4">
        {courses.map((course) => (
          <Col key={course._id} style={{ width: "300px" }}>
            <Card>
              <Link
                to={`/Kambaz/Courses/${course._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <Card.Img src="/images/reactjs.jpg" height={160} />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    {course.name}
                  </Card.Title>
                  <Card.Text
                    className="overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {course.description}
                  </Card.Text>
                </Card.Body>
              </Link>

              {enrolling && !isFaculty && (
                <div className="p-2 d-flex justify-content-between">
                  <Button
                    variant={course.enrolled ? "danger" : "success"}
                    onClick={() =>
                      updateEnrollment(course._id, !course.enrolled)
                    }
                  >
                    {course.enrolled ? "Unenroll" : "Enroll"}
                  </Button>
                </div>
              )}

              {!enrolling && (
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <Link to={`/Kambaz/Courses/${course._id}/Home`}>
                    <Button variant="primary">Go</Button>
                  </Link>
                  {isFaculty && (
                    <div className="ms-auto">
                      <Button
                        className="btn btn-warning me-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        className="btn btn-danger"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  )}
                </Card.Body>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
