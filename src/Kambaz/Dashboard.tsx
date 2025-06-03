import { Link } from "react-router-dom";
import * as db from "./Database";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Dashboard({
  courses, course, setCourse, addNewCourse, deleteCourse, updateCourse
}: {
  courses: any[]; course: any; setCourse: (course: any) => void;
  addNewCourse: () => void; deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;

  // Filter courses based on user enrollment
  const enrolledCourses = courses.filter((course) =>
    enrollments.some((enrollment) =>
      enrollment.user === currentUser?._id &&
      enrollment.course === course._id
    )
  );

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course</h5>
      <br />
      <FormControl
        defaultValue={course.name}
        className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        defaultValue={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <Button onClick={addNewCourse}>Add Course</Button>

      <hr />

      <h2 id="wd-dashboard-published">
        Published Courses ({enrolledCourses.length})
      </h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {enrolledCourses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark">
                  <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                    <Button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger float-end"
                      id="wd-delete-course-click"
                    >
                      Delete
                    </Button>
                    <Button
                      className="btn btn-warning float-end me-2"
                      onClick={updateCourse}
                      id="wd-update-course-click"
                    >
                      Update
                    </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
