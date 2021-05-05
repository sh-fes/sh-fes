import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Base from './PageBase';

interface Props {}
interface States {}

class Reports extends Component<Props, States> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Reports</title>
                </Helmet>
                <Base>
                    <div className='reports'>
                        <h1>Reports</h1>
                    </div>
                </Base>
            </>
        );
    }
}

export default Reports;
