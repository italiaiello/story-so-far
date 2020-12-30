import React, { useState } from 'react'

const Slider = ({ imageURLs, lightenArrows }) => {

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
            <div className={`${lightenArrows ? "leftArrow sliderArrow lighter" : "leftArrow sliderArrow"}`} onClick={decrementIndex}></div>
            <figure className="dressImage rounded">
                <img src={imageURLs[index]} alt="Images of me in dresses and a onesie" />
            </figure>
            <div className={`${lightenArrows ? "rightArrow sliderArrow lighter" : "rightArrow sliderArrow"}`} onClick={incrementIndex}></div>
        </article>
    )
}

export default Slider
