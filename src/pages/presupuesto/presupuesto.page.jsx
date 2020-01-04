import React from 'react'
import Axios from 'axios'

import './presupuesto.styles.scss'

import AddPresupuesto from './add/presupuesto.add.page'


import { Button, Table } from 'antd'


export default class PresupuestoPage extends React.Component {
	constructor() {
		super()
		this.state = {
			presupuestos: [{ title: '', description: '' }], //Redux will handle this
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
					}, () => {
                        console.log(this.state)
                    })
                }
            })
            .catch(err => console.log(err))
	}

	handleToggle = (event) => {
		event.preventDefault()
		this.setState({
			...this.state,
			newPresupuesto: !this.state.newPresupuesto
		})
	}

	render() {

		const { newPresupuesto, presupuestos } = this.state
		const dataSource = [
			{
			  key: '1',
			  name: 'Mike',
			  age: 32,
			  address: '10 Downing Street',
			},
			{
			  key: '2',
			  name: 'John',
			  age: 42,
			  address: '10 Downing Street',
			},
		  ];
		  
		  const columns = [];

		presupuestos.map((presupuesto, key) => {
			Object.getOwnPropertyNames(presupuesto).map(elem => 
				columns.push({
					title: elem,
					dataIndex: elem,
					key: elem
				})
			)
			
		})

		if (newPresupuesto) {
			return (
				<AddPresupuesto handleToggle={this.handleToggle} />
			)
		} else {
			return (
				<div className="presupuesto-page container py-2">
					<div className="flex-between-center py-1">
						<h2 className="st-h2">Ultimos presupuestos</h2>
						<Button type="primary" icon="plus" onClick={this.handleToggle}/>
					</div>
					
					<Table dataSource={dataSource} columns={columns} />;
				</div>
			)
		}

	}
}
