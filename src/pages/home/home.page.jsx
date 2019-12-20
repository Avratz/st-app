import React from 'react'

import './home.styles.scss'

import MenuList from '../../components/menu-list/menu-list.component'

export default function HomePage(params) {
	return (
		<div className="home-page container">
			<h2>Bienvenido al menu principal</h2>
			<MenuList />
		</div>
	)
}
