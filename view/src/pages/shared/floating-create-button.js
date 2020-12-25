import React,{ Component } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export class FloatingCreateButton extends Component {

    render() {

        const fabStyle = {
            position: 'absolute',
            bottom: '15px',
            right: '15px'
        };

        return (
            <div>
                <Fab color="primary" style={fabStyle} variant={"extended"}>
                    <AddIcon/>
                    Create your project
                </Fab>
            </div>
        );
    }
}