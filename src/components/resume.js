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
                        <p>Ut lectus arcu bibendum at varius vel. Netus et malesuada fames ac turpis egestas. Condimentum mattis pellentesque id nibh. </p>
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
                            startYear={2012}
                            endYear={2016}
                            schoolName="My University"
                            schoolDescription="A erat nam at lectus urna duis convallis convallis. Augue neque gravida in fermentum et sollicitudin ac orci. Vulputate mi sit amet mauris. Fringilla est ullamcorper eget nulla facilisi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium."
                            /> 

                        <Education 
                            startYear={2012}
                            endYear={2016}
                            schoolName="My University"
                            schoolDescription="A erat nam at lectus urna duis convallis convallis. Augue neque gravida in fermentum et sollicitudin ac orci. Vulputate mi sit amet mauris. Fringilla est ullamcorper eget nulla facilisi. Eu feugiat pretium nibh ipsum consequat nisl vel pretium."
                            /> 
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Experience</h2>

                        <Experience 
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. In tellus integer feugiat scelerisque varius morbi. Eget mi proin sed libero enim sed faucibus turpis in. Dignissim sodales ut eu sem integer vitae justo eget."

                        />

                        <Experience 
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. In tellus integer feugiat scelerisque varius morbi. Eget mi proin sed libero enim sed faucibus turpis in. Dignissim sodales ut eu sem integer vitae justo eget."

                        />

                        <Experience 
                            startYear={2009}
                            endYear={2012}
                            jobName="First Job"
                            jobDescription="Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. In tellus integer feugiat scelerisque varius morbi. Eget mi proin sed libero enim sed faucibus turpis in. Dignissim sodales ut eu sem integer vitae justo eget."

                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skills</h2>

                        <Skills 
                            skill='HTMLCSS'
                            progress={100}
                        />
                        <Skills 
                            skill='JavaScript'
                            progress={60}
                        />
                        <Skills 
                            skill='Node JS'
                            progress={50}
                        />
                        <Skills 
                            skill='React'
                            progress={25}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Resume;
