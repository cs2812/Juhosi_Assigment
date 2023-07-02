import axios from "axios";
import React, { useEffect, useState } from "react";

const Admin = () => {
  // const baseURL = "http://localhost:8080/admin";
  const baseURL = "https://juhosi-api.onrender.com/admin";
  const [q1, setq1] = useState(0);
  const [q2, setq2] = useState(0);
  const [w1, setw1] = useState(0);
  const [w2, setw2] = useState(0);
  const [c1, setc1] = useState(0);
  const [c2, setc2] = useState(0);
  const handleSubmit = () => {
    axios
      .get(baseURL)
      .then((res) => {
        // console.log("customerData",res.data)
        for (let ele of res.data.data) {
          if (ele.id === "customer1") {
            setq1((q1)=>q1 + +ele.quantity);
            setw1((w1)=>w1 + +ele.weight);
            setc1((c1)=>c1 + +ele.boxcount);
          } else {
            setq2((q2)=>q2 + +ele.quantity);
            setw2((w2)=>w2 + +ele.weight);
            setc2((c2)=>c2 + +ele.boxcount);
          }
        }
      })
      .catch((error) => {
        // alert("user not found")
        console.log(error);
      });
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return <div>
    <h2>Admin Page</h2>
    <div style={{display:"flex",justifyContent:"center",marginTop:"100px" }}>
    <table>
      <thead>
        <tr >
          <th style={{border:"1px solid",background:"rgb(6, 247, 247)"}}>item/Customer</th>
          <th style={{border:"1px solid",background:"rgb(175, 206, 206)"}}>Customer1</th>
          <th style={{border:"1px solid" ,background:"rgb(175, 206, 206)"}}>Customer2</th>
          <th style={{border:"1px solid" ,background:"rgb(175, 206, 206)"}}>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{border:"1px solid",background:"rgb(241, 241, 154)"}}>Quantity</td>
          <td style={{border:"1px solid",background:"rgb(200, 191, 200)"}}>{q1}</td>
          <td style={{border:"1px solid",background:"rgb(200, 191, 200)"}}>{q2}</td>
          <td style={{border:"1px solid",background:"rgb(200, 191, 200)"}}>{q1+q2}</td>
        </tr>
        <tr>
          <td style={{border:"1px solid",background:"rgb(241, 241, 154)"}}>Weight</td>
          <td style={{border:"1px solid",background:"rgb(6, 247, 247)"}}>{w1}</td>
          <td style={{border:"1px solid",background:"rgb(6, 247, 247)"}}>{w2}</td>
          <td style={{border:"1px solid",background:"rgb(6, 247, 247)"}}>{w1+w2}</td>
        </tr>
        <tr>
          <td style={{border:"1px solid",background:"rgb(241, 241, 154)"}}>Box Count</td>
          <td style={{border:"1px solid",background:"rgb(200, 191, 200)"}}>{c1}</td>
          <td style={{border:"1px solid",background:"rgb(200, 191, 200)"}}>{c2}</td>
          <td style={{border:"1px solid",background:"rgb(200, 191, 200)"}}>{c1+c2}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>;
};

export default Admin;
