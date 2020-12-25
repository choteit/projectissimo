import React, {Component} from 'react';
import {TopNav} from '../shared/top-nav';
import {FloatingCreateButton} from '../shared/floating-create-button';
import {CentralProjectRow }from './components/central-project-page-row';

export class ProjectsList extends Component {


    render() {
        const jumboBackground = {
            backgroundColor: '#F8F8F8'
        };

        return (
            <div style={jumboBackground}>
                <TopNav/>
                <FloatingCreateButton/>
                <CentralProjectRow/>
            </div>
        )
    }


}