import React from 'react'
import Hero from '../Component/Hero'
import LatestCollection from '../Component/LatestCollection'
import BestSeller from '../Component/BestSeller'
import OurPolicy from '../Component/OurPolicy'
import NewsletterBox from '../Component/NewsletterBox'


const Home = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <OurPolicy />
            <NewsletterBox />

        </div>
    )
}

export default Home
