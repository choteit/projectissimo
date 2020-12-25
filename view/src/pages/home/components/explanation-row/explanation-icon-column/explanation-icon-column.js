import { Component } from "react";
import './explanation-icon-column.css'

export class ExplanationIconColumn extends Component {
    render() {
        return (
            <div className="d-flex">
                <div className="mx-4">
                    icon
                </div>
                <div className="d-flex flex-column">
                    <div className="exp-title">{this.props.title}</div>
                    <div className="exp-description">{this.props.description}</div>
                </div>
            </div>
        );
    }
}