import React from 'react'
import HeroSlider from './HeroSlider'
import RecommendedMovies from './RecommendedMovies'
import BannerImg from '../../assets/bannerimage.png'
import OutdoorEvents from './OutdoorEvents'
import Banner from './Banner'
import Footer from './Footer'
function Home() {
    return (
        <>
            <div>
                <HeroSlider />
            </div>
            <div className='w-[80%] m-auto'>
                <RecommendedMovies />
                <Banner/>
                <OutdoorEvents/>
                <RecommendedMovies/>
                <Banner/>

            </div>
                <Footer/>
        </>
    )
}

export default Home
