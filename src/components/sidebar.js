import React from 'react'
import {Image} from "react-bootstrap"
import image01 from '../images/sidebar01.jpg'
import image02 from '../images/sidebar02.jpg'
import image03 from '../images/sidebar03.jpg'
import image04 from '../images/sidebar04.jpg'

export default function sidebar() {
    
    return (
    <div class="slideshow">
        <div class="slideshow-image"><Image src={image01} fluid /></div>
        <div class="slideshow-image"><Image src={image02} fluid /></div>
        <div class="slideshow-image"><Image src={image03} fluid /></div>
        <div class="slideshow-image"><Image src={image04} fluid /></div>
      </div>
    )
}
