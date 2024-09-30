import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import './Embeded.css';
import Footer from "./Footer";
function Embeded() {
  return (
    <>
    <div className="embed">
      <div className="container mt-5 ">
          <h1>Brown Bag</h1>
          <p>
            This Dashboard showcases different dataset. This features many UI capablities that Power BI provide.
          </p>
        <div className="tag-divider-about"></div>
        </div>
      <iframe
        title="Brown Bag"
        style={{ width: '90vw', height: '85vh' }}
        src="https://app.powerbi.com/view?r=eyJrIjoiY2Q1YTgyMGMtNDQ5Yy00ZWQ4LWE4YTItOTE5ZTUwMDVjOGJkIiwidCI6ImI2ZjViYjhlLWUzMDQtNGVmNS04YzhkLTFjYjVlZGFkOWNlMiJ9"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
    <Footer />
    </>
    
  );
}

export default Embeded;
