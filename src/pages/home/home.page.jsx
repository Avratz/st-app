import React from 'react'

import './home.styles.scss'

import MenuList from '../../components/menu-list/menu-list.component'

import { Layout as Content } from 'antd'

export default function HomePage(params) {
	return (
		<Content className="home-page py-2 container">
			<h2 className="st-h2 py-1 text-center">Bienvenido al menu principal</h2>
			<MenuList />
		</Content>
	)
}
