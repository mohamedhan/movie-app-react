import React, { Component } from 'react'
import NameFilter from './NameFilter'
import movies from './Data'
import CardList from './CardList'
import Modal from './Modal'
import { RatingFilter } from './RatingFilter'
import Hoc from './LoadinHoc'
 class Main extends Component {
    state={
        movies,
        nameFilter:'',
        minRatingFilter:0,
        loading:true
    }
    componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },2000)
    }
    handleAdd=(name,url,star)=>{
        this.setState({
            movies:[...this.state.movies,{name:name,img:url,star:star}]
        })
    } 
    handleSearch=(input)=>{
        this.setState({
            nameFilter:input
        })
    }
    handleRating=(newrating)=>{
        this.setState({
            minRatingFilter:newrating
        })
    }
    render() {
        const filtered=this.state.movies.filter((el,index)=>(el.star>=this.state.minRatingFilter) &&(el.name.toUpperCase().includes(this.state.nameFilter.toUpperCase())))
        return (
            <div>
               
                <NameFilter search={this.handleSearch} />
                <RatingFilter 
                count={this.state.minRatingFilter}
                onchange={(this.handleRating)} />
                <CardList movies={filtered} load={this.state.loading} />
                <Modal add={this.handleAdd}/>
            </div>
        )
    }
}
export default Hoc(Main)
