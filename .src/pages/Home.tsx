import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import CircleNav from '../components/CircleNav/CircleNav';
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
                        <CircleNav />
                    </div>
                </Base>
            </>
        );
    }
}

export default Home;
