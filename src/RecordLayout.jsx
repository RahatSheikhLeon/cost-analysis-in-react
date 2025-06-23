import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const RecordLayout = () => {
  return (
	<div>
		<h1>Add and Update Record</h1>
		<ul>
			<li><Link to="/add-record/records" >Records </Link></li>
		</ul>

		<Outlet />
	</div>
  )
}

export default RecordLayout