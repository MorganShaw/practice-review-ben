import React, {Component} from "react";
import Movie from './Movie';


class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [{
                id: 1,
                title: 'Star Wars',
                director: 'George'
            }, {
                id: 2,
                title: "Jaws",
                director: "Stephen Spielberg"
            }]
        }
        // this.deleteMovie.bind(this) if you don't use an arrow function
    }

    deleteMovie = (id) => {
        const updatedMovies = this.state.movies.filter((movie) => {
            return movie.id !== id
        })
        this.setState({
            movies: updatedMovies
        })
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <div>{this.state.movies.map((element, index) => {
                    return (
                        <Movie 
                            movie={element} 
                            key={index} 
                            deleteMovie={this.deleteMovie}/>
                    )
                })}
                </div>
            </div>
        )
    }
}

export default Movies

//They recommend that you pass props in constructor() and super() in react because there's a weird bug that can happen if you don't (rare).

//A map performs some functionality for each item in the array. Example - if you had an array of ten items, and did a .map over that array, and returned the <h1>Pizza</h1>, it would return (rendered) 10 Pizzas in h1.

//You can do the map in the return, or in the render function.