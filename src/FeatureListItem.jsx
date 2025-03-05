
export function FeatureListItem({toggle, setToggle}){

    return(
        <>
         <li className={`nav-list ${toggle === 1 ? 'active' : ''}`}
             onClick={ () => setToggle (1)}
             >Home</li>

         <li className={`nav-list ${toggle === 2 ? 'active' : ''}`} 
             onClick={ () => setToggle (2)}
             >Add Record</li>

         <li className={`nav-list ${toggle === 3 ? 'active' : ''}`}
             onClick={ () => setToggle (3)}
             >Add Meal</li>

         <li className={`nav-list ${toggle === 4 ? 'active' : ''}`}
             onClick={ () => setToggle (4)}
             >Add Member</li>
              <li className={`nav-list ${toggle === 5 ? 'active' : ''}`}
             onClick={ () => setToggle (5)}
             >Setting</li>
        </>
    )
}