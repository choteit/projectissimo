import React, { Component } from 'react';
//import axios from 'axios';
import { JumboCard } from './components/jumbotron/jumbotron';
import { LandingPageRow } from './components/landing-page-row/landing-page-row';
import communityImage from '../../assets/projectoo_connect_community.png';
import blogImage from '../../assets/projectoo_blog_advice.png';
import postIdeaImage from '../../assets/projectoo_landing_page_share_your_idea.png';
import './home.css';
import Divider from '@material-ui/core/Divider'
import { ExplanationRow } from './components/explanation-row/explanation-row';
import { Button, TextField } from '@material-ui/core';

export class Home extends Component {
    explanationRow = {
        title: "A community-based approach to creating projects."
    }

    communityRow = {
        title: "Meet the community, find some inspiration or give some precious feedback.",
        subtitle: "Have a look at all the ideas and projects posted by the Projectoo's community. Maybe you will find your next project or better, get some inspiration to share your own ideas.",
        buttonLabel: "Browse Projects",
        buttonAction: () => {
            console.log('Browse projects');
        },
        image: communityImage,
        imageLeftSide: true
    }

    postIdeaRow = {
        title: "Got your own ideas? Share them with the community!",
        subtitle: "You will get precious feedback to start developing your ideas and turn into a real project. Something that can become real if you connect with the right people with Projectoo's community.",
        buttonLabel: "Post your idea",
        buttonAction: () => {
            console.log('Post idea');
        },
        image: postIdeaImage,
        imageLeftSide: false
    }

    blogRow = {
        title: "We have a lot of advice for you.",
        subtitle: "Need help to design your idea?  Don't know what planning tool to use? Or you would like to improve your elevator pitch? Our blog has a database of article which will give your idea the edge it needs!",
        buttonLabel: "Visit our blog",
        buttonAction: () => {
            console.log('Visit the blog!');
        },
        image: blogImage,
        imageLeftSide: true
    }

    render() {
        return (
            <div>
                {/* <div>
                        <CssBaseline/>
                        <AppBar position="fixed" className={classes.appBar}>
                            <Toolbar>
                                <Typography variant="h6" noWrap>
                                    Projectoo
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div> */}
                <div>
                    <JumboCard />
                    <Divider />
                    <ExplanationRow {...this.explanationRow} />
                    <Divider />
                    <LandingPageRow {...this.communityRow} />
                    <Divider />
                    <LandingPageRow {...this.postIdeaRow} />
                    <Divider />
                    <LandingPageRow {...this.blogRow} />
                    <Divider />

                    <div className="d-flex justify-content-center">
                        <div className="d-flex flex-column w-75 py-3">
                            <p className="center-text light-text title">Any questions?</p>
                            <p className="center-text light-text">We would be more than happy to answer any questions you may have about Projectoo or on the best ways to buil your projects</p>

                            <TextField
                                label="Message"
                                multiline
                                rows={3}
                                variant="outlined"
                            />

                            <div className="d-flex py-3">
                                <TextField
                                    className="flex-fill"
                                    label="Email Address"
                                    variant="outlined"
                                />
                                <TextField
                                    className="mx-2 flex-fill"
                                    label="Name"
                                    variant="outlined"
                                />
                                <Button variant="contained" color="primary" className="flex-fill">
                                    Send
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}