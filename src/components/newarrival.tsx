import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
const Newarrival = () => {
    return (
        <div>
            <div className="new-arrival">
                <div className=" bg-repeat" style={{ backgroundImage: "url('img/zxc.png')" }}>
                    <div className="px-5 pb-5 lg:pb-10 pt-10">
                        <img src="img/1234.png" className='w-[70%] h-auto lg:w-auto lg:h-auto' alt="" />
                    </div>
                    <div className="px-16 md:px-20 py-5 pt-10 pb-10 md:pb-16">
                        <Carousel className="w-full">
                            <CarouselContent className='-ml-8 md:-ml-10'>
                                <CarouselItem className='pl-8 md:pl-10 md:basis-1/3 xl:basis-1/4'>
                                    <div className="">
                                        <div className="bg-white px-5 pt-5 h-[26rem] relative">
                                            <div className=" flex w-[14rem] h-[14rem] justify-center w-full">
                                                <img src="img/22.png" className='w-full h-full object-cover' alt="" />
                                            </div>
                                            <div className="grid grid-rows-3 py-5">
                                                <div className=" row-span-2 title-na">
                                                    <p className="font-[500]">[Earrings] Jellies Poem asd asd ads adas dads adsa</p>
                                                </div>
                                                <div className="font-[600] py-1 price-na">
                                                    <p>Rp 20.000,-</p>
                                                </div>
                                            </div>
                                            <div className="absolute mr-5 mb-5 bottom-0 right-0">
                                                <div
                                                    className="button-na rounded-full px-3 flex items-center justify-between py-2 font-[600] gap-5 transition-transform transform hover:scale-105 hover:bg-gray-200"
                                                >
                                                    <p className="text-sm transition-opacity hover:opacity-80">Check</p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-arrow-right transition-transform transform hover:translate-x-1"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                        />
                                                    </svg>
                                                </div>

                                            </div>

                                            {/* <div className="title-na py-5">
                                                <p className='font-[500] text-lg'>[Earrings] Jellies Poem asd asd</p>
                                            </div>
                                            <div className="price-na">
                                                <p className='font-[600]'>Rp 20.000</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='pl-8 md:pl-10 md:basis-1/3 xl:basis-1/4'>
                                    <div className="">
                                        <div className="bg-white px-5 pt-5 h-[26rem] relative">
                                            <div className=" flex w-[14rem] h-[14rem] justify-center w-full">
                                                <img src="img/23.png" className='w-full h-full object-cover' alt="" />
                                            </div>
                                            <div className="grid grid-rows-3 py-5">
                                                <div className=" row-span-2 title-na">
                                                    <p className="font-[500]">[Earrings] Jellies Poem asd asd ads adas dads adsa</p>
                                                </div>
                                                <div className="font-[600] py-1 price-na">
                                                    <p>Rp 20.000,-</p>
                                                </div>
                                            </div>
                                            <div className="absolute mr-5 mb-5 bottom-0 right-0">
                                                <div
                                                    className="button-na rounded-full px-3 flex items-center justify-between py-2 font-[600] gap-5 transition-transform transform hover:scale-105 hover:bg-gray-200"
                                                >
                                                    <p className="text-sm transition-opacity hover:opacity-80">Check</p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-arrow-right transition-transform transform hover:translate-x-1"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                        />
                                                    </svg>
                                                </div>

                                            </div>

                                            {/* <div className="title-na py-5">
                                                <p className='font-[500] text-lg'>[Earrings] Jellies Poem asd asd</p>
                                            </div>
                                            <div className="price-na">
                                                <p className='font-[600]'>Rp 20.000</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='pl-8 md:pl-10 md:basis-1/3 xl:basis-1/4'>
                                    <div className="">
                                        <div className="bg-white px-5 pt-5 h-[26rem] relative">
                                            <div className=" flex w-[14rem] h-[14rem] justify-center w-full">
                                                <img src="img/24.png" className='w-full h-full object-cover' alt="" />
                                            </div>
                                            <div className="grid grid-rows-3 py-5">
                                                <div className=" row-span-2 title-na">
                                                    <p className="font-[500]">[Earrings] Jellies Poem asd asd ads adas dads adsa</p>
                                                </div>
                                                <div className="font-[600] py-1 price-na">
                                                    <p>Rp 20.000,-</p>
                                                </div>
                                            </div>
                                            <div className="absolute mr-5 mb-5 bottom-0 right-0">
                                                <div
                                                    className="button-na rounded-full px-3 flex items-center justify-between py-2 font-[600] gap-5 transition-transform transform hover:scale-105 hover:bg-gray-200"
                                                >
                                                    <p className="text-sm transition-opacity hover:opacity-80">Check</p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-arrow-right transition-transform transform hover:translate-x-1"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                        />
                                                    </svg>
                                                </div>

                                            </div>

                                            {/* <div className="title-na py-5">
                                                <p className='font-[500] text-lg'>[Earrings] Jellies Poem asd asd</p>
                                            </div>
                                            <div className="price-na">
                                                <p className='font-[600]'>Rp 20.000</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem className='pl-8 md:pl-10 md:basis-1/3 xl:basis-1/4'>
                                    <div className="">
                                        <div className="bg-white px-5 pt-5 h-[26rem] relative">
                                            <div className=" flex w-[14rem] h-[14rem] justify-center w-full">
                                                <img src="img/25.png" className='w-full h-full object-cover' alt="" />
                                            </div>
                                            <div className="grid grid-rows-3 py-5">
                                                <div className=" row-span-2 title-na">
                                                    <p className="font-[500]">[Earrings] Jellies Poem asd asd ads adas dads adsa</p>
                                                </div>
                                                <div className="font-[600] py-1 price-na">
                                                    <p>Rp 20.000,-</p>
                                                </div>
                                            </div>
                                            <div className="absolute mr-5 mb-5 bottom-0 right-0">
                                                <div
                                                    className="button-na rounded-full px-3 flex items-center justify-between py-2 font-[600] gap-5 transition-transform transform hover:scale-105 hover:bg-gray-200"
                                                >
                                                    <p className="text-sm transition-opacity hover:opacity-80">Check</p>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        fill="currentColor"
                                                        className="bi bi-arrow-right transition-transform transform hover:translate-x-1"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                                        />
                                                    </svg>
                                                </div>

                                            </div>

                                            {/* <div className="title-na py-5">
                                                <p className='font-[500] text-lg'>[Earrings] Jellies Poem asd asd</p>
                                            </div>
                                            <div className="price-na">
                                                <p className='font-[600]'>Rp 20.000</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </CarouselItem>
                            </CarouselContent>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newarrival