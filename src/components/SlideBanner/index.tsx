import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { slideItems } from './img-consts.js';
import { SlideBannerContainer, SlideBAnnerImages, SlideBAnnerDescription } from './styles';

export default function SlideBanner() {

    return (
        <SlideBannerContainer>
            <Carousel>
                {slideItems.map(i => {
                    return (
                        <div>
                            <SlideBAnnerImages src={i.img} />
                            <SlideBAnnerDescription className="legend">{i.description}</SlideBAnnerDescription>
                        </div>
                    )
                })}
            </Carousel>
        </SlideBannerContainer>
    );
}