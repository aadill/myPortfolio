import React from "react";
import "./Embeded.css";
import Footer from "./Footer";

function Diversity() {
  return (
    <>
    <div className="embed">
      <div className="container mt-5 ">
        <h1>Diversity & Inclusion</h1>
        <p>
          Detailed employee information, It helps leaders understand the current
          state of their workforce in terms of diversity across various
          demographics, identify gaps, and measure the effectiveness of
          inclusion initiatives.
        </p>
        <div className="tag-divider-about"></div>
      </div>
      <iframe
        title="Diversity & Inclusion"
        style={{ width: '90vw', height: '85vh' }}
        src="https://app.powerbi.com/view?r=eyJrIjoiYWQyYWE5Y2EtMGQyYy00ZGUxLTlkN2QtZDUyMTA3ZmI2ZDU0IiwidCI6ImI2ZjViYjhlLWUzMDQtNGVmNS04YzhkLTFjYjVlZGFkOWNlMiJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
    <Footer />

    </>
    
  );
}

export default Diversity;
