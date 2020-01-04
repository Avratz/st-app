import React from 'react'
import { Button } from 'antd'

class AddPresupuesto extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render () {
        return (
			<div className="presupuesto-page container">
				<div className="columns is-vcentered">
					<h2 className="column is-size-2">Crear un nuevo presupuesto</h2>
					<div className="column is-2 has-text-right">
						<button className="button is-primary is-small" onClick={this.props.handleToggle}>VOLVER</button>
					</div>
				</div>
                <div className="columns">
                    <div className="column is-12">
                        <div className="field">
                            <label className="label">Titulo</label>
                            <input class="input" type="text" placeholder="Mesada de granito gris mara para cocina" />
                        </div>
                    </div>     
                </div>
                <div className="columns">
                    <div className="column is-6">
                        <div className="field">
                            <label className="label">Cliente</label>
                            <div className="control has-icons-right">
                                <input className="input" type="text" placeholder="Buscar el cliente..." />
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
                                <input className="input" type="text" placeholder="Buscar el arquitecto..." />
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

export default AddPresupuesto