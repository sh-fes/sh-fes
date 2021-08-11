import React, { Component } from 'react';
import RootStyle from '../../App.module.scss';

interface Props {}
interface States {}

class BackgroundImage extends Component<Props, States> {
    render() {
        return (
            <>
                <div className={RootStyle.BackgroundImage}>
                    <svg
                        className={RootStyle.SVG_TopLeft}
                        width='450'
                        height='512'
                        viewBox='0 0 450 512'
                        fill='none'
                    >
                        <circle cx='261' cy='0' r='189' fill='#77C1F8' fillOpacity='0.67' />
                        <circle cx='35' cy='135' r='236' fill='#F8FCFC' fillOpacity='0.58' />
                        <circle cx='89' cy='78' r='228' fill='#82FCD0' fillOpacity='0.72' />
                        <circle cx='-44' cy='367' r='145' fill='#FF9BE9' fillOpacity='0.5' />
                    </svg>
                    <svg
                        className={RootStyle.SVG_BottomLeft}
                        width='324'
                        height='475'
                        viewBox='0 0 324 475'
                        fill='none'
                    >
                        <circle cx='-36' cy='283' r='171' fill='#7AAEFD' fillOpacity='0.62' />
                        <circle cx='161' cy='162' r='162' fill='#ACFAF5' fillOpacity='0.42' />
                        <circle cx='140' cy='377' r='122' fill='#ACFAF5' fillOpacity='0.42' />
                    </svg>
                    <svg
                        className={RootStyle.SVG_TopRight}
                        width='168'
                        height='416'
                        viewBox='0 0 168 416'
                        fill='none'
                    >
                        <circle cx='168' cy='82' r='82' fill='#D8FE3E' fillOpacity='0.48' />
                        <circle cx='168' cy='248' r='168' fill='#F39E50' fillOpacity='0.48' />
                    </svg>
                    <svg
                        className={RootStyle.SVG_BottomRight}
                        width='446'
                        height='451'
                        viewBox='0 0 446 451'
                        fill='none'
                    >
                        <circle cx='446' cy='150' r='150' fill='#FAFE3E' fillOpacity='0.53' />
                        <circle cx='436' cy='391' r='195' fill='#FF6FB4' fillOpacity='0.76' />
                        <circle cx='258' cy='432' r='131' fill='#FEFFDD' fillOpacity='0.41' />
                        <circle cx='108' cy='451' r='108' fill='#FC6767' fillOpacity='0.61' />
                    </svg>
                    <svg
                        className={RootStyle.SVG_Center}
                        width='347'
                        height='1024'
                        viewBox='0 0 347 1024'
                        fill='none'
                    >
                        <circle cx='223' cy='600' r='124' fill='#D5FBF8' fillOpacity='0.33' />
                        <circle cx='145' cy='454' r='145' fill='#D5FBF8' fillOpacity='0.33' />
                    </svg>
                </div>
            </>
        );
    }
}

export default BackgroundImage;
