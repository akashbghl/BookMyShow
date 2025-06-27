import React from 'react'
import MovieCard from '../reusable-components/MovieCard'

const MovieDetails = [
    {
        MovieName: 'Amavas',
        Description: 'Horror , Thriller , Supernatural , Suspense',
        ImageSrc: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsotDr7HgOVaLCNyoH1NIv1SEZsmOMAFkK8zZYYtxg4irqLQyFa5y5583eJnLoALEgeouwfydkRekTBgopFca2TZ1lRn9xXfdV4gx5LXhwQGg8Ez6AOIaLDhwoooRFIdVvq1Ueo_EaYnvF/s1600/amavas-hindi-movie-poster.jpg',
        Rating: '9.8/10',
    },
    {
        MovieName: 'Housefull 5',
        Description: 'Comedy, Multicast, Romance, Drama',
        ImageSrc: 'https://preview.redd.it/housefull-5-v0-rrarytdn6k1f1.jpeg?auto=webp&s=447215911478298310aaeca588125393ed9194a6',
        Rating: '8.5/10',
    },
    {
        MovieName: 'G20',
        Description: 'Political Thriller, Leadership, Global Crisis, Power Struggle',
        ImageSrc: 'https://lh3.googleusercontent.com/proxy/yHVViHyH2N3Vp0dXuvAidzDQ8ZewJev_3dLtB3VrFTbl5h1heq62AiE3rz4tXs4ctrta7KGS096QS1pxVRRuVsL1PuWp',
        Rating: '7.0/10',
    },
    {
        MovieName: 'Animal',
        Description: 'Action, Crime, Family Drama, Intense Emotions',
        ImageSrc: 'https://m.media-amazon.com/images/I/61OmlO9stnL._UF1000,1000_QL80_.jpg',
        Rating: '9.2/10',
    },
    {
        MovieName: 'Xmen',
        Description: 'Superhero, Action, Sci-Fi, Mutants, Team Battle',
        ImageSrc: 'https://i.pinimg.com/736x/1c/2d/40/1c2d40a7be9f567a5f65a7d3090189bd.jpg',
        Rating: '9.5/10',
    },
]
function RecommendedMovies() {
    return (
        <div>
            <h1 className='font-bold text-3xl my-4'>Recommended Movies</h1>
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

export default RecommendedMovies
