import React from 'react'
import './navbar.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

import { Layout as Header} from 'antd'

export default function Navbar() {
	return (
		<Header className="navbar ma-0">
			<div className="container flex-between-center">
				<h1>ST</h1>
				<CustomButton>Salir</CustomButton>
			</div>
		</Header>
	)
}
