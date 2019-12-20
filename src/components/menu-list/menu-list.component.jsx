import React from 'react'

import './menu-list.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

export default function MenuList () {
    return (
        <div className='menu-list'>
            <MenuItem>Presupuestos</MenuItem>
        </div>
    )
}