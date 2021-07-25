import React, { Component } from 'react';
import { TopLayout } from '../Components';

interface Props {}
interface States {}

class TopPage extends Component<Props, States> {
    render() {
        return (
            <>
                <TopLayout title='Top Page'>
                    <h1>Top Page</h1>
                </TopLayout>
            </>
        );
    }
}

export default TopPage;
