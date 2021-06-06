import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import Style from './CardA.module.scss';

interface Props {}
interface States {
    active: boolean;
}

class CardA extends Component<Props, States> {
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
                <div
                    className={[
                        Style.Card,
                        this.state.active ? Style.Card_Active : null,
                    ].join(' ')}
                    // onClick={() => {
                    //     console.log('this is click');
                    // }}
                    // onMouseEnter={(e) => {
                    //     console.log((e.target as any).className , Style.Pull);
                    //     this.setState({ active: true });
                    // }}
                    // onMouseLeave={() => {
                    //     this.setState({ active: false });
                    // }}
                >
                    <div className={Style.Thumbnail}>
                        <img
                            className={Style.ThumbnailImage}
                            src='https://cdn.wallpaperhub.app/cloudcache/3/4/8/f/c/d/348fcd4929df4c3f60ea95239e476a7077adff23.jpg'
                            alt='img'
                        />
                    </div>
                    <div className={Style.Content}>
                        <div className={Style.Top}></div>
                        <div className={Style.Bottom}>
                            <div className={Style.Wrapper}></div>
                            <div className={Style.ContentBox}>
                                <div className={Style.Icon}></div>
                                <div className={Style.Title}>Title Here</div>
                                {/* <div
                                    className={Style.Pull}
                                    onClick={this.update}
                                >
                                    <div className={Style.PullButton}></div>
                                </div> */}

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
                                            fill='#C4C4C4'
                                        />
                                    </svg>
                                </IconButton>
                            </div>
                            <div className={Style.HiddenBox}>
                                <p className={Style.Description}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Perspiciatis nobis quo
                                    laudantium omnis enim? Provident, odit
                                    dolores! Quod, harum, tenetur id, officiis
                                    corrupti dolore ratione exercitationem ea
                                    aspernatur nihil voluptatem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CardA;
