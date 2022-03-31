import React from 'react'
import errorImg from '../assets/img/error.jpg'


export default function MoviesCard({ Title, Year, Type, Poster, Id }) {

	return (
		<div className='card'>
			<div className='card-image waves-effect waves-block waves-light'>
				{Poster === 'N/A'
					? <img className='activator error' src={errorImg} alt='movieImage' />
					: <img className='activator' src={Poster} alt='movieImage' />
				}
			</div>
			<div id={Id} className='card-content'>
				<span className='card-title activator grey-text text-darken-4'>
					{Title}
				</span>
				<p>{Year} <span className='right'>{Type}</span></p>
			</div>
		</div>
	)
}
