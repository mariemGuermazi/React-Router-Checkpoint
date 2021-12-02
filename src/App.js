import './App.css';
import React, { useState } from 'react'
import {MovieList } from './Components/MovieList';
import { movieData } from './Components/Data';
import AddMovie from './Components/AddMovie';
import {Navbar, Nav, Container} from 'react-bootstrap'
import FilterByName from './Components/FilterByName';
import RatingStarFilter from './RatingStar'
import MyFooter from './Components/MyFooter';




function App() {
  const [movies, setMovies] = useState(movieData);
  const [inputSearch, setInputSearch] = useState("");
  const [starRate, setStarRate] = useState(0);

    const add = (newMovie) => {
      setMovies ([...movies, newMovie])
    }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">MOVIE APP</Navbar.Brand>
            <Nav className="me-auto">
              <AddMovie className= "addBtn" add= {add}/>
              <FilterByName  inputSearch={inputSearch} setInputSearch={setInputSearch}/>
              <div className="StarsFilter">
              <RatingStarFilter isMovieRating={false} starRate={starRate} setStarRate={setStarRate} />
              </div>
            </Nav>
        </Container>
      </Navbar>
          <div className="MovieList">
            <MovieList movies={movies} inputSearch={inputSearch} starRate={starRate}/>
          </div>
          <MyFooter/>
    </div>
  );
}

export default App;