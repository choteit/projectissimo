import { Button, TextField } from "@material-ui/core";
import { Component } from "react";

export class ContactUsRow extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column w-50 py-3">
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
        );
    }
}