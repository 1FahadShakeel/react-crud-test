import { Link } from "react-router-dom";
import {  useState } from "react";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function letlogin(){
    const response = await axios.post("http://localhost:5000/users/login",{
      username,password
    })
    console.log(response)
  }


  return (
    <div className="bg-dark" style={{width:"100%",height:"100%",position:"absolute"}}>
      <div className="mt-5 w-50 mx-auto bg-white p-5 rounded-3">
        <div className="container justify-content-center mt-5 ms-5 ">
          <h1 className="mb-4 display-7 ms-5 text-sm-center text-lg-start text-md-start text-center">
            Login
          </h1>
          <form className="ms-5">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label className="form-label py-2">Username</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter UserName"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <label className="form-label py-2">Password</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Enter password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="col-12 text-sm-center text-lg-start text-md-start text-center">
              <button
                type="submit"
                className="btn btn-danger px-5 mt-4"
                onClick={letlogin}
                id="btn">
                Login
              </button>
            </div>
            <div className="col-12 text-sm-center text-lg-start text-md-start text-center mt-3">
              <Link className="text-primary" to={"/signup"}>Not a Member? Create User</Link>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}
export default Login;
