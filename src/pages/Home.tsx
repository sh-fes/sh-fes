import React, { Component } from 'react';
import Base from './PageBase';

class Home extends Component {
    render() {
        return (
            <Base pageTitle='Home'>
                <div className='home'>
                    <h1>Home</h1>
                </div>
            </Base>
        );
    }
}

export default Home;
