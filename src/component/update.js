import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      // .get(`http://localhost:8080/getuser/${id}`)
      .get(`/getuser/${id}`)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
        setCity(result.data.city);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/update/${id}`, {
        name,
        email,
        age,
        city,
      })
      .then((res) => {
        console.log(res);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary">
        <div className="w-50 bg-white rounded p-4">
          <form onSubmit={handleUpdate}>
            <h2>Update</h2>
            <div className="mt-2">
              <label className="mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mt-3">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mt-2">
              <label className="mb-2">Age</label>
              <input
                type="text"
                placeholder="Enter your age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </div>
            <div className="mt-2">
              <label className="mb-2">City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="form-control"
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

export default Update;

