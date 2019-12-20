import React from 'react'
import './navbar.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="container">
				<h1>ST</h1>
				<CustomButton>Salir</CustomButton>
			</div>
		</nav>
	)
}
