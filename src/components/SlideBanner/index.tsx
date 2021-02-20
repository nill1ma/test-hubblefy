import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { slideItems } from './img-consts.js';
import { SlideBannerContainer, SlideBAnnerDescription, SlideBAnnerImages } from './styles';

export default function SlideBanner() {

    return (
        <SlideBannerContainer>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {slideItems.map(i =>  (
                        <div>
                            <SlideBAnnerImages src={i.img} />
                            <SlideBAnnerDescription className="legend">{i.description}</SlideBAnnerDescription>
                        </div>
                    )
                )}
            </Carousel>
        </SlideBannerContainer>
    );
}