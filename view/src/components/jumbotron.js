import React from "react";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import Image from 'material-ui-image';
import mainImg from '../assets/projectoo-landing.svg';
import './jumbotron.css';

export default function JumboCard() {
    return (
        <div className="row align-items-center mx-1">
            <div className="col-6 flex-column">
                <Typography className="my-3 center-text title" variant="h4">Let your ideas come to life</Typography>
                <Typography className="center-text light-text" variant="subtitle1" color="textSecondary">
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
            <div className="col-6">
                <Image src={mainImg} />
            </div>
        </div>
    )
}

