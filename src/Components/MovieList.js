import React from 'react'
import MovieCard from './MovieCard';
import '../App.css';

export const MovieList = ({movies, inputSearch, starRate}) => {
    return (
        <div className="movieList">
          {movies
          .filter(movies => movies.name.toLowerCase().includes(inputSearch.toLowerCase())
          &&
          movies.rating >= starRate
          ) 
          .map((movies) => ( <MovieCard movies={movies} key={movies.id} />))}
        </div>
      );
}


