import React, { Component } from 'react'
import './MovieInfo.css'
class MovieInfo extends Component {
  constructor() {
    super()
    this.state = {}
  }


  componentDidMount() {

  }

  render() {
    return (
      <div></div>
    )
  }


  //   const { title, poster_path, runtime, overview, revenue, release_date, average_rating } = props.selectedMovie
  // return (
  //   <div className='single-container'>
  //     <h3 className='font movie-title'>{title}</h3>
  //     <img className='font margin' src={poster_path} alt={title} />
  //     <h4 className='font'>Runtime: {runtime} minutes</h4>
  //     <h4 className='font margin'>Rating: {average_rating}/10</h4>
  //     <h4 className='font margin'>Overview: {overview}</h4>
  //     <h4 className='font margin'>Release Date: {release_date}</h4>
  //     <h4 className='font'>Revenue: ${revenue}</h4>
  //     <button className='button' onClick={() => props.returnHome()} >Home</button>
  //   </div>
  //)
}


export default MovieInfo