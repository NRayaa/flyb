import React from 'react'

const Faq = () => {
    return (
        <div>
            <div className="faqno py-16">
                <div className="flex justify-center">
                    <div className="">

                        <div className="text-white flex justify-center px-5 sm:px-0">
                            <div className="pb-10 text-center">
                                <p className='font-[500] text-[1.2rem] sm:text-[1.5rem]'>Frequently Asked Questions</p>
                                <h1 className='text-[2.5rem] sm:text-[4rem] font-[500] faqtxt'>All Your Curious Thoughts</h1>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-10">

                            <div className="cardfaq px-5 py-3 h-[20rem] w-[18rem] sm:w-[18rem] rounded-[2rem] mb-5 sm:mb-0">
                                <div className="flex gap-x-3">
                                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                                </div>

                                <div className="cardfaqtext pt-5">
                                    <div className="cardfaqtitle py-5">
                                        <p className='text-[1.5rem] font-[600] text-white'>Payment Method</p>
                                    </div>
                                    <div className="cardfaqdesc">
                                        <p className='text-white'>We accept [list payment options, e.g., bank transfers, e-wallets, etc.]. All details will be shared once your order is confirmed!</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cardfaq px-5 py-3 h-[20rem] w-[18rem] sm:w-[18rem] rounded-[2rem] mb-5 sm:mb-0">
                                <div className="flex gap-x-3">
                                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                                </div>

                                <div className="cardfaqtext pt-5">
                                    <div className="cardfaqtitle py-5">
                                        <p className='text-[1.5rem] font-[600] text-white'>Customize order</p>
                                    </div>
                                    <div className="cardfaqdesc">
                                        <p className='text-white'>Absolutely! Let us know your special requests when placing your order, and we’ll do our best to make it happen.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cardfaq px-5 py-3 h-[20rem] w-[18rem] sm:w-[18rem] rounded-[2rem]">
                                <div className="flex gap-x-3">
                                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-600"></div>
                                </div>

                                <div className="cardfaqtext pt-5">
                                    <div className="cardfaqtitle py-5">
                                        <p className='text-[1.5rem] font-[600] text-white'>Refunds or exchanges</p>
                                    </div>
                                    <div className="cardfaqdesc">
                                        <p className='text-white'>Since our beads are made with love, we only accept refunds or exchanges for damaged items. Let us know within [insert timeframe] if there’s an issue!</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="text-white text-center pt-10 px-5 sm:px-0 space-y-3">
                            <p className="text-[1.5rem] font-[600]">Still have questions?</p>
                            <p className='text-[1rem]'>Reach out to us through Let’s Chat—we’d love to help you make your bead dreams come true!</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Faq