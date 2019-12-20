import React from 'react'

import './menu-item.styles.scss'

export default function MenuItem({ children, imgUrl }) {
	return (
		<div className="menu-item" style={{ backgroundImage: `url(${imgUrl})` }}>
			<div className="shadow-bg"></div>
			<h3>{children}</h3>
		</div>
	)
}
