import React from "react";
import { Link } from 'react-router-dom'

const MovieList = (props)=>{
    

    return (
        <>

        {props.movies.map((movie,index)=>(
        <div className="d-flex flex-column">
            <Link to={`/movie/${movie.imdbID}`} >
            <img src ={movie.Poster} alt="movie" width="10%" height="50%"  />     
            </Link>
            <h2>Year: {movie.Year}
            </h2>
        </div>))}
        </>
    );
};

export default MovieList;