import React from 'react'

function MovieCard({ MovieName, Description, Rating, ImageSrc }) {
    return (
        <div className='w-55 overflow-hidden'>
            <div className='h-80 rounded-md shadow shadow-black '>
                <img className='h-72 w-full rounded-tl-md rounded-tr-md object-cover transition-transform duration-300 hover:scale-110 hover:cursor-pointer' src={ImageSrc} alt="" />
                <div className='h-8 bg-black  rounded-bl-md rounded-br-md text-white text-center flex items-center justify-center'>⭐ {Rating}</div>
            </div>
            <h2 className='w-55 font-bold text-2xl'>{MovieName || 'MovieName'}</h2>
            <p className='w-55 text-[14px]'>{Description || 'MovieDescription'}</p>
        </div>
    )
}
export default MovieCard
