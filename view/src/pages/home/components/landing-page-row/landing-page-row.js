import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Image from 'material-ui-image';

export class LandingPageRow extends Component {
    render() {
        const titleStyle = {
            fontWeight: 'lighter',
            fontSize: '24px'
        };

        const subtitleStyle = {
            fontWeight: 'lighter',
            fontSize: '14px'
        };

        const imageOrder = {
            order: this.props.imageLeftSide ? 1 : 0
        };

        return (
            <div className="d-flex w-75 mx-auto py-sm-0 justify-content-center align-items-center">
                <div style={imageOrder} className="flex-column d-flex">
                    <p style={titleStyle}>{this.props.title}</p>
                    <p style={subtitleStyle}>{this.props.subtitle}</p>

                    <div className="mx-auto">
                        <Button onClick={this.props.buttonAction} variant="contained" color="secondary">{this.props.buttonLabel}</Button>
                    </div>
                </div>
                <div className="w-75 px-2">
                    <Image src={this.props.image} />
                </div>
            </div>
        );
    }
}