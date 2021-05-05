import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Base from './PageBase';

class Reports extends Component {
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
