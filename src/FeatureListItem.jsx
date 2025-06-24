import { NavLink } from "react-router-dom"

export function FeatureListItem() {
    return (
        <>
            <NavLink to="/" className= {({ isActive }) => `nav-list ${isActive ? "active" : '' }`}>  Home </NavLink>
            <NavLink to="/add-record" className= {({ isActive }) => `nav-list ${isActive ? "active" : '' }`}>   Add Record </NavLink>
            <NavLink to="/add-meal" className= {({ isActive }) => `nav-list ${isActive ? "active" : '' }`}> Add Meal</NavLink>
            <NavLink to="/add-member" className= {({ isActive }) => `nav-list ${isActive ? "active" : '' }`}>  Add Member</NavLink>
            <NavLink to="/setting" className= {({ isActive }) => `nav-list ${isActive ? "active" : '' }`}>  Setting</NavLink>
        </>
    )
}