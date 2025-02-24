import { useState } from "react"

import { Home } from "./Home"
import { AddRecord } from "./AddRecord"
import { AddMeal } from "./AddMeal"
import { AddMember } from "./AddMember"
export function TabContent({toggle}){

    const [memberInfo, setMemberInfo] = useState(
        {
            memberName : '',
            memberNumber: '',
            memberEmail : '',
            memberNID  : '',
        }
    )

    let content;


    switch (toggle){
        case 1:
        content = <Home toggle ={toggle} memberInfo = {memberInfo} />
        break;

        case 2:
        content = <AddRecord toggle ={toggle} />
        break;

        case 3:
        content = <AddMeal toggle = {toggle} />
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