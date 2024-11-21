import { Link } from 'react-router-dom'
import React from 'react'
import { FaStar } from 'react-icons/fa'


const imgUrl = import.meta.env.VITE_IMG

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className='movie_card'>
            <img src={imgUrl + movie.poster_path} alt={movie.title} />
            <h2>{movie.title}</h2>

            <p>
                <FaStar/> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}

export default MovieCard
