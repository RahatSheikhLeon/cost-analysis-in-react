import { Link } from "react-router-dom"

export function FeatureListItem({ toggle, setToggle }) {
    return (
        <>
            <Link to="/">  <li className={`nav-list ${toggle === 1 ? 'active' : ''}`}
                onClick={() => setToggle(1)}
            >Home</li></Link>

            <Link to="/add-record">   <li className={`nav-list ${toggle === 2 ? 'active' : ''}`}
                onClick={() => setToggle(2)}
            >Add Record</li></Link>

            <Link to="/add-meal">  <li className={`nav-list ${toggle === 3 ? 'active' : ''}`}
                onClick={() => setToggle(3)}
            >Add Meal</li></Link>

            <Link to="/add-member"><li className={`nav-list ${toggle === 4 ? 'active' : ''}`}
                onClick={() => setToggle(4)}
            >Add Member</li></Link>
            <Link to="/setting"><li className={`nav-list ${toggle === 5 ? 'active' : ''}`}
                onClick={() => setToggle(5)}
            >Setting</li></Link>

             {/* <a href="/">  <li className={`nav-list ${toggle === 1 ? 'active' : ''}`}
                onClick={() => setToggle(1)}
            >Home</li></a>

            <a href="/Add Record">   <li className={`nav-list ${toggle === 2 ? 'active' : ''}`}
                onClick={() => setToggle(2)}
            >Add Record</li></a>

            <a href="/Add Meal">  <li className={`nav-list ${toggle === 3 ? 'active' : ''}`}
                onClick={() => setToggle(3)}
            >Add Meal</li></a>

            <a href="/Add Member"><li className={`nav-list ${toggle === 4 ? 'active' : ''}`}
                onClick={() => setToggle(4)}
            >Add Member</li></a>
            <a href="/Setting"><li className={`nav-list ${toggle === 5 ? 'active' : ''}`}
                onClick={() => setToggle(5)}
            >Setting</li></a> */}
        </>
    )
}