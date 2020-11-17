import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

    if(this.state.activeTab === 0) {
        return(
            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 
                'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover'}} >Project #1</CardTitle>
                <CardText>
                Da Burguer App
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://burgertracking.herokuapp.com/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/harzulu65/burger">
                        <Button colored>Github</Button>
                    </a>
                    <Button colored></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 
                'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover'}} >Project #2</CardTitle>
                <CardText>
                Budget Tracker
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://evening-harbor-66447.herokuapp.com/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/harzulu65/Budget">
                        <Button colored>Github</Button>
                    </a>
                    <Button colored></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 
                'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover'}} >Project #3</CardTitle>
                <CardText>
                Fusce id velit ut tortor pretium viverra suspendisse. 
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://workttracker.herokuapp.com/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/harzulu65/workout_tracker">
                        <Button colored>Github</Button>
                    </a>
                    <Button colored></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
            </div>
        )
    } else if(this.state.activeTab === 1) {
        return (
        <div><h1>This is MongoDB</h1></div>
        )
    } else if(this.state.activeTab === 2) {
        return (
        <div><h1>This is MySQL</h1></div>
        )
    } else if(this.state.activeTab === 3) {
        return (
        <div><h1>This is Sengrid</h1></div>
        )
    }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Projects</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>React</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    };
}

export default Projects;