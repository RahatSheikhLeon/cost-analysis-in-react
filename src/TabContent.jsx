import { useState } from "react"

import { Home } from "./Home"
import { AddRecord } from "./AddRecord"
import { AddMeal } from "./AddMeal"
import { AddMember } from "./AddMember"
export function TabContent({toggle}){

    const [memberInfo, setMemberInfo] = useState([]);
    const [record, setRecord] = useState([]);
    const [meal, setMeal] = useState([]);

//     const newArr = [
// {
//     memberInfo,
//     record,
//     meal
// }
//     ]

    // console.log(newArr)r

    let content;

    switch (toggle){
        case 1:
        content = <Home toggle ={toggle} memberInfo = {memberInfo} />
        break;

        case 2:
        content = <AddRecord toggle ={toggle} record={record} setRecord={setRecord}/>
        break;

        case 3:
        content = <AddMeal toggle = {toggle}  meal={meal}  setMeal={setMeal} />
        break;

        case 4:
        content = <AddMember toggle = {toggle} memberInfo = {memberInfo} setMemberInfo = {setMemberInfo} />
        break;

    }
    return(
        <>
          {content}
        </>
    )
}