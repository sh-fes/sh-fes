import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { background } from '../../public';
import Style from './CardC.module.scss';

interface Props {
    id: string;
}
interface States {
    active: boolean;
}

class CardC extends Component<Props, States> {
    constructor(props: Props) {
        super(props);
        this.state = { active: false };
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({ active: !this.state.active });
    }
    render() {
        return (
            <>
                <article
                    className={[
                        Style.Card,
                        this.state.active ? Style.Card_Active : null,
                    ].join(' ')}
                    id={this.props.id}
                >
                    <div className={Style.Head}>
                        <div className={Style.Thumbnail}>
                            <img
                                className={Style.ThumbnailImage}
                                src={background}
                                alt='img'
                            />
                        </div>
                        <h4 className={Style.Title}>
                            <Link className={Style.TitleLink} to='/'>
                                【オンライン栄東祭】2021年10月に開催決定！
                                2度目の試みであるオンライン栄東祭、増強したスタッフとともに再挑戦を図れるか。
                            </Link>
                        </h4>
                    </div>
                    <div
                        className={Style.Body}
                        style={
                            this.state.active
                                ? {
                                      paddingBottom: document
                                          .getElementById(this.props.id)
                                          ?.getElementsByClassName(
                                              Style.Description,
                                          )[0]?.scrollHeight,
                                  }
                                : {}
                        }
                    >
                        <p className={Style.Description}>
                            　オンライン栄東祭を2021年10月に開催することが決定しました。
                            昨年度は推計約2000人が閲覧した栄東祭、今年は総勢70人のスタッフとともに制作されます。
                        </p>
                    </div>
                    <div className={Style.Foot}>
                        <Link className={Style.More} to='/'>
                            記事を見る
                        </Link>
                        <IconButton
                            className={Style.Pull}
                            aria-label='delete'
                            type='button'
                            onClick={this.update}
                        >
                            <svg
                                className={Style.Pull_SVG}
                                height={18}
                                width={18}
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    className={Style.Pull_SVG_Path}
                                    d='M12 7L19.7942 15.25H4.20577L12 7Z'
                                    fill='black'
                                />
                            </svg>
                        </IconButton>
                    </div>
                </article>
            </>
        );
    }
}

export default CardC;
