import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
    <div className="card mx-auto position-absolute top-50 start-50 translate-middle" style={{width: '18rem', padding: '35px 20px'}}>
        <h5 className="card-title">Login</h5>
      <div className="card-body">
      <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
      </div>  
      <button className="btn btn-primary d-grid gap-2 col-12 mx-auto" style={{marginTop: '30px'}}><Link to="/AddBn" style={{textDecoration: 'none', color: 'white'}}>Login</Link>
</button>
    </form>  
    </div>
        <div id="newEmailSetUp" className="form-text mx-3">Need an accout? <Link to="/Signup">Sign up</Link> </div>
    </div>
    </>
  );
}
