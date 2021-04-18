import { Component } from 'react';

interface Props {
    pageTitle: string;
}
interface States {}
class Base extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        document.title = this.props.pageTitle;
    }
    render() {
        return this.props.children;
    }
}

export default Base;
