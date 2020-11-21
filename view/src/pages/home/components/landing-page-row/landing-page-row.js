import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';
import './landing-page-row.css';

export class LandingPageRow extends Component {
    render() {
        return (
            <div className="row align-items-center mx-1 py-sm-3">
                <div className={`col-sm-7 ${this.props.imageLeftSide ? 'right-side' : ''}  h-100 flex-column d-flex justify-content-between`}>
                    <p className="center-text light-text title">{this.props.title}</p>
                    <p className="center-text light-text" >{this.props.subtitle}</p>

                    <div className="d-flex justify-content-around">
                        <div>
                            <Button onClick={this.props.buttonAction} variant="contained" color="secondary">{this.props.buttonLabel}</Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-5">
                    <Image src={this.props.image} />
                </div>
            </div>
        );
    }
}