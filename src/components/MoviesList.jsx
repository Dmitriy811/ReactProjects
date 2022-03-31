import React from 'react';
import MoviesCard from './MoviesCard';

export default function MoviesList({movies = []}) {
    if (!movies.length) return <h4>Nothing found</h4>;

    return (
        <div className='movies'>
            {movies.map((movie) => (
                <MoviesCard key={movie.imdbID} {...movie} />
            ))}
        </div>
    );
}
