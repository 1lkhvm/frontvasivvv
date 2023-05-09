import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar'
import Footer from '../../Layouts/Footer/footer'
import './LongAbout.scss'

function LongAbout() {

    const [element, setElement] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3003/${id}`)
            .then(res => res.json())
            .then(res => setElement(res))
    }, [id])


    return (
        <>
            <Navbar />



            <div className='abouts-container'>
                <div className='abouts'>

                    <div className='abouts-imgs'>
                        <img src={element.image} alt="" />
                        <span>{element.namesurname}</span>
                        <span>{element.history}</span>
                    </div>
                    <div className='abouts-text'>
                        <p>{element.description}</p>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default LongAbout