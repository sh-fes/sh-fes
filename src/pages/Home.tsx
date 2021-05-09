import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ArticleTemplates } from '../Components';
import Base from './PageBase';

interface Props {}
interface States {}

class Home extends Component<Props, States> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <Base>
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
