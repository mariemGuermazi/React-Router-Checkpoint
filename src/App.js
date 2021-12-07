import './App.css';
import React, { useState } from 'react'
import {MovieList } from './Components/MovieList';
import { movieData } from './Components/Data';
import MyNavbar from './Components/MyNavbar';
import MyFooter from './Components/MyFooter';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Description from "./Components/Description&Trailer/Description";

function App() {
  const [movies, setMovies] = useState(movieData);
  const [inputSearch, setInputSearch] = useState("");
  const [starRate, setStarRate] = useState(0);
  const add = (newMovie) => {
      setMovies ([...movies, newMovie])
    }

  return (
    <div className="App">
      <BrowserRouter>
      <MyNavbar add= {add} 
      inputSearch={inputSearch} setInputSearch={setInputSearch} 
      starRate={starRate} setStarRate={setStarRate} />

      <Switch>
      <Route exact path="/">
      <MovieList className="MovieList" movies={movies} inputSearch={inputSearch} starRate={starRate}/>
      </Route>
      <Route path="/description/:id" >
      <Description movieData={movies}/>
      </Route>
      </Switch>
      <MyFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;