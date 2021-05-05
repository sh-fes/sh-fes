import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Base from './PageBase';

class Products extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Products</title>
                </Helmet>
                <Base>
                    <div className='products'>
                        <h1>Products</h1>
                    </div>
                </Base>
            </>
        );
    }
}

export default Products;
