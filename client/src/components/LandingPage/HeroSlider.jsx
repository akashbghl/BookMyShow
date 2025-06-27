import React from 'react'

function HeroSlider() {
    return (
        <div className='my-3 overflow-x-hidden'>
            {/* images */}
            <div className='hero-slider flex h-80 gap-8  mx-4'>
                <img className=' w-[1080px] flex-shrink-0 rounded-md object-cover ' src="https://wallpapers.com/images/hd/avengers-endgame-fantasy-m8fbpfs2m580r7l3.jpg" alt="" />
                <img className=' w-[1080px] flex-shrink-0 rounded-md object-cover ' src="https://webneel.com/wnet/file/images/11-16/8-xmen-movie-poster-design.jpg" alt="" />
                <img className=' w-[1080px] flex-shrink-0 rounded-md object-cover ' src="https://www.bollywoodhungama.com/wp-content/uploads/2022/10/Housefull-5-banner.jpg" alt="" />
                <img className=' w-[1080px] flex-shrink-0 rounded-md object-cover ' src="https://images8.alphacoders.com/121/1218962.jpg" alt="" />
            </div>

            {/* buttons */}
            <div className='flex gap-1 my-4 justify-center'>
                <div className='h-2 w-2 rounded-full bg-gray-700 border'></div>
                <div className='h-2 w-2 rounded-full bg-gray-700 border'></div>
                <div className='h-2 w-2 rounded-full bg-gray-700 border'></div>
                <div className='h-2 w-2 rounded-full bg-gray-700 border'></div>
            </div>
        </div>
    )
}

export default HeroSlider
