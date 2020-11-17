import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import profileImage from "./images/HZS_2013.JPG"



class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Harold Zuluaga</h2>
                        <img
                            src={profileImage}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin:'auto', paddingTop: '1em'}}>Full Stack Developer with Aerospace Management and Operations Experience
                        I am an experienced individual who strives on doing a thorough work every day, I value each and everyday at the office and always have in mind to go towards improvement in all areas not only for my personal growth but the company and for all my work peers.
                        I always put the company I work for first and I treat it as if it was my own, I realized that if we think on increasing the bottom line of the company it will be beneficial for all employees.
                        I love analyzing and solving problems and through my career I found that there is always a good solution for any problem and we need to thrive to solve them in a timely manner and with the best of attitude towards the problem but mainly towards the company's environment, dealing with people is not an easy task but we need to be very professional no matter how complicated things may look. .</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className='contact-list'>
                            <List>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                        (310) 435-2870
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-fax' aria-hidden='true' />
                                        (310) 435-2870
                                    </ListItemContent>
                                </ListItem>
                            
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-envelope' aria-hidden='true' />
                                        haroldzuluaga@aol.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                        <i className='fa fa-skype' aria-hidden='true' />
                                        my skype id
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    };
}

export default Contact;