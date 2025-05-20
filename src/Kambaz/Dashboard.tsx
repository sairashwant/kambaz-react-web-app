import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        <Col className="wd-dashboard-course" style={{ width: "300px" }}>
          <Card>
          <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
          <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
    
        
        
<Col className="wd-dashboard-course" style={{ width: "300px" }}>
<Card>
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/dbms.jpeg" width="100%" height={160} />
            <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 DBMS</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Back End</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
      </Link>
</Card>
</Col>
<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/software.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1546 Software Development</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Front end
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/Microprocessor.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5093 Microprocessor</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Hardware programming
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/Algorithm.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS7465 Algorithms</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Learning Algorithms
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/Ai.jpg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5100 Artificial Intelligence</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Complete AI and ML course
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>

<Col className="wd-dashboard-course" style={{ width: "300px" }}>
  <Card>
    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/PDP.jpeg" width="100%" height={160} />
      <Card.Body>
        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5200 Program Design Paradigms</Card.Title>
        <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
          Learn all PDP ways
        </Card.Text>
        <Button variant="primary">Go</Button>
      </Card.Body>
    </Link>
  </Card>
</Col>
      </Row>
      </div>
    </div>
);}
