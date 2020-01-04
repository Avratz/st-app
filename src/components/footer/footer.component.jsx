import React from 'react'

import './footer.styles.scss'

import { Layout as FooterLayout } from 'antd'


export default function Footer () {
    return(
        <FooterLayout className='footer'>
            <h1>Marmoleria ST</h1>
            <span>2019</span>
        </FooterLayout>
    )
}