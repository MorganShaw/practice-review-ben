import React from 'react';hi

const Movie = (props) => {
    const {title, director, id} = props.movie;
    return (
        <div>
            <h2>{title}</h2>
            <h2>{director}</h2>
            <button onClick={() => props.deleteMovie(id)}>Delete</button>
        </div>
    )
}

export default Movie




//When taking props from Movies (the parent component), you don't use the this keyword, since it's just a functional component. And because props has been passed in the Movie function, we can just say movie.title. 

//We can destructure if we don't want to do {props.movie.title}.
//If we destructure const {movie} = props;, we'd use {movie.title}.
//If we destructure const {title, director} = props.movie;, we'd use just {title}.
//Basically, we can destructure any object, even state.

//Where to put delete movie button? In this Movie file, so there's a delete movie button for each movie. Then go over into Movie file to create the function. 

//If you don't have to pass parameters, then you can just use {props.deleteMovie}.

//If you have to invoke it, then you have to use the parentheses on both beginning and end of {props.deleteMovie}. Just always make it an arrow function for now. 