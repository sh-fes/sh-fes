import React, { Component } from 'react';
import Base from './PageBase';

class Products extends Component {
    render() {
        return (
            <Base pageTitle='Products'>
                <div className='products'>
                    <h1>Products</h1>
                </div>
            </Base>
        );
    }
}

export default Products;
