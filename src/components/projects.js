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
                'url(https://techterms.com/img/lg/mvc_1321.png) center / cover'}} >Project #1</CardTitle>
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
                'url(https://academind.com/static/ce88bcec6e005816de6f3a9a7a3c43df/2f037/localstorage-vs-cookies-xss.jpg) center / cover'}} >Project #2</CardTitle>
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
                'url(https://www.howtogeek.com/thumbcache/2/200/bb80cfad41564ba4128a4e0e46384d60/wp-content/uploads/2018/03/img_5aaafd37cfeb9.jpg) center / cover'}} >Project #3</CardTitle>
                <CardText>
                Coding BootCamp Project #2 
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://e-power.herokuapp.com/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/AmirAshkan7091/project-one">
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
            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 
                'url(https://d1p8pldpmo4u0v.cloudfront.net/wp-content/uploads/2019/04/mongodbAtlas.jpg) center / cover'}} >Project #1</CardTitle>
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
                'url(https://d1p8pldpmo4u0v.cloudfront.net/wp-content/uploads/2019/04/mongodbAtlas.jpg) center / cover'}} >Project #2</CardTitle>
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
                'url(https://d1p8pldpmo4u0v.cloudfront.net/wp-content/uploads/2019/04/mongodbAtlas.jpg) center / cover'}} >Project #3</CardTitle>
                <CardText>
                Fusce id velit ut tortor pretium viverra suspendisse. 
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://amirashkan7091.github.io/project-one/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/AmirAshkan7091/project-one">
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
    } else if(this.state.activeTab === 2) {
        return (
            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 
                'url(https://www.datasunrise.com/wp-content/uploads/2018/06/Active-Directory-Authentication-for-MySQL-Database-min.jpg) center / cover'}} >Project #1</CardTitle>
                <CardText>
                Da Burguer App
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://e-power.herokuapp.com/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/Aminbouzouita/Project_2">
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
                'url(https://www.datasunrise.com/wp-content/uploads/2018/06/Active-Directory-Authentication-for-MySQL-Database-min.jpg) center / cover'}} >Project #2</CardTitle>
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
                'url(https://www.datasunrise.com/wp-content/uploads/2018/06/Active-Directory-Authentication-for-MySQL-Database-min.jpg) center / cover'}} >Project #3</CardTitle>
                <CardText>
                Fusce id velit ut tortor pretium viverra suspendisse. 
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://amirashkan7091.github.io/project-one/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/AmirAshkan7091/project-one">
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
    } else if(this.state.activeTab === 3) {
        return (
            <div className='projects-grid'>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color:'#fff', height: '176px', background: 
                'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover'}} >Project #1</CardTitle>
                <CardText>
                Da Burguer App
                </CardText>
                <CardActions border>
                    <a target='_blank' href="https://radiant-beach-31299.herokuapp.com/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/harzulu65/ReactPortfolio">
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
                    <a target='_blank' href="https://amirashkan7091.github.io/project-one/">
                        <Button colored>Heroku</Button>
                    </a>
                    <a target='_blank' href="https://github.com/AmirAshkan7091/project-one">
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