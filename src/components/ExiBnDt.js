import React from "react";
import DateTime from "./DateTime";

export default function ExiBnDt() {
  return (
    <>
    <div className="mx-4" style={{marginTop: '2rem'}}>
        <div className="card border-dark card-body" style={{width: "18rem"}}>
          <p> prop.Bname </p>
          <p> prop.Id</p>
          <p> prop.Adress </p>
          <p> prop.Number </p>
          <p> prop.Mail </p>
          <p><DateTime /></p>
        </div>
        <div className="input-group" style={{marginTop: '2rem'}}>
          <input type="text" className="form-control" placeholder="Item name" aria-label="Item Name"/>
          <input type="number" className="form-control" placeholder="Quantity" aria-label="Quantity"/>
          <button className="btn btn-outline-secondary btn-primary text-white" type="button">Remove</button>
        </div>
        <div className="my-3 d-grid gap-3 d-md-flex">
        <button type="button" className="btn btn-primary">Add Item</button>
        <button type="button" className="btn btn-primary">Generate Bill</button>
        </div>
    </div>
    </>
  );
}
