import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            <div className="menubar top-0 h-[9rem] hidden lg:block w-full">
                <div className="logo w-full h-[70%]  flex justify-center items-center">
                    <img src="/img/3.png" className='h-full w-auto object-cover' alt="" />
                </div>
                <div className="menu w-full text-white font-[500] h-[30%] flex justify-center items-center space-x-24">
                    <Link href="#"><p>Home</p></Link>
                    <Link href="#"><p>Catalog</p></Link>
                    <Link href="#"><p>FAQ</p></Link>
                    <Link href="#"><p>Contact Us</p></Link>
                </div>
            </div>

            <div className="menubar top-0 h-[6rem] lg:h-[9rem] w-full lg:hidden">
                <div className="flex justify-between h-full items-center">
                    <div className="logo w-[40%] sm:w-[20%] lg:w-full h-[70%]  flex justify-center items-center">
                        <img src="/img/3.png" className='h-full w-auto object-cover' alt="" />
                    </div>
                    <div className="me-5 flex items-center">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header