import React, { useState } from 'react'

const Slider = ({ imageURLs }) => {

    // Keeps track of which image is being grabbed from imageURLs array
    const [index, setIndex] = useState(0)

    const incrementIndex = () => {
        if (index < imageURLs.length - 1) {
            setIndex(index + 1)
        } else {
            setIndex(0)
        }
    }

    const decrementIndex = () => {
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(imageURLs.length - 1)
        }
    }

    return (
        <article className="slider">
            <div id="leftArrow" className="sliderArrow" onClick={decrementIndex}></div>
            <figure className="dressImage rounded">
                <img src={imageURLs[index]} alt="Images of me in dresses and a onesie" />
            </figure>
            <div id="rightArrow" className="sliderArrow" onClick={incrementIndex}></div>
        </article>
    )
}

export default Slider
