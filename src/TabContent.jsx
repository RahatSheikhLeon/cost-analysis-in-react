import { Home } from "./Home";
import { AddMeal } from "./AddMeal";
import { AddRecord } from "./AddRecord";
import { AddPeople } from "./AddPeople";
import { useState } from "react";
export function TabContent({toggle}) {
    return (
        <>
        <div className={toggle === 1 ? "show-content" : "content"}>
            <Home toggle={toggle}  data = {memberInfoArr} />
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
            <AddPeople toggle={toggle} data = {memberInfoArr} />
            
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
            <AddMeal toggle={toggle}/>
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
            <AddRecord toggle={toggle}/>
        </div>
    </>
    )
}