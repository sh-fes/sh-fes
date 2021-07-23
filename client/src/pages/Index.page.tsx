import React, { Component } from 'react';
import { CardList, IndexLayout } from '../Components';
interface Props {}
interface States {}
interface CardData {
    title: string;
    description: string;
}

class IndexPage extends Component<Props, States> {
    private CardsData: CardData[] = [
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
        {
            title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
            description:
                '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
        },
    ];
    render() {
        return (
            <>
                <IndexLayout title='Index Page'>
                    <CardList
                        title='otkrickey'
                        id={'otkrickey-list'}
                        gutter={12}
                        cardsData={this.CardsData}
                    />
                    <CardList
                        title='おすすめの記事'
                        id={'recommended'}
                        gutter={12}
                        cardsData={[
                            {
                                title: '【オンライン栄東祭】2021年10月に開催決定！2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。',
                                description:
                                    '　オンライン栄東祭を2021年10月に開催することが決定しました。昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。',
                            },
                        ]}
                    />
                </IndexLayout>
            </>
        );
    }
}

export default IndexPage;
