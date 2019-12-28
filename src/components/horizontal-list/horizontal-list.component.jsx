import React from 'react'

import './horizontal-list.styles.scss'

import HorizontalItem from '../horizontal-item/horizontal-item.component'

export default function HorizontalList({data, tableHeader, tableContent}) {
	
	return (
		<div className="horizontal-list">
			<table className="table">
				{
					tableHeader && (
						<thead>
							<tr>
								{tableHeader.map((elem, i) => {
									if (elem.abbr) {
										return <th key={elem.title+i}><abbr title={elem.title}>{elem.abbr}</abbr></th>
									} else {
										return <th key={elem.title+i}>{elem.title}</th>
									}
								})}
							</tr>
						</thead>
					)
				}
				{
					tableContent && (
						<tbody>
							{tableContent.map((elem, indx) => {
								console.log(elem)
								return (
									<tr>
									</tr>
								)
							})
							}		
						</tbody>
					)
				}
				

			</table>
			<HorizontalItem />
		</div>
	)		
}
