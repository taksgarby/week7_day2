import React from 'react';
import Movie from './Movie';

const ListComponent = ({movies}) => {

    const movieNodes = movies.map(movie => {
        return (
            <Movie name= {movie.name} key={movie.id}>{movie.url}</Movie>
        )
    })

    return (
        <div>
            {movieNodes}
        </div>
    )
}

export default ListComponent;