import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Base from './PageBase';

class Home extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Base pageTitle='Home'>
                    <div className='home'>
                        <h1>Home</h1>
                    </div>
                </Base>
            </>
        );
    }
}

export default Home;
