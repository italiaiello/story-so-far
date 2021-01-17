import React, { useState } from 'react'
import { loadYear } from '../../functions/loadYear'

const YearSelector = ({ isBottomDropdown }) => {

    const [year, setYear] = useState('2020')

    const onYearSelect = (e) => setYear(e.target.value)

    return (
        <section id="year-selector">
            <article id="dropdown-container">
                <h2>Select a Year</h2>
                <select id="dropdown" value={year} onChange={onYearSelect} >
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </article>
            {
                isBottomDropdown ? null : loadYear(year)
            }
        </section>
    )
}

export default YearSelector
