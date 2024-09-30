import React from "react";
import "./Embeded.css";
import Footer from "./Footer";

function Customer() {
  return (
    <>
    <div className="embed">
      <div className="container mt-5 ">
        <h1>Customer Retention</h1>
        <p>
        Customer Retention showcases customer churn rate and the reasons of the customer declining.
              It carefully analyses and identifies the key factors dependent on the customer churn rate.
              Organisation can utilise these to maintain the customer and determine the factors.
        </p>
        <div className="tag-divider-about"></div>
      </div>
      <iframe
        title="Customer Retentions"
        style={{ width: '90vw', height: '85vh' }}
        src="https://app.powerbi.com/view?r=eyJrIjoiMzU3ZmY3YmItNmUyNC00OGJlLTliN2UtZjg3ZWVlMTc2ZTM1IiwidCI6ImI2ZjViYjhlLWUzMDQtNGVmNS04YzhkLTFjYjVlZGFkOWNlMiJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
    <Footer />
    
    </>
    
  );
}

export default Customer;
