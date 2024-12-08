import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://employee-mern-api-tau.vercel.app/getuser/${id}`)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
        setCity(result.data.city);
      })
      .catch((err) => console.log(err));
  }, [id, navigate]);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary">
        <div className="w-50 bg-white rounded p-4">
          <form>
            <h2>Staff Detail</h2>
            <div className="mt-2">
              <label className="mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control rounded-0"
                disabled
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mt-3">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control rounded-0"
                disabled
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mt-2">
              <label className="mb-2">Age</label>
              <input
                type="text"
                placeholder="Enter your age"
                className="form-control rounded-0"
                disabled
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>
            <div className="mt-2">
              <label className="mb-2">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="form-control rounded-0"
                disabled
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <Link to={`/update/${id}`} className="btn btn-success w-100 mt-2">
              Update
            </Link>
            <Link to="/home" className="btn btn-primary w-100 mt-2">
              Home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Detail;


