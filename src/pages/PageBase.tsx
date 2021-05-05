import { Component } from 'react';

class Base extends Component {
    render() {
        return this.props.children;
    }
}

export default Base;
