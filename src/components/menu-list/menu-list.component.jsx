import React from 'react'

import './menu-list.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

const menuItems = [
	{
		category: 'arquitectos',
		imgUrl:
			'https://microjurisar.files.wordpress.com/2015/03/shutterstock_126803474.jpg'
	},
	{
		category: 'balance',
		imgUrl:
			'http://contadoresperu.net/wp-content/uploads/2017/03/libors-contable-que-libros-contable-debo-llevar-en-el-regimen-mype-2017-sunat.jpg'
	},
	{
		category: 'catalogo',
		imgUrl: 'https://www.degacor.com/images/570x510productos/64775.jpg'
	},
	{
		category: 'clientes',
		imgUrl:
			'https://i.channeldailynews.com/wp-content/uploads/2019/11/y745huijrw.jpg'
	},
	{
		category: 'compras',
		imgUrl:
			'https://q8dominicana.com/wp-content/uploads/2017/10/Q8-DOMINICANA-LUBRICANTES-Y-ACEITES-PARA-VEHICULOS-PESADOS-DATOS-MAS-CURIOSOS-SOBRE-CAMIONES-A-NIVEL-MUNDIAL-900x480.jpg'
	},
	{
		category: 'gastos',
		imgUrl: 'http://catamarcartv.com/wp-content/uploads/2019/12/Ecogas.jpg'
	},
	{
		category: 'obras',
		imgUrl: 'http://www.technistone.com.ar/images/mesadas/cocina/16-big.jpg'
	},
	{
		category: 'ordenes',
		imgUrl:
			'https://www.prussiani.com/wp-content/uploads/2019/06/m%C3%A1quinas-para-agujeros-de-lavabos-mirror.jpg'
	},
	{
		category: 'presupuestos',
		imgUrl:
			'https://www.centralenlanube.com/cloudpbx/wp-content/uploads/2018/06/servicio-al-cliente-artic-junio.jpg'
	},
	{
		category: 'proveedores',
		imgUrl: 'https://dla.cdncimeco.com/uploads/2018/11/image5bf3f1b67fe10.jpg'
	},
	{
		category: 'stock',
		imgUrl:
			'https://4.bp.blogspot.com/-0kd4Slraso0/WjATnoFtiwI/AAAAAAAAAas/pRcO7iVL-Mc2TqpKEGh65DGvcI8d6tipQCLcBGAs/s1600/1.jpg'
	},
	{
		category: 'ventas',
		imgUrl:
			'https://resizer.iprofesional.com/unsafe/640x/https://assets.iprofesional.com/assets/jpg/2019/01/472284.jpg'
	}
]

export default function MenuList() {
	return (
		<div className="menu-list">
			{menuItems.map(item => {
				return <MenuItem imgUrl={item.imgUrl}>{item.category}</MenuItem>
			})}
		</div>
	)
}
