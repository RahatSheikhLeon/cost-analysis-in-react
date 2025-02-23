import { useState } from "react";

export function FeatureListItem({ toggle,  setToggle }) {
    return (
        <>
            <li className={`feature-list_item ${toggle === 1 ? 'active' : ''}`}onClick={() => setToggle(1)}>Home</li>
            <li className={`feature-list_item ${toggle === 2 ? 'active' : ''}`} onClick={() => setToggle(2)}>Add People</li>
            <li className={`feature-list_item ${toggle === 3 ? 'active' : ''}`} onClick={() => setToggle(3)}>Add Record</li>
            <li className={`feature-list_item ${toggle === 4 ? 'active' : ''}`} onClick={() => setToggle(4)}>Meal Record</li>
        </>
    );
}
