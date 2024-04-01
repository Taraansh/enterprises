import React from "react";
import { Link } from "react-router-dom";

const AddBn = () => {
  return (
    <div className="container">
      <div className="row text-center position-absolute top-50 start-50 translate-middle" style={{ marginTop: "2rem" }}>
        <div className="col-sm mb-3">
          <Link to="/AddNewBnDet" style={{textDecoration: 'none', color: 'black'}}>
            <div className="card mx-auto h-100" style={{width: "15rem", height: "15rem"}}>
            <div className="card-body">
              <h4 className="card-title" style={{margin:'3rem 3rem'}}>ADD BUSINESS</h4>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-sm mb-3">
        <Link to="/ExiBn" style={{textDecoration: 'none', color: 'black'}}>
          <div className="card mx-auto h-100" style={{width: "15rem", height: "15rem"}}>
            <div className="card-body">
              <h4 className="card-title" style={{margin:'3rem 3rem'}}>
                EXISTING BUSINESS
              </h4>
            </div>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default AddBn;
