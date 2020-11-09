import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Image from 'material-ui-image';
import mainImg from '../assets/projectoo_landing_page_main_img.png';

const jumbotronStyle = {
    paddingBottom: 150,
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
};

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        paddingTop: 100,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function JumboCard() {
    const classes = useStyles();
    return (
        <Grid container spacing={5} className={classes.root}>
            <Grid item xs={8}>
                <Typography variant="h2">Let your ideas come to life</Typography>
                <Typography variant="h5" color="textSecondary">
                    Projectoo is a collaborative platform where people's ideas become projects.
                    Share your idea with the community, make it better by receiving feedback and turn it into a
                    real
                    project.
                </Typography>
                <Divider/>
                <Button>Post your idea</Button>
                <Button>Brows projects</Button>
            </Grid>
            <Grid item xs={4}>
                <Image src={mainImg}/>
            </Grid>
        </Grid>
    )
}

