import React, { Component } from 'react';
import {Grid,Cell} from 'react-mdl';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width:'100%', margin: 'auto'  }}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png" alt="avatar" className="avatar-img" />
          <div className="banner-text">
            <h1 >Full Stack Web Developer</h1>
            <hr/>
            <p>HTML/CSS | Bootstrap | javascript | jquery | php | java | c#</p>
            <div className="social-links">
            {/* Linkedin */}
              <a href="#" target="_blank" rel="noopenner noreferrer">
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              </a>
             {/* Github */}
             <a href="#" target="_blank" rel="noopenner noreferrer">
              <i className="fab fa-github-square" aria-hidden="true"></i>
              </a>
                {/* Freecodecamp */}
             <a href="#" target="_blank" rel="noopenner noreferrer">
              <i className="fab fa-free-code-camp" aria-hidden="true"></i>
              </a>
               {/* youtube */}
             <a href="#" target="_blank" rel="noopenner noreferrer">
              <i className="fab fa-youtube-square" aria-hidden="true"></i>
              </a>
              {/*  */}
             <a href="#" target="_blank" rel="noopenner noreferrer">
              <i className="fab fa-gitlab" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
