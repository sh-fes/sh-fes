import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                                src='https://cdn.wallpaperhub.app/cloudcache/3/4/8/f/c/d/348fcd4929df4c3f60ea95239e476a7077adff23.jpg'
                                alt='img'
                            />
                        </div>
                        <h4 className={Style.Title}>
                            <Link className={Style.TitleLink} to='/'>
                                土曜になると駅に出没・・・女子大学生"盗撮"の男逮捕(13/12/09)
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
                            駅のホームで女子大学生のスカートの中を盗撮したとして、36歳の男が逮捕されました。男は、「盗撮しやすい土曜日を狙った」と話しています。　派遣社員の東海林英明容疑者は7日、東京の東急大井町線九品仏駅のホームで、21歳の女子大学生のスカートの中をデジタルカメラで盗撮した疑いです。
                            駅のホームで女子大学生のスカートの中を盗撮したとして、36歳の男が逮捕されました。男は、「盗撮しやすい土曜日を狙った」と話しています。　派遣社員の東海林英明容疑者は7日、東京の東急大井町線九品仏駅のホームで、21歳の女子大学生のスカートの中をデジタルカメラで盗撮した疑いです。
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
