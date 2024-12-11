import React from 'react'

const Divider = () => {
    return (
        <div>
            <div className="-mt-5 relative z-[500] w-full h-[10vh] md:h-[18vh] xl:h-[18vh] flex items-center justify-center">
                <img src="img/6.png" alt="" className="object-cover h-full w-auto" />
                <h2
                    className=" title-collection absolute text-[2rem] lg:text-[6rem] xl:text-[3rem] text-white">
                    Our Collection!
                </h2>
            </div>
        </div>
    )
}

export default Divider