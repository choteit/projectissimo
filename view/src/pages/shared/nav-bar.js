import { Component } from "react";

export class Navbar extends Component {
    render() {
        return (
            <div className="my-auto">
                <p className="d-inline font-weight-lighter">Projects</p>
                <p className="d-inline text-muted mx-4">|</p>
                <p className="d-inline font-weight-lighter">Blog</p>
                <p className="d-inline text-muted mx-4">|</p>
                <p className="d-inline font-weight-lighter">Concept</p>
                <p className="d-inline text-muted mx-4">|</p>
                <p className="d-inline font-weight-lighter">Contact</p>
            </div>
        );
    }
}