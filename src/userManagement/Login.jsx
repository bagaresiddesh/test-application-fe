import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="Email" class="col-form-label">
              Email
            </label>
            <input
              type="text"
              readonly
              class="form-control rounded"
              name="email"
              placeholder="Email"
            />
          </div>
          <div class="form-group">
            <label for="inputPassword" class="col-form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control rounded"
              name="password"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success w-100 rounded my-2"
            >
              LogIn
            </button>
            <Link to="/register" className="btn btn-defualt border w-100 bg-light rounded-0text-decoration-none my-2">
              New here?.. Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
