import React from 'react'
import {Card, Button} from 'react-bootstrap'

import '../App.css';
import MovieRatingStar from '../RatingStar';

 const MovieCard = ({ movies }) => {
    return (
        <div >
            <Card className="movieCard" style={{ width: '18rem' }}>
                <img className="MovieCardImg" variant="top" src={movies.image} alt="poster"  />
                <Card.Body>
                    <Card.Title style={{height:50}}>{movies.name}</Card.Title>
                    <Card.Text>{movies.date}</Card.Text>
                    <Card.Text>{movies.type}</Card.Text>
                    <Card.Text style={{height:150}}>{movies.description}</Card.Text>
                    <div className='starRating' >
                    <MovieRatingStar isMovieRating={true} movieRating= {movies.rating}/>
                    </div>
                    <Button variant="dark">Watch</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard