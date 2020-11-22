import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import Image from 'material-ui-image';
import mainImg from '../../../../assets/projectoo_landing_page_main_img.png';
import './jumbotron.css';
import { TopNav } from "../../../shared/top-nav";

export class JumboCard extends Component {
    render() {
        const titleStyle = {
            fontSize: '40px',
            textAlign: 'center'
        };

        const subtitleStyle = {
            fontSize: '20px',
            textAlign: 'center',
            fontWeight: 'lighter'
        };

        return (
            <div>
                <TopNav />

                <div className="row w-75 mx-auto align-items-center pb-4">
                    <div className="col-7 flex-column">
                        <Typography style={titleStyle} className="my-3" variant="h4">Let your ideas come to life</Typography>
                        <Typography style={subtitleStyle} variant="subtitle1" color="textSecondary">
                            Projectoo is a collaborative platform where people's ideas become projects.
                            Share your idea with the community, make it better by receiving feedback and turn it into a
                            real project.
                    </Typography>
                        <Divider className="my-4" />
                        <div className="d-flex justify-content-around">
                            <div>
                                <Button variant="contained" color="primary">Post your idea</Button>
                            </div>
                            <div>
                                <Button variant="contained" color="secondary">Browse projects</Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 transparent">
                        <Image src={mainImg} />
                    </div>
                </div>
            </div>
        )
    }
}

