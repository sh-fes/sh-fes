import React, { Component } from 'react';
import { CardC, IndexLayout } from '../Components';

interface Props {}
interface States {}

class IndexPage extends Component<Props, States> {
    render() {
        return (
            <>
                <IndexLayout title='Index Page'>
                    <CardC id={'otkrickey-1'} />
                </IndexLayout>
            </>
        );
    }
}

export default IndexPage;
