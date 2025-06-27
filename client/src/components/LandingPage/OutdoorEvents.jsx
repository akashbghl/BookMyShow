import React from 'react'
import MovieCard from '../reusable-components/MovieCard'

const MovieDetails = [
    {
        MovieName: 'Karthik',
        Description: 'Comedy Laughter Show',
        ImageSrc: 'https://assets-in.bmscdn.com/nmcms/bookmyshow-description-1-1733739271020-2024-12-9-t-10-14-46.jpeg',
        Rating: '6.8 / 10',
    },
    {
        MovieName: 'Tailor Swift',
        Description: 'Love, Romance, Singing',
        ImageSrc: 'https://www.tallengestore.com/cdn/shop/files/TaylorSwift-TheErasTour-PopMusicConcertPoster_4b6f7308-bc4b-460b-96c4-a5d5db8f3c8d.jpg?v=1737674591',
        Rating: '8.9 / 10',
    },
    {
        MovieName: 'Sunny Leone',
        Description: 'Romance , Dance',
        ImageSrc: 'https://i.pinimg.com/736x/2b/08/b2/2b08b2150b1e3208c896dd1ca3007c97.jpg',
        Rating: '9.0/10',
    },
    {
        MovieName: 'Nora Fatehi',
        Description: 'Action, Intense Emotions',
        ImageSrc: 'https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/01/17/screenshot-2023-01-17-at-3-23-56-pm9689611.jpg?quality=80&zoom=1&ssl=1',
        Rating: '7.5 / 10',
    },
    {
        MovieName: 'Akshay Kumar',
        Description: 'Thriller ,Team Battle',
        ImageSrc: 'https://navtarang.com.fj/wp-content/uploads/2024/12/Akshay-Kumar-Announces-Release-Date.jpg',
        Rating: '8.5/10',
    },
]
function OutdoorEvents() {
    return (
        <div>
            <h1 className='font-bold text-3xl my-4'>Outdoor Events</h1>
            <div className='flex gap-6  justify-center'>
                {
                    MovieDetails.map((data, index) => (
                        <MovieCard
                            MovieName={data.MovieName}
                            Description={data.Description}
                            ImageSrc={data.ImageSrc}
                            Rating={data.Rating}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OutdoorEvents
