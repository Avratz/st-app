import React from 'react'
import Axios from 'axios'

import './presupuesto.styles.scss'

import AddPresupuesto from './add/presupuesto.add.page'

import { Button, Table } from 'antd'

export default class PresupuestoPage extends React.Component {
	constructor() {
		super()
		this.state = {
			presupuestos: [{ title: '', description: '', key: '' }], //Redux will handle this
			newPresupuesto: false
		}
	}

	componentDidMount() {
		Axios.get('http://localhost:5000/presupuesto/')
			.then(presupuestos => {
				if (presupuestos.data.length > 0) {
					this.setState({
						...this.state,
						presupuestos: [...presupuestos.data]
					})
				}
			})
			.catch(err => console.error(err))
	}

	handleToggle = event => {
		event.preventDefault()
		this.setState({
			...this.state,
			newPresupuesto: !this.state.newPresupuesto
		})
	}

	render() {
		const { newPresupuesto, presupuestos } = this.state

		const columns = []

		Object.getOwnPropertyNames(presupuestos[0]).map(key => {
			if (
				key !== '_id' &&
				key !== 'createdAt' &&
				key !== 'updatedAt' &&
				key !== '__v' &&
				key !== 'key'
			) {
				columns.push({
					title: key,
					dataIndex: key,
					key: key
				})
			}
			return null
		})

		columns.push({
			title: 'Opciones',
			key: 'opciones',
			render: () => {
				return (
					<>
						<Button type="primary" icon="edit" />{' '}
						<Button type="danger" icon="delete" />
					</>
				)
			}
		})

		if (newPresupuesto) {
			return <AddPresupuesto handleToggle={this.handleToggle} />
		} else {
			return (
				<div className="presupuesto-page container py-2">
					<div className="flex-between-center py-1">
						<h2 className="st-h2">Ultimos presupuestos</h2>
						<Button type="primary" icon="plus" onClick={this.handleToggle} />
					</div>
					<Table dataSource={presupuestos} columns={columns} />;
				</div>
			)
		}
	}
}
