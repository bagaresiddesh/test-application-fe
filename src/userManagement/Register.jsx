import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/register', values)
    .then(res => console.log(res))
    .then(err => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="Name" class="col-form-label">
              Name
            </label>
            <input
              type="text"
              readonly
              class="form-control rounded"
              name="name"
              placeholder="Name"
              onChange={e => setValues({...values, name: e.target.value})}
            />
          </div>
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
              onChange={e => setValues({...values, email: e.target.value})}
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
              onChange={e => setValues({...values, password: e.target.value})}
            />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success w-100 rounded my-2"
            >
              Register
            </button>
            <Link
              to="/login"
              className="btn btn-defualt border w-100 bg-light rounded text-decoration-none my-2"
            >
              LogIn
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
