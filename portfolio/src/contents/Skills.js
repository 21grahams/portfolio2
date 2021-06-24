import React, { useState } from "react";
import JS from "../img/JS.png";
import ReactLogo from "../img/React.png";
import ExpressLogo from "../img/express.png";
import HTMLLogo from "../img/HTML.png";
import AxiosLogo from "../img/Axios.png";
import WebpackLogo from "../img/Webpack.png";
import BabelLogo from "../img/Babel.png";
import jQueryLogo from "../img/jQuery.png";
import MySQLLogo from "../img/MySQL.png";
import MongoLogo from "../img/Mongo.png";
import PostgresLogo from "../img/Postgres.png";
import AWSLogo from "../img/AWS.png";

function Skills() {

  const [js, setJS] = useState(false);
  const [react, setReact] = useState(false);
  const [express, setExpress] = useState(false);
  const [html, setHTML] = useState(false);
  const [axios, setAxios] = useState(false);
  const [webpack, setWebpack] = useState(false);
  const [babel, setBabel] = useState(false);
  const [jQuery, setjQuery] = useState(false);
  const [mySQL, setMySQL] = useState(false);
  const [postgres, setPostgres] = useState(false);
  const [mongo, setMongo] = useState(false);
  const [AWS, setAWS] = useState(false);

  return (
    <div className="condiv skills">
      <h1 className="subtopic">My Skills</h1>

      <img className="skillLogos" src={JS} alt="JS" onMouseEnter={() => setJS(true)} onMouseLeave={() => setJS(false)}></img>
      {js && <span className='hoverText'>
        JAVASCRIPT
      </span>}

      <img className="skillLogos" src={ReactLogo} alt="ReactLogo" onMouseEnter={() => setReact(true)} onMouseLeave={() => setReact(false)}></img>
      {react && <span className='hoverText'>
        REACT
      </span>}

      <img className="skillLogos" src={ExpressLogo} alt="ExpressLogo" onMouseEnter={() => setExpress(true)} onMouseLeave={() => setExpress(false)}></img>
      {express && <span className='hoverText'>
        EXPRESS
      </span>}

      <img className="skillLogos" src={HTMLLogo} alt="HTMLLogo" onMouseEnter={() => setHTML(true)} onMouseLeave={() => setHTML(false)}></img>
      {html && <span className='hoverText'>
        HTML
      </span>}

      <img className="skillLogos" src={AxiosLogo} alt="AxiosLogo" onMouseEnter={() => setAxios(true)} onMouseLeave={() => setAxios(false)}></img>
      {axios && <span className='hoverText'>
        AXIOS
      </span>}

      <img className="skillLogos" src={WebpackLogo} alt="WebpackLogo" onMouseEnter={() => setWebpack(true)} onMouseLeave={() => setWebpack(false)}></img>
      {webpack && <span className='hoverText'>
        WEBPACK
      </span>}

      <img className="skillLogos" src={BabelLogo} alt="BabelLogo" onMouseEnter={() => setBabel(true)} onMouseLeave={() => setBabel(false)}></img>
      {babel && <span className='hoverText'>
        BABEL
      </span>}

      <img className="skillLogos" src={jQueryLogo} alt="jQuery" onMouseEnter={() => setjQuery(true)} onMouseLeave={() => setjQuery(false)}></img>
      {jQuery && <span className='hoverText'>
        jQUERY
      </span>}

      <img className="skillLogos" src={MySQLLogo} alt="MySQLLogo" onMouseEnter={() => setMySQL(true)} onMouseLeave={() => setMySQL(false)}></img>
      {mySQL && <span className='hoverText'>
        MYSQL
      </span>}

      <img className="skillLogos" src={MongoLogo} alt="Mongo" onMouseEnter={() => setMongo(true)} onMouseLeave={() => setMongo(false)}></img>
      {mongo && <span className='hoverText'>
        MONGO
      </span>}

      <img className="skillLogos" src={PostgresLogo} alt="Postgres" onMouseEnter={() => setPostgres(true)} onMouseLeave={() => setPostgres(false)}></img>
      {postgres && <span className='hoverText'>
        POSTGRES
      </span>}

      <img className="skillLogos" src={AWSLogo} alt="AWSLogo" onMouseEnter={() => setAWS(true)} onMouseLeave={() => setAWS(false)}></img>
      {AWS && <span className='hoverText'>
        AWS
      </span>}
    </div>

  );
}
export default Skills;
