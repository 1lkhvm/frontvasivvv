import React from 'react'
import Navbar from '../../Layouts/Navbar'
import Homesection1 from '../../Components/HomePageSection1/homepagesection1'
import Homesection2 from '../../Components/HomePageSection2/homesection2'
import Footer from '../../Layouts/Footer/footer'

function Home() {
    return (
        <>
            <Navbar />
            <Homesection1 />
            <Homesection2 />
            <Footer />
        </>
    )
}

export default Home