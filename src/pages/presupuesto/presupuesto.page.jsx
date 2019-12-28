import React from 'react'
import Axios from 'axios'

import './presupuesto.styles.scss'

import HorizontalList from '../../components/horizontal-list/horizontal-list.component'

export default class PresupuestoPage extends React.Component {
	constructor() {
		super()
		this.state = {
			presupuestos: [{ title: '', description: '' }],
		}
	}

	componentDidMount() {
		Axios.get('http://localhost:5000/presupuesto/')
            .then(presupuestos => {
                if (presupuestos.data.length > 0) {
                    this.setState({ presupuestos: [...presupuestos.data] }, () => {
                        console.log(this.state)
                    })
                }
            })
            .catch(err => console.log(err))
	}



	render() {
		const tableHeader = [
			{
				abbr: 'Pos',
				title: 'Posicion'
			},
			{
				abbr: '',
				title: 'Titulo'
			},
			{
				abbr: '',
				title: 'Cliente'
			},
			{
				title: 'Monto'
			}
		]
        return (
			<div className="presupuesto-page container">
				<div className="columns is-vcentered">
					<h2 className="column is-size-2">Ultimos presupuestos</h2>
					<div className="column is-2 has-text-right">
						<button className="button is-primary is-small" onClick={this.handleToggle}>NUEVO PRESUPUESTO</button>
					</div>
				</div>
				<HorizontalList data={this.state.presupuestos} tableHeader={tableHeader} tableContent={this.state.presupuestos}/>
                
			</div>
		)
	}
}
