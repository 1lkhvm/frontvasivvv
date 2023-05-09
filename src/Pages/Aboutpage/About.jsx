import React from 'react'
import Navbar from '../../Layouts/Navbar'
import AboutSection1 from '../../Components/AboutPageSection1/AboutSection1'
import AboutSection2 from '../../Components/AboutPageSection2/AboutSection2'
import Footer from '../../Layouts/Footer/footer'
function About() {
    return (
        <>
            <Navbar />
            <AboutSection1 />
            <AboutSection2 />
            <Footer />
        </>
    )
}

export default About