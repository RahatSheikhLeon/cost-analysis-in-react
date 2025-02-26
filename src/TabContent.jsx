import { useState } from "react"

import { Home } from "./Home"
import { AddRecord } from "./AddRecord"
import { AddMeal } from "./AddMeal"
import { AddMember } from "./AddMember"

export function TabContent({ toggle }) {

    const [memberInfo, setMemberInfo] = useState([]);
    const [record, setRecord] = useState([]);
    const [meal, setMeal] = useState([]);

    console.log(memberInfo[0]?.id)
    //     const newArr = [
    // {
    //     memberInfo,
    //     record,
    //     meal
    // }
    //     ]

    // console.log(newArr)r

    let content;

    switch (toggle) {
        case 1:
        
            content = <Home toggle={toggle} memberInfo={memberInfo} />
            break;

        case 2:
            // setMemberInfo={setMemberInfo} 
            content = <AddRecord toggle={toggle} memberInfo={memberInfo} record={record} setRecord={setRecord} />
            break;

        case 3:
            // setMemberInfo={setMemberInfo}
            content = <AddMeal toggle={toggle} memberInfo={memberInfo} meal={meal} setMeal={setMeal} />
            break;

        case 4:
            content = <AddMember toggle={toggle} memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
            break;

    }
    return (
        <>
            {content}
        </>
    )
}