import { useRef } from "react";
import moon from "../assets/moon.png";
import land from "../assets/land.png";
import cat from "../assets/code.webp";
import RadarChart from "./SkillChar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { GiSkills } from "react-icons/gi";
import "./parallax.css";
// import ToolSection from "./toolsSection.jsx";
import SQLMI from "../assets/sqlmi.png";
import SQLSERVER from "../assets/sqlserver.png";
import PBI from "../assets/pbi.png";
import TAB from "../assets/tableau.png";
import ADF from "../assets/adf.png";
import REACT from "../assets/react.png";
import D3 from "../assets/D3.png";
import R from "../assets/R.png";
import Py from "../assets/py.png";
import JS from "../assets/js.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import CPLUS from "../assets/c++.png";
import SQL from "../assets/sql.png";
import { FaLaptopCode } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import tool from '../assets/tool.png';
import code from '../assets/code.png';
import fm from '../assets/fm.png';
import Down from "../assets/down.png";
import DownLight from "../assets/downLight.png";
import { useTheme } from "./ThemeContext";

const Parallaxs = () => {
  const { theme, toggleTheme } = useTheme();

  const ref = useRef();

  return (
    <div className="main_parl">
      <div id="skills" className="skills">
        <div className="header-skills">
          <p className="skill-icon">
            <GiSkills />
          </p>
          <h2>Skills</h2>
        </div>
        <div className="subTitle">
          <p>
            <span className="special">Data Analyst </span>with experience
            including SQL, Python, Tableau, and Power BI. I am proficient in
            handling large datasets, optimizing queries, and creating complex
            visualizations.
          </p>
        </div>
        <div className="row container-skill">
          <div className="col-md-6 chart">
            <RadarChart />
          </div>
          <div className="col-md-6 tool">
            <Parallax pages={3} ref={ref} style={{ width: "40%" }}>
              <ParallaxLayer ffset={0} speed={1} factor={2} style={{}}>
                <img src={cat} className="parl-1" />
              </ParallaxLayer>
              <ParallaxLayer offset={1.5} speed={1} style={{}}>
              <div className="arrow">
          <a
            href=""
            data-w-id="9ff6471d-fd0c-c06e-8814-c47d4b5b7c34"
            className="link-block-9 w-inline-block float"
          >
            <img
              src={theme == "dark" ? DownLight : Down}
              loading="eager"
              width="47"
              className="image-76"
            />
          </a>
        </div>
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={1} style={{}}>
                <div className="row">
                 
                  <div className="col float">
                    <img src={SQLMI} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={SQLSERVER} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={PBI} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={TAB} className="tool-icons" />
                  </div>
                </div>
                <br />
                <br />
                <div className="row">
                  <div className="col float">
                    <img src={ADF} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={REACT} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={D3} className="tool-icons" />
                  </div>
                  <div className="col float"></div>
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                sticky={{ start: 0.9, end: 1.8 }}
                style={{ textAlign: "center" }}
              >
                <div className="skill-card">
                   <p className="tool-head">
                    <img src={tool} className="pg-icon">
                    </img>
                    <h1>
                    Tools / Frameworks
                    </h1>
                  </p>
                  <p>
                    I specialize in handling large datasets, optimizing queries,
                    and creating complex visualizations.
                  </p>
                </div>
              </ParallaxLayer>

              <ParallaxLayer
                offset={0.2}
                speed={0.05}
                onClick={() => ref.current.scrollTo(3)}
              >
                <h2>SKILLS AND EXPERTICE</h2>
                <h6><strong>Scroll down for more</strong></h6>
              </ParallaxLayer>

              <ParallaxLayer
                sticky={{ start: 2.2, end: 2.8}}
                style={{ textAlign: "center" }}
              >
                <div className="skill-card">
                <p className="tool-head">
                    <img src={code} className="pg-icon">
                    </img>
                    <h1>
                        Programming / Database
                    </h1>
                  </p>
                  <br />
                  <p>
                    I specialize in handling large datasets, optimizing queries,
                    and creating complex visualizations.
                  </p>
                </div>
              </ParallaxLayer>
              <ParallaxLayer
                offset={2.6}
                speed={1}
                onClick={() => ref.current.scrollTo(0)}
              >
                <div className="row">
                  <div className="col float">
                    <img src={R} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={Py} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={JS} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={HTML} className="tool-icons" />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col float">
                    <img src={CSS} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={CPLUS} className="tool-icons" />
                  </div>
                  <div className="col float">
                    <img src={SQL} className="tool-icons" />
                  </div>
                  <div className="col float"></div>
                </div>
              </ParallaxLayer>
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parallaxs;
