import { Divider } from "@material-ui/core";
import { Component } from "react";
import { Navbar } from "./nav-bar";

export class BottomNav extends Component {
    render() {
        return(
            <div className="d-flex justify-content-center py-3">
                    <div className=" d-flex flex-column align-items-center">
                        <Navbar />

                        <div className="w-50 py-3">
                            <Divider />
                        </div>
                        
                        <p>© Projectoo</p>
                    </div>
                </div>
        );
    }
}