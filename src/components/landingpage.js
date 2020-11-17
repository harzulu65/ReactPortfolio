import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import profileImage from "./images/HZS_2013.JPG"


class Landing extends Component {
    render() {
        return(
            <div style={{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src={profileImage}
                            alt="avatar"
                            className="avatar-img"
                            />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS | Javascript | Express | React | Node JS | MongoDB</p>

                            <div className='social-links'>

                                {/* LinkedIn */}
                                <a href='http://linkedin.com' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-linkedin-square'  aria-hidden='true' />
                                </a>
                                {/* Github */}
                                <a href='http://github.com' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-github-square'  aria-hidden='true' />
                                </a>
                                {/* freecodecamp */}
                                <a href='http://google.com' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-free-code-camp'  aria-hidden='true' />
                                </a>
                                {/* Youtube */}
                                <a href='http://youtube.com' rel='noopener noreferrer' target='_blank'>
                                    <i className='fa fa-youtube-square'  aria-hidden='true' />
                                </a>                                                

                            </div>

                        </div>                                   
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Landing;