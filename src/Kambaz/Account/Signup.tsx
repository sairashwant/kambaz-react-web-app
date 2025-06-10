import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { FormControl } from "react-bootstrap";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kambaz/Account/Profile");
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>

      <FormControl
        className="mb-2"
        placeholder="Username"
        value={user.username || ""}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <FormControl
        className="mb-2"
        placeholder="Password"
        type="password"
        value={user.password || ""}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <FormControl
        className="mb-2"
        placeholder="First Name"
        value={user.firstName || ""}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <FormControl
        className="mb-2"
        placeholder="Last Name"
        value={user.lastName || ""}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <FormControl
        className="mb-2"
        type="email"
        placeholder="Email"
        value={user.email || ""}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <FormControl
        className="mb-2"
        type="date"
        placeholder="Date of Birth"
        value={user.dob || ""}
        onChange={(e) => setUser({ ...user, dob: e.target.value })}
      />
      <select
        onChange={(e) => setUser({ ...user, role: e.target.value })}
        value={user.role || ""}
        className="form-control mb-2"
      >
        <option value="">Select Role</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100">
        Sign up
      </button>
      <br />
      <Link to="/Kambaz/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
  );
}