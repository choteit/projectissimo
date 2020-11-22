import React, { Component } from "react";
import './explanation-row.css';
import { ExplanationIconColumn } from "./explanation-icon-column/explanation-icon-column";

export class ExplanationRow extends Component {
    shareIdea = {
        title: "Share your idea",
        description: "Promote your idea and get feedback from the Projectoo community to better build your ideas. The more interesting your idea is, the more people will follow its development!",
        icon: ""
    }

    shapeProject = {
        title: "Shape your project",
        description: "Once you're confident enough about your idea, it's time to turn it into a structured project: develop its description, add a timeline, read some of our blog's articles and continue to attract more follower.",
        icon: ""
    }

    buildTeam = {
        title: "Build a team",
        description: "A jack of all trade is a master of none! You will need some skills to make your project come to life. Need a marketing expert or a web developer? Connect with the Projectoo community to find the right people for your project.",
        icon: ""
    }

    render() {
        return (
            <div className="my-5">
                <p className="center-text light-text title">{this.props.title}</p>
                    
                <div className="row d-flex w-75 justify-content-around mx-auto py-1">
                    <div className="py-sm-2 py-md-0 col-sm-12 col-md-4"><ExplanationIconColumn {...this.shareIdea} /></div>
                    <div className="py-sm-2 py-md-0 col-sm-12 col-md-4"><ExplanationIconColumn {...this.shapeProject} /></div>
                    <div className="py-sm-2 py-md-0 col-sm-12 col-md-4"><ExplanationIconColumn {...this.buildTeam} /></div>
                </div>
            </div>
        );
    }
}