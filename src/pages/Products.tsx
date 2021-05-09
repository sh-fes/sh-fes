import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Base from './PageBase';

interface Props {}
interface States {}

class Products extends Component<Props, States> {
    render() {
        return (
            <>
                <Helmet>
                    <title>Products</title>
                </Helmet>
                <Base>
                    <div className='products'>
                        <h1>Products</h1>
                        <div style={{ height: '200vh' }}></div>
                    </div>
                </Base>
            </>
        );
    }
}

export default Products;
