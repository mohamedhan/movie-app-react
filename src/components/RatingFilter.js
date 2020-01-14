import React from 'react'
import Rating  from './Rating'

export const RatingFilter = (props) => {
    return (
        <div>
            <p>Minimum rating</p>
            <Rating  count={props.count}
            change={props.onchange} />
        </div>
    )
}
