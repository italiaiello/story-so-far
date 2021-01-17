import React from 'react'
import Year2020 from '../components/Years/Year2020'
import Year2021 from '../components/Years/Year2021'

export const loadYear = (year) => {
    switch(year) {
        case '2021':
            return <Year2021 />;
        case '2020':
            return <Year2020 />;
        default:
            return <>Invalid Year</>
    }
}