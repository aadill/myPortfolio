import React from "react";
import "./about.css";
import { MdOutlineWork } from "react-icons/md";
import Footer from "./Footer.jsx";

const About = () => {
  return (
    <>
      <div className=" abouts">
        <div className="container mt-5 ">
          <h1>About</h1>
          <p>
            This is the About page. Here you can find more information about our
            website and services.
          </p>
        <div className="tag-divider-about"></div>
        </div>
        <h5 className="exp">Work Experience</h5>
        <h1 className="exp">Business Intelligence Analyst with 3+ years of experience in the industry</h1>
        <div className="container">
          <div className="card-about">
            <h2>Guidehouse</h2>
            <i className="fas fa-arrow-right"></i>
            <p>BI Developer.</p>
            <div className="pic">
              <p className="brief">
                Developed BI reports and dashboards using Power BI and Tableau.
                Optimized data retrieval with M-query and Power Query. Created
                data models for efficient integration and analysis. Engaged
                stakeholders, conducted meetings, and resolved data warehousing
                challenges.
              </p>
            </div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            {/* <div className="social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-github"></i>
            </div> */}
            <button></button>
          </div>
          <div className="card-about card2">
            <h2>Luminar Technolab</h2>
            <i className="fas fa-arrow-right"></i>
            <p>Data Science Intern.</p>
            <div className="pic">
              <p className="brief">
                Applied advanced analytics and statistical models to improve
                business outcomes, boosting marketing ROI by 25% and sales by
                50%. Leveraged Big Data tools (Hadoop, Spark, Hive) and ML
                algorithms to optimize marketing strategies, increasing customer
                acquisition by 20% and reducing churn by 45%.
              </p>
            </div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            {/* <div className="social">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-github"></i>
            </div> */}
            <button></button>
          </div>
        </div>
        <div className="container mt-5 ">
        <div className="tag-divider-about"></div>
        </div>
        <h5 className="exp">Contact Me</h5>
        <h1 className="exp">Get in contact and let's work together</h1>
      </div> 
      <Footer />
    </>
  );
};

export default About;
