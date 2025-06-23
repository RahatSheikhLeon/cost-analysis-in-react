import { Link } from "react-router-dom"

export function FeatureListItem({ toggle, setToggle }) {
    return (
        <>
            <Link to="/">  <li className={`nav-list ${toggle === 1 ? 'active' : ''}`}
                onClick={() => setToggle(1)}
            >Home</li></Link>

            <Link to="/Add Record">   <li className={`nav-list ${toggle === 2 ? 'active' : ''}`}
                onClick={() => setToggle(2)}
            >Add Record</li></Link>

            <Link to="/Add Meal">  <li className={`nav-list ${toggle === 3 ? 'active' : ''}`}
                onClick={() => setToggle(3)}
            >Add Meal</li></Link>

            <Link href="/Add Member"><li className={`nav-list ${toggle === 4 ? 'active' : ''}`}
                onClick={() => setToggle(4)}
            >Add Member</li></Link>
            <Link href="/Setting"><li className={`nav-list ${toggle === 5 ? 'active' : ''}`}
                onClick={() => setToggle(5)}
            >Setting</li></Link>
        </>
    )
}