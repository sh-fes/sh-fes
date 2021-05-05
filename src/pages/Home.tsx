import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Store } from 'redux';
import { ArticleTemplates, Sample } from '../Components';
import Base from './PageBase';

interface Props {
    store: Store;
}

class Home extends Component<Props> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Base>
                    <Sample />
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
