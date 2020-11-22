import { Component } from "react";
import { Navbar } from "./nav-bar";

export class TopNav extends Component {
    render() {
        return (
            <div className="d-flex w-75 mx-auto justify-content-between py-3">
                <span><p className="d-inline" style={{fontSize: 30}}>Project</p><p style={{fontSize: 30, color: '#ff6624'}} className="d-inline">oo</p></span>

                <Navbar />
            </div>
        );
    }
}