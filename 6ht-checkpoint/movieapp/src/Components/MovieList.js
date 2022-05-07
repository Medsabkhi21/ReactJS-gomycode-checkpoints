import React from "react";
const MovieList = (props)=>{
    return (
        <>
        {props.movies.map((movie,index)=>(
        <div className="d-flex justify-content-start m-3">
            <img src ={movie.Poster} alt="movie"></img>
            <h2>{movie.Title}</h2>
            <h2>Year: {movie.Year}</h2>
            
        </div>))}
        </>
    );
};

export default MovieList;