import React, {Component} from "react";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

export class CentralProjectRow extends Component {
    render() {
        const titleStyle = {
            fontSize: '40px',
            textAlign: 'center'
        };
        const subtitleStyle = {
            fontSize: '20px',
            textAlign: 'center',
            fontWeight: 'lighter'
        };

        return (
            <div className="row w-75 mx-auto align-items-center justify-content-center pb-4">
                <div className="col-12 flex-column">
                    <Typography style={titleStyle} variant="h4" className="mt-5">Browse Project</Typography>
                </div>
                <Divider className="col-4 my-2"/>
                <div className="col-12">
                    <Typography style={subtitleStyle} variant="subtitle1" color="textSecondary">Have a look at the community's projects,
                        connect and give some feedback</Typography>
                </div>
            </div>
        )
    }
}