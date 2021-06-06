import React, { Component } from 'react';
import { CardA, CardB, CardC, IndexLayout } from '../Components';

interface Props {}
interface States {}

class IndexPage extends Component<Props, States> {
    render() {
        interface cardCItems {
            id: number;
        }
        const list: cardCItems[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        return (
            <>
                <IndexLayout title='Index Page'>
                    <div className='products'>
                        <h1>Products</h1>
                        <ul>
                            <li>asdasdasd</li>
                            <li>asdasdasd</li>
                            <li>asdasdasd</li>
                            <li>asdasdasd</li>
                            <li>asdasdasd</li>
                        </ul>
                        <CardA />
                        <CardB />
                        {list.map((value, key) => (
                            <CardC id={`CardC-${key}`} />
                        ))}
                    </div>
                </IndexLayout>
            </>
        );
    }
}

export default IndexPage;
