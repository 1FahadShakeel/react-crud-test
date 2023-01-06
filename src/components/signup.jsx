import { useState } from "react";
import {ToastContainer} from 'react-toastify'
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submit = async()=>{
  //   const response = await axios.post()
  // }

  const  submit = async () => {
    // e.preventDefault();
    // console.log(username, email, password);
    const response = await axios.post("http://localhost:5000/users/signup", {
      username,
      email,
      password,
    });
    console.log(response);
  }
  return (
    <div className="bg-dark" style={{width:"100%",height:"100%",position:"absolute"}}>
    <div className="mt-5 w-50 mx-auto bg-white p-5 rounded-3">
      <div className="container">
        <h1 className="mb-4 display-7 text-sm-center text-lg-start text-md-start text-center">
          Create User
        </h1>
        <form onSubmit={submit} className="row g-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="form-label">UserName</label>
            <input
              type="text"
              className="form-control "
              required
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="form-label">UserName</label>
            <input
              type="email"
              className="form-control "
              required
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="form-label">UserName</label>
            <input
              type="text"
              className="form-control "
              required
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12 text-sm-center text-lg-start text-md-start text-center">
            <button
              type="submit"
              className="btn btn-danger px-5 mt-2"
              onClick={submit}
              id="btn">
              Create user
            </button>
          </div>
        </form>
      </div>
    </div>
    <ToastContainer/>
    </div>
  );
}
export default Signup;
