import React from 'react'

import './menu-item.styles.scss'

export default function MenuItem ({children}) {
    return (
        <div className="menu-item">
            {children}
        </div>
    )
}