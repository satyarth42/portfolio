import React, { Component } from 'react';

import './stylesheets/Skills.css';

import c from './images/C.png';
import cpp from './images/Cpp.png';
import js from './images/JS.png';
import python from './images/python.png';
import html from './images/HTML.png';
import css from './images/css.png';
import node from './images/node.png';
import reactjs from './images/reactjs.png';
import reduxjs from './images/redux.png';
import jquery from './images/jquery.png';
import git from './images/git.png';
import mongo from './images/mongodb.png';
import mysql from './images/mysql.png';

class Skills extends Component {
  render() {
    return (
      <div className="container container-fluid main">
        <div className="row">
          <div className="writeup col-md-5 col-xs-10 col-sm-10 col-lg-5">
            <h1><b>My Skills</b></h1><br />
            <div className="description">
              <p>I am mainly a full stack web developer. Building small web applications using the MERN stack, i.e. MongoDB ExpressJS ReactJS and Node.</p>
              <p> I also build small side projects using Python.</p>
              <p> I have a keen interest in Competitive programming with Data Structures and Algorithms.</p>
              <p> I use C, C++, JavaScript and Python quite regularly and got quite a knack for programming.</p>
              <p> I also keep on exploring the exciting domains of Artificial Intelligence and Machine Learning.</p>
            </div>
          </div>
          <div className="logos col-md-7 col-xs-10 col-sm-10 col-lg-5">
            <div><img src={c} alt="c-logo" className="skill-logo" /></div>
            <div><img src={cpp} alt="cpp-logo" className="skill-logo" /></div>
            <div><img src={js} alt="js-logo" className="skill-logo" /></div>
            <div><img src={python} alt="python-logo" className="skill-logo" /></div>
            <div><img src={html} alt="html-logo" className="skill-logo" /></div>
            <div><img src={css} alt="css-logo" className="skill-logo" /></div>
            <div><img src={node} alt="node-logo" className="skill-logo" style={{width:"150px"}} /></div>
            <div><img src={reactjs} alt="react-logo" className="skill-logo" /></div>
            <div><img src={reduxjs} alt="redux-logo" className="skill-logo" /></div>
            <div><img src={jquery} alt="jquery-logo" className="skill-logo" /></div>
            <div><img src={git} alt="git-logo" className="skill-logo" /></div>
            <div><img src={mongo} alt="mongodb-logo" className="skill-logo" style={{width:"220px"}}/></div>
            <div><img src={mysql} alt="mysql-logo" className="skill-logo" /></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Skills;