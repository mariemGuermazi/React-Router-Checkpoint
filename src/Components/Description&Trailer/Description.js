import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom';
import Trailer from './Trailer';
import '../Description&Trailer/Description.css'

const Description = ({movieData}) => {
  const history = useHistory();
  const { id } = useParams();
  console.log(movieData)
  const movieDetail = movieData.filter((movies) => movies.id == id);
  const movieSingle=movieDetail[0]
  
  console.log(movieDetail)

  
    return (
        <div>
          
          <Card.Body>
          <Card.Title>{movieSingle.name}</Card.Title>
          <img src={movieSingle.image} alt="this is a movie poster" />
          <Card.Text >
          {movieSingle.description}
          </Card.Text>
          <div className="DISC-BTNS">
          <Button className="GoBack-BTN" variant="dark" onClick={() => history.goBack()}>Go Back</Button>
          <Trailer trailerURL={movieSingle.trailerURL}/>
        </div>
  </Card.Body>
        </div>
    )
}

export default Description
