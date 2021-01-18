import React, { useState } from 'react'
import FinalMessage from '../FinalMessage/FinalMessage'
import YearSelector from '../YearSelector/YearSelector'

const Message = () => {

    const [year, setYear] = useState('2021')
    const onYearSelect = (e) => setYear(e.target.value)

    return (
        <section id="message">
            <article id="titlePage">
                <h1 id="title">Our Story</h1>
                <p id="abstract">A showcase of all the best memories and moments of our relationship so far</p>
                <div id="arrow"></div>
            </article>
            {/* Dropdown at the top pf the page */}
            <YearSelector isBottomDropdown={false} year={year} onYearSelect={onYearSelect} />

            {/* Dropdown at the bottom of the page */}
            <YearSelector isBottomDropdown={true} year={year} onYearSelect={onYearSelect} />
            <FinalMessage />
        </section>
    )
}

export default Message