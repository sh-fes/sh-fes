import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ArticleTemplates } from '../Components/Templates';
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
                    <ArticleTemplates />
                </Base>
            </>
        );
    }
}

export default Home;
