import React from 'react'
import "./AboutSection2.scss"
import vasivvv from '../../imgs/vasiv.jpg'
function AboutSection2() {
    return (
        <>
            <div class="wrapper">


                <div class="outer">
                    <div class="content animated fadeInLeft">
                        <span class="bg animated fadeInDown">Website Creator</span>
                        <h1>Vasivvv<br /> Huseynov</h1>
                        <p className='aboutp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, deserunt sit consequatur deleniti rem ullam animi? Placeat fugiat alias, quam maiores dolores fugit saepe cum sunt nulla modi aliquam corrupti?
                            Ipsam placeat, magni cupiditate incidunt minus consequatur fugit pariatur quos id quisquam expedita laboriosam! Sed officiis amet ab laboriosam numquam accusamus, obcaecati exercitationem deleniti neque et doloremque nulla animi a.

                        </p>

                        <div class="button">
                            <a href="#">
                                <i class="fa-brands fa-facebook" ></i>
                            </a><a class="cart-btn" href="#"><i class="cart-icon ion-bag"></i><i class="fa-brands fa-twitter"></i></a>
                        </div>

                    </div>
                    <img src={vasivvv} width="300px" class="animated fadeInRight" />
                </div>



            </div>
        </>
    )
}

export default AboutSection2