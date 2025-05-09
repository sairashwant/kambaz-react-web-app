import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        
        

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/dbms.jpeg" width={200} />
            <div>
              <h5> CS5678 DBMS </h5>
              <p className="wd-dashboard-course-title">
                Backend  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/software.jpg" width={200} />
            <div>
              <h5> CS1546 Software Devolopment </h5>
              <p className="wd-dashboard-course-title">
                Front end  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Microprocessor.jpg" width={200} />
            <div>
              <h5> CS5093 Microprocessor </h5>
              <p className="wd-dashboard-course-title">
                Hardware programming  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Algorithm.jpg" width={200} />
            <div>
              <h5> CS7465 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Learning Algorithms  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Ai.jpg" width={200} />
            <div>
              <h5> CS5100 Artificial Intelligence </h5>
              <p className="wd-dashboard-course-title">
                Complete AI and ML course  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/PDP.jpeg" width={200} />
            <div>
              <h5> CS5200 Program design paradigms </h5>
              <p className="wd-dashboard-course-title">
                Learn all PDP ways  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


      </div>
    </div>
);}
