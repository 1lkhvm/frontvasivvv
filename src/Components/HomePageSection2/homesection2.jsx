import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import './homesection2.scss'
function Homesection2() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3003").then((response) => {
            setPost(response.data);
        });
    }, []);

    return (
        <div className='card-container'>
            <div className='all-card'>
                {console.log(post)}
                {post.map((element) => {
                    return (
                        <div class="card">
                            <img src={element.image} alt="John" />
                            <span>{element.namesurname}</span>
                            <p class="title">{element.shortdescription}</p>
                            <p class="title">Doğum tarixi:{element.birthdate}</p>

                            <Link to={`/${element._id}`}><p><button className='button-74'>Ətraflı...</button></p></Link>

                        </div >
                    )
                })}
            </div >

        </div >
    )
}

export default Homesection2