import React, { useState} from "react";
import {useNavigate} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "../Component/style.css"
import { NavLink } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: " ", email: "", phone: "", work: "", password: "", cpassword: ""
  });
  let name, value;
  const handleinput = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({
      ...user, [name]: value
    })
  }
  const postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });
    const data = await (res).json();
    if(data.status == 422  || !data ) {
      window.alert("Invalid egestration")
      console.log("Invalid egestration")
    }
    else{
      window.alert("regestration successful")
      console.log("regestration successful")
    }
    navigate("/signin");
  }
  return (
    <>
      <section className="vh-110 bg-image"
        style={{ "backgroundImage": "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ "borderRadius": " 15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                    <form method="POST">

                      <div className="form-outline mb-4">
                        <input type="text"
                          name="name"
                          value={user.name}
                          onChange={handleinput}
                          id="form3Example1cg" className="form-control form-control-lg" />
                        <label className="form-label">Your Name</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email"
                          name="email"
                          value={user.email}
                          onChange={handleinput}
                          id="form3Example3cg" className="form-control form-control-lg" />
                        <label className="form-label">Your Email</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="number"
                          name="phone"
                          value={user.phone}
                          onChange={handleinput}
                          id="form3Examp2e1cg" className="form-control form-control-lg" />
                        <label className="form-label">Your phone number</label>
                      </div>


                      <div className="form-outline mb-4">
                        <input type="text"
                          name="work"
                          value={user.work}
                          onChange={handleinput}
                          className="form-control form-control-lg" />
                        <label className="form-label">work</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password"
                          name="password"
                          value={user.password}
                          onChange={handleinput}
                          id="form3Example4cg" className="form-control form-control-lg" />
                        <label className="form-label">Password</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password"
                          name="cpassword"
                          value={user.cpassword}
                          onChange={handleinput}
                          id="form3Example4cdg" className="form-control form-control-lg" />
                        <label className="form-label">Repeat your password</label>
                      </div>

                      <div className="d-flex justify-content-center">
                        <button type="button"
                          onClick={postdata}
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                      </div>

                      <p className="text-center text-muted mt-5 mb-0">Have already an account? <NavLink to="/signin"
                        className="fw-bold text-body"><u>Login here</u></NavLink></p>

                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Register;