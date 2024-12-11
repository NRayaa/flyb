import Header from '@/components/header'
import TextTitle from '@/components/texttitle'
import Title from '@/components/title'
import Link from 'next/link'
import React from 'react'
import Divider from '@/components/divider'
import Collection from '@/components/collection'
import Banner from '@/components/banner'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Newarrival from '@/components/newarrival'

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
                <div className="absolute w-full z-[5] -bottom-[3.5rem] lg:-bottom-[4.1rem] -left-0 sm:left-[0.3rem]">
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
        </div>
    )
}

export default Home