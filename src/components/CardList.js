import React from 'react'
import {Card} from './Card'
import Hoc from './LoadinHoc'
 const CardList = ({movies}) => {
    return (
        <div className="cards">
            {movies.map((el,i)=> <Card movie={el} />  )}
            
        </div>
    )
}
export default Hoc(CardList)
