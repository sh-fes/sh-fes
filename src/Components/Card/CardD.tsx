import IconButton from '@material-ui/core/IconButton';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { background } from '../../public';
import Style from './CardD.module.scss';

interface Props {
    title: string;
    description: string;
    onChange: () => void;
}
interface States {
    active: boolean;
}

class CardC extends Component<Props, States> {
    private root = React.createRef<HTMLElement>();
    private rh = (): number => {
        return this.root.current?.getBoundingClientRect().height ?? 0;
    };
    private heightEl = React.createRef<HTMLParagraphElement>();
    private height = 0;
    constructor(props: Props) {
        super(props);
        this.state = { active: false };
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({ active: !this.state.active });
        let h: number = this.rh();
        const a = setInterval(() => {
            const nh = this.rh();
            this.props.onChange();
            if (h === nh) clearInterval(a);
            h = nh;
        }, 50);
    }
    componentDidMount() {
        this.height = this.heightEl.current?.scrollHeight ?? 0;
    }
    render() {
        return (
            <>
                <article
                    className={Style.Card}
                    data-active={this.state.active}
                    ref={this.root}
                >
                    <div className={Style.HeadContainer}>
                        <div className={Style.Head}>
                            <img className={Style.Thumbnail} src={background} alt='img' />
                            <h4 className={Style.Title}>
                                <Link className={Style.TitleLink} to='/index'>
                                    {this.props.title}
                                </Link>
                            </h4>
                        </div>
                    </div>
                    <div
                        className={Style.Body}
                        style={{ height: this.state.active ? this.height : 0 }}
                    >
                        <p className={Style.Description} ref={this.heightEl}>
                            {this.props.description}
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
