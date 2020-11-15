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
                <div className="row">
                    <div className="col">
                        <p className="center-text light-text title">{this.props.title}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-around mx-1 py-1">
                    <div className="col"><ExplanationIconColumn {...this.shareIdea} /></div>
                    <div className="col"><ExplanationIconColumn {...this.shapeProject} /></div>
                    <div className="col"><ExplanationIconColumn {...this.buildTeam} /></div>
                </div>
            </div>
        );
    }
}