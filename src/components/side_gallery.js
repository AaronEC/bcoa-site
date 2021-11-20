import React from 'react'
import {Image} from "react-bootstrap"
import image01 from '../../static/sidebar01.jpg'
import image02 from '../../static/sidebar02.jpg'
import image03 from '../../static/sidebar03.jpg'
import image04 from '../../static/sidebar04.jpg'

export default function sidebar() {
    
    return (
    <div class="slideshow">
        <div class="slideshow-image"><Image src={image04} fluid /></div>
        <div class="slideshow-image"><Image src={image03} fluid /></div>
        <div class="slideshow-image"><Image src={image01} fluid /></div>
        <div class="slideshow-image"><Image src={image02} fluid /></div>
      </div>
    )
}
