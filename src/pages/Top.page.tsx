import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../App.module.scss';
import { Layout } from '../Components';
import { Image } from '../public';

interface ProfileProps {
    icon: string;
    title: string;
    description: string[];
}
const Profile = (props: ProfileProps) => {
    const { icon, title, description } = props;
    return (
        <div className={Style.ProfileContainer}>
            <div className={Style.Profile}>
                <img className={Style.Icon} src={icon} alt='Junko' />
                <div className={Style.ProfileName}>{title}</div>
            </div>
            <div className={Style.DescriptionContainer}>
                {description.map((value, key) => (
                    <p key={key} className={Style.Description}>
                        {value}
                    </p>
                ))}
            </div>
        </div>
    );
};

const TopRoute = () => {
    return (
        <Layout layout='top'>
            <h1>2021 sh-fes</h1>
            <Profile
                icon={Image.icon1}
                title='田中順子 校長'
                description={[
                    '　本校では、個性と応用力を育むという観点からアクティブ・ラーニング（AL）を導入しています。',
                    '　これは、課題研究やグループワーク、ディスカッション、プレゼンテーションなど、生徒の能動的な学習を取り込んだ授業の総称です。自ら課題を見つけ、それを解決していく能動的な学びを積極的に取り入れ、すべての授業を学習者中心の視点から展開していくことで、自立的な学習態度が身につくことができるとともに、学習内容の確かな定着が期待できます。',
                    '　通常授業（校内AL）では、校外学習（校外AL）への発展を意識して、相互に連動した授業を行います。さらに、教科・科目間の枠を越えた横断的授業を行い、幅と奥行きのある学習を「学問」へ昇華するよう追求しています。',
                ]}
            />
            <Profile
                icon={Image.icon2}
                title='松本 委員長'
                description={['しゅんすけ', 'しゅんすけ', 'しゅんすけ']}
            />
            <Button variant={'contained'} color={'secondary'} component={Link} to={'/admin'}>
                Admin UI
            </Button>
        </Layout>
    );
};
export default TopRoute;
