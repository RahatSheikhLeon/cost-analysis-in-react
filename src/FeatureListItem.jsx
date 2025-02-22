import { useState } from "react";

export function FeatureListItem({ toggle,  setToggle }) {

    const [isActive] = useState(1)
    return (
        <>
            <li className={`feature-list_item ${toggle === 1 ? 'active' : ''}`}onClick={() => setToggle(1)}>Home</li>
            <li className="feature-list_item" onClick={() => setToggle(2)}>Add People</li>
            <li className="feature-list_item" onClick={() => setToggle(3)}>Add Record</li>
            <li className="feature-list_item" onClick={() => setToggle(4)}>Meal Record</li>
        </>
    );
}
