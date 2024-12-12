import Header from '@/components/header'
import TextTitle from '@/components/texttitle'
import Title from '@/components/title'
import React from 'react'
import Divider from '@/components/divider'
import Collection from '@/components/collection'
import Banner from '@/components/banner'
import Newarrival from '@/components/newarrival'
import Dividertwo from '@/components/dividertwo'
import Stepoe from '@/components/stepoe'
import Faq from '@/components/faq'

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
            <Stepoe></Stepoe>

            {/* FAQ */}
            <Faq></Faq>

            {/* Footer */}
            <footer className='md:flex hidden sm:block bg-cover py-16 px-16 w-full space-x-14' style={{ backgroundImage: "url('img/35.png')" }}>
                <div className="w-[25rem]">
                    <img src="img/134.png" alt="" />
                </div>
                <div className="grid grid-cols-2 pl-10">
                    <div className="col-span-1">
                        <div className="text-white px-5">
                            <p className="pb-5 font-[500]">ADDESS</p>
                            <p>240 Elphsevour St., Northern City, Arctic, Country 110904</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="text-white px-5">
                            <p className="pb-5 font-[500]">EMAIL</p>
                            <p>anassyihabuddin01@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="text-white px-5">
                            <p className="pb-5 font-[500]">PHONE</p>
                            <p>+62 815 7822 3564</p>
                        </div>
                    </div>
                </div>

            </footer>

            <footer className=' md:hidden bg-cover w-full' style={{backgroundImage:"url('img/35.png')"}}>
                <div className="flex justify-center py-5 -mt-1">
                    <img src="img/134.png" className='w-[50%] h-auto object-cover' alt="" />
                </div>
            </footer>


        </div>
    )
}

export default Home