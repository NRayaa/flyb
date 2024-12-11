import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
const Collection = () => {
    return (
        <div>
            <div className="collection pt-10">

                <div className="card-shortcut">
                    <Carousel className="w-full">
                        <CarouselContent>
                            <CarouselItem className='md:basis-1/2 xl:basis-1/3'>
                                <div className="">
                                    <img src="img/7.png" alt="" />
                                </div>
                            </CarouselItem>
                            <CarouselItem className='md:basis-1/2 xl:basis-1/3'>
                                <div className="">
                                    <img src="img/8.png" alt="" />
                                </div>
                            </CarouselItem>
                            <CarouselItem className='md:basis-1/2 xl:basis-1/3'>
                                <div className="">
                                    <img src="img/9.png" alt="" />
                                </div>
                            </CarouselItem>
                            <CarouselItem className='md:basis-1/2 xl:basis-1/3'>
                                <div className="">
                                    <img src="img/10.png" alt="" />
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>

                <div className="px-10 pt-10">
                    <div className="category rounded-[5rem] py-3 relative overflow-hidden">
                        {/* Set z-index lebih tinggi pada categorytitle */}
                        <div className="w-full flex justify-center relative text-[2.5rem] font-[500] titlecategory z-20">
                            <h2>Category</h2>
                        </div>

                        {/* Set z-index lebih tinggi pada card-category */}
                        <div className="card-category px-10 py-5 z-20 relative">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    <CarouselItem className='xl:basis-1/5 md:basis-1/3'>
                                        <div className="">
                                            <img src="img/12.png" alt="" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className='xl:basis-1/5 md:basis-1/3'>
                                        <div className="">
                                            <img src="img/13.png" alt="" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className='xl:basis-1/5 md:basis-1/3'>
                                        <div className="">
                                            <img src="img/14.png" alt="" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className='xl:basis-1/5 md:basis-1/3'>
                                        <div className="">
                                            <img src="img/15.png" alt="" />
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem className='xl:basis-1/5 md:basis-1/3'>
                                        <div className="">
                                            <img src="img/16.png" alt="" />
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                            </Carousel>
                        </div>

                        {/* Tambahkan z-10 pada star-bg agar tetap di bawah categorytitle dan card-category */}
                        <div className="flex justify-between items-center h-full absolute w-full top-0 star-bg z-10">
                            <img src="img/b.png" className='h-full w-auto object-cover' alt="" />
                            <img src="img/a.png" className='h-full w-auto object-cover' alt="" />
                        </div>
                    </div>
                </div>


                <div className="w-full flex justify-center py-3">
                    <img src="img/17.png" className='w-[60%] xl:w-[40%]' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Collection