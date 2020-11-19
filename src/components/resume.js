import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img
                                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                                alt='avatar'
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Harold Zuluaga</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <p>Goal Oriented, Aerospace and Program Management experienced and resourceful individual</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1 Hacker Way, Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(310) 435 2870</p>
                        <h5>Email</h5>
                        <p>haroldzuluaga@aol.com</p>
                        <h5>Web</h5>
                        <p>myWebSite.com</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                        <h2>Education</h2>

                        <Education 
                            startYear={2020}
                            endYear={2020}
                            schoolName="University of California - Irvine"
                            schoolDescription="Full Stack Web Development Certificate. A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express, Handelbars.js & ReactJS. "
                            /> 

                        <Education 
                            startYear={1989}
                            endYear={1994}
                            schoolName="Central University - Bogota - Colombia - South America"
                            schoolDescription="Computer Science Engineering"
                            /> 
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Experience</h2>

                        <Experience 
                            startYear={2008}
                            endYear={2020}
                            jobName="Safran Aerospace"
                            jobDescription="Business/Systems Analyst - Operations Planner - Program Administrator - Program Manager"
                            accomplishments="First Business Analyst with Computer Science Background, this changed the company to recruit most of today's BAs with the same background (Work on ERP/MRP). 
                                            High output on Operations Planning with extensive work in capacity planing, Sales and Operations Planning, 
                                            Improvement Projects and Customer Support to Boeing and Airbus and Airline customers throughout the world "

                        />

                        <Experience 
                            startYear={2001}
                            endYear={2008}
                            jobName="ECC"
                            jobDescription="Medical/Technical/Admin "
                            accomplishments="Extensive travel to more than 20 states in US with a high performance in Client's satisfaction and support as well as high output in results for ECC"

                        />

                        <Experience 
                            startYear={1994}
                            endYear={1999}
                            jobName="Datascan  -  Cibergenius"
                            jobDescription="Technical Support Engineer - Computers- Software - Warehouse Wireless Networks - Barcode Technology"
                            accomplishments="Extensive traveling to most important clients in retail industry in Colombia with very high customer satisfaction "
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <p>HTMLCSS</p>
                        <p>JavaScript</p>
                        <p>Node JS</p>    
                        <p>React</p>
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Resume;
