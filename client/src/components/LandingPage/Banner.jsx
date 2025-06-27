import React from 'react'
import BannerImg from '../../assets/bannerimage.png'
function Banner() {
    return (
        <div
            className="w-full rounded-md h-40 my-5 relative overflow-hidden flex items-center justify-start"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <img
                className="h-40  rounded-md object-contain"
                src={BannerImg}
                alt="Banner"
            />
        </div>
    )
}

export default Banner
