"use client"

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
const Banner = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )
    return (
        <div>
            <div className="w-full -mt-1 pb-5 collection">
                <Carousel
                    plugins={[plugin.current]}
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                    className="w-full" >
                    <CarouselContent>
                        <CarouselItem className=''>
                            <div className="">
                                <img src="img/18.png" alt="" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className=''>
                            <div className="">
                                <img src="img/18.png" alt="" />
                            </div>
                        </CarouselItem>
                        <CarouselItem className=''>
                            <div className="">
                                <img src="img/18.png" alt="" />
                            </div>
                        </CarouselItem>
                    </CarouselContent>

                </Carousel>
            </div>
        </div>
    )
}

export default Banner