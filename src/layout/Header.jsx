import React from 'react'

export default function Header() {
	return (
		<nav className='deep-purple'>
			<div className='nav-wrapper'>
				<a className='brand-logo left' href=''>React movies</a>
				<ul id='nav-mobile' className='hide-on-med-and-down right'>
					<li><a href='collapsible.html'>Repo</a></li>
				</ul>
			</div>
		</nav>
	)
}

