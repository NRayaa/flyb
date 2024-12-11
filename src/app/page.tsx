import Header from '@/components/header'
import TextTitle from '@/components/texttitle'
import Title from '@/components/title'
import React from 'react'
import Divider from '@/components/divider'
import Collection from '@/components/collection'
import Banner from '@/components/banner'
import Newarrival from '@/components/newarrival'
import Dividertwo from '@/components/dividertwo'

const Home = () => {

    return (
        <div>
            <div className="relative overflow-hidden first-section bg-cover w-full h-[100vh]" style={{ backgroundImage: "url('/img/1.png')" }}>
                <Header></Header>
                <div className="absolute top-[9rem] lg:-top-28 -right-8 lg:-right-16 xl:right-14 w-40 lg:w-[20rem] h-28 lg:h-[20rem]">
                    <img src="/img/5.png" className="w-full h-full object-cover" alt="" />
                </div>
                <Title></Title>

                <TextTitle></TextTitle>
                <div className="absolute w-full z-[5] -bottom-[3.5rem] lg:-bottom-[3.5rem] -left-0 sm:left-[0.2rem]">
                    <img src="/img/4.png" className="h-full w-full object-cover" alt="" />
                </div>
            </div>

            {/* {{-- Divider --}} */}
            <Divider></Divider>

            {/* Collection */}
            <Collection></Collection>

            {/* Banner Promo */}
            <Banner></Banner>

            {/* New Arrival */}
            <Newarrival></Newarrival>

            {/* Divider Two */}
            <Dividertwo></Dividertwo>

            {/* Step */}
            <div className="steporder relative  w-full px-10 lg:px-20 pt-[2rem] lg:pt-[4rem] pb-[7rem] lg:pb-[12rem] overflow-hidden">
                <div className="grid xl:grid-cols-3 relative z-30">

                    <div className="w-full xl:w-[20rem] flex justify-center pb-[2rem] xl:pb-[0rem]">
                        <div className="flex flex-col items-center text-center space-y-2 lg:space-y-0">
                            <h2 className="text-[4rem] xl:text-[5rem] font-[500] leading-tight text-so">How to get our stuff ?</h2>
                            <img src="img/17.png" className='w-[100%] sm:w-full h-auto' alt="" />
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2">
                        <div className="w-full rounded-[2rem] grid grid-cols-1 sm:grid-cols-4 card-so">
                            <div className="col-span-1 w-full h-[8.5rem] px-5 py-4">
                                <div className=" w-full img-card-so flex justify-center rounded-[1.5rem] h-full">
                                    <img src="img/28.png" className='h-full w-auto' alt="" />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-3 flex items-center pb-3 sm:pb-0 px-">
                                <div className="px-5">
                                    <p className='text-[1.5rem] text-white font-600'>Find Your Sparkle</p>
                                    <p className='text-white'>Take a stroll through our collection and pick the beads that make your heart happy! When you’re ready, tap Let’s Chat to place your order.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-4">
                            <div className="col-span-1 w-full pl-5 pr-3 flex justify-center">
                                <div className=" space-y-1">
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full rounded-[2rem] grid grid-cols-1 sm:grid-cols-4 card-so">
                            <div className="col-span-1 w-full h-[8.5rem] px-5 py-4">
                                <div className=" w-full img-card-so flex justify-center rounded-[1.5rem] h-full">
                                    <img src="img/29.png" className='h-full w-auto' alt="" />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-3 flex items-center pb-3 sm:pb-0 px-">
                                <div className="px-5">
                                    <p className='text-[1.5rem] text-white font-600'>Find Your Sparkle</p>
                                    <p className='text-white'>Take a stroll through our collection and pick the beads that make your heart happy! When you’re ready, tap Let’s Chat to place your order.</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full grid grid-cols-4">
                            <div className="col-span-1 w-full pl-5 pr-3 flex justify-center">
                                <div className=" space-y-1">
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                    <div className="w-1 h-1 img-card-so rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full rounded-[2rem] grid grid-cols-1 sm:grid-cols-4 card-so">
                            <div className="col-span-1 w-full h-[8.5rem] px-5 py-4">
                                <div className=" w-full img-card-so flex justify-center rounded-[1.5rem] h-full">
                                    <img src="img/30.png" className='h-full w-auto' alt="" />
                                </div>
                            </div>
                            <div className="col-span-1 sm:col-span-3 flex items-center pb-3 sm:pb-0 px-">
                                <div className="px-5">
                                    <p className='text-[1.5rem] text-white font-600'>Find Your Sparkle</p>
                                    <p className='text-white'>Take a stroll through our collection and pick the beads that make your heart happy! When you’re ready, tap Let’s Chat to place your order.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute w-auto  z-10  -bottom-0 lg:-top-[20rem] lg:-left-[5rem] sm:-left-20 -left-[5rem]">
                    <img src="img/27.png" className="w-full h-full object-cover" alt="" />
                </div>

                <div className="absolute z-20 w-full left-0 bottom-0">
                    <img src="img/32.png" className='' alt="" />
                </div>

            </div>


        </div>
    )
}

export default Home