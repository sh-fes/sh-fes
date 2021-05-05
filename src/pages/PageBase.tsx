import { Component } from 'react';

interface Props {}
interface States {}

class Base extends Component<Props, States> {
    render() {
        return this.props.children;
    }
}

export default Base;
