"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
const heroImages=[
    {imgurl: '/assets/images/hero-1.svg', alt:'smartwatch'},
    {imgurl: '/assets/images/hero-2.svg', alt:'bag'},
    {imgurl: '/assets/images/hero-3.svg', alt:'lamp'},
    {imgurl: '/assets/images/hero-4.svg', alt:'air fryer'},
    {imgurl: '/assets/images/hero-5.svg', alt:'chair'}
]
const HeroCarousel = () => {
  return (
    <div className="hero-carousel">
        <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
        >
            {heroImages.map((image)=>(
                <Image
                  src={image.imgurl}
                  alt={image.alt}
                  height={484}
                  width={484}
                  className="object-contain"
                  key={image.alt}
                />
            ))}
        </Carousel>   
        <Image
           src="assets/icons/hand-drawn-arrow.svg"
           alt="arrow"
           height={175}
           width={175}
           className="max-xl:hidden absolute -left-[15%] bottom-0 z-0" 
        />     
    </div>
  )
}

export default HeroCarousel