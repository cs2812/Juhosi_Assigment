import axios from "axios";
import React, { useState } from "react";
const Customer = () => {
  // const baseURL = "http://localhost:8080/customer"
  const baseURL = "https://juhosi-api.onrender.com/customer";
  const id= localStorage.getItem("id")
  const [form, setForm] = useState({
    id,
    orderdate: "",
    company: "",
    owner: "",
    item: "",
    quantity: "",
    weight: "",
    request: "",
    trackingid: "",
    shipmentsize: "",
    boxcount: "",
    specification: "",
    checklist: "",
  });
  const handleSubmit =(e) => {
    e.preventDefault();
    axios.post(baseURL,form)
    .then((res)=>{
      // console.log("customer",res.data)
      alert(" Form Submited ")
    })
    .catch((error)=>{
      alert("user not found")
    })
  };
  return (
    <div style={{marginTop:"40px"}}>
      <h2>Customer's Validation Form</h2>
      <form action="" onSubmit={handleSubmit}>
        <input required type="date" onChange={(e)=>setForm({...form,orderdate:e.target.value})} style={{width:"170px"}} placeholder="Order Date"  />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,company:e.target.value})} placeholder="company" />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,owner:e.target.value})} placeholder="owner" />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,item:e.target.value})} placeholder="item" />
        <br />
        <input required type="number" onChange={(e)=>setForm({...form,quantity:+e.target.value})} placeholder="quantity" />
        <br />
        <input required type="number" onChange={(e)=>setForm({...form,weight:+e.target.value})} placeholder="weight" />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,request:e.target.value})} placeholder="request for shipment" />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,trackingid:e.target.value})} placeholder="tracking Id" />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,shipmentsize:e.target.value})} placeholder="Shipment Size" />
        <br />
        <input required type="number" onChange={(e)=>setForm({...form,boxcount:+e.target.value})} placeholder="Box Count" />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,specification:e.target.value})} placeholder="Specification" />
        <br />
        <input required type="text" onChange={(e)=>setForm({...form,checklist:e.target.value})} placeholder="Checklist Quantity" />
        <br />
        <input required type="submit" value="SUBMIT" style={{width:"180px", borderRadius:"5px" ,marginTop:"5px",background:"blue"}}/>
      </form>
    </div>
  );
};

export default Customer;
