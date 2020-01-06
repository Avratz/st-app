import React from 'react'
import { Button, Row, Col, Steps, message } from 'antd'

const { Step } = Steps

const Primero = () => {
	return (
		<>
			<Row>
				<Col>
					<div className="field">
						<label className="label">Titulo</label>
						<input
							class="input"
							type="text"
							placeholder="Mesada de granito gris mara para cocina"
						/>
					</div>
				</Col>
			</Row>
		</>
	)
}

const steps = [
	{
		title: 'Datos del cliente',
		content: <Primero />
	},
	{
		title: 'Datos del Prespuesto',
		content: ''
	},
	{
		title: 'Confirmar presupuesto',
		content: ''
	}
]

class AddPresupuesto extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			current: 0
		}
	}

	next() {
		const current = this.state.current + 1
		this.setState({ current })
	}

	prev() {
		const current = this.state.current - 1
		this.setState({ current })
	}

	render() {
		const { current } = this.state
		return (
			<div className="presupuesto-page container py-2">
				<div className="flex-between-center py-1">
					<h2 className="st-h2">Crear un nuevo presupuesto</h2>
					<Button
						type="primary"
						icon="left"
						onClick={this.props.handleToggle}
					/>
				</div>
				<Steps current={current}>
					{steps.map(item => (
						<Step key={item.title} title={item.title} />
					))}
				</Steps>
				<div className="steps-content">{steps[current].content}</div>
				<div className="steps-action">
					{current < steps.length - 1 && (
						<Button type="primary" onClick={() => this.next()}>
							Next
						</Button>
					)}
					{current === steps.length - 1 && (
						<Button
							type="primary"
							onClick={() => message.success('Processing complete!')}
						>
							Done
						</Button>
					)}
					{current > 0 && (
						<Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
							Previous
						</Button>
					)}
				</div>
			</div>
		)
	}
}

/** 
	render() {
		return (
			

				<div className="columns">
					<div className="column is-6">
						<div className="field">
							<label className="label">Cliente</label>
							<div className="control has-icons-right">
								<input
									className="input"
									type="text"
									placeholder="Buscar el cliente..."
								/>
								<span className="icon is-small is-right">
									<i className="fas fa-check"></i>
								</span>
							</div>
						</div>
					</div>
					<div className="column is-6">
						<div className="field">
							<label className="label">Arquitecto</label>
							<div className="control has-icons-right">
								<input
									className="input"
									type="text"
									placeholder="Buscar el arquitecto..."
								/>
								<span className="icon is-small is-right">
									<i className="fas fa-check"></i>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="columns">
					<div className="column is-6">
						<div className="field">
							<label className="label">Material</label>
							<input class="input" type="text" placeholder="Material" />
						</div>
					</div>
					<div className="column is-6">
						<div className="field">
							<label className="label">Moldura</label>
							<input class="input" type="text" placeholder="Moldura" />
						</div>
					</div>
				</div>
				<div className="columns">
					<div className="column is-6">
						<div className="field">
							<label className="label">Zocalo</label>
							<input class="input" type="text" placeholder="Zocalo" />
						</div>
					</div>
					<div className="column is-6">
						<div className="field">
							<label className="label">Frentin</label>
							<input class="input" type="text" placeholder="Frentin" />
						</div>
					</div>
				</div>
				<div className="columns">
					<div className="column is-4">
						<div className="field">
							<label className="label">Pileta</label>
							<input class="input" type="text" placeholder="Pileta" />
						</div>
					</div>
					<div className="column is-4">
						<div className="field">
							<label className="label">Anafe</label>
							<input class="input" type="text" placeholder="Anafe" />
						</div>
					</div>
					<div className="column is-4">
						<div className="field">
							<label className="label">Griferia</label>
							<input class="input" type="text" placeholder="Griferia" />
						</div>
					</div>
				</div>
				<div className="columns">
					<Button type="primary">Button</Button>
				</div>
			</div>
		)
	}
}
**/

export default AddPresupuesto
