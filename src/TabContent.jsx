import { useState, useEffect } from "react";
import { Home } from "./Home";
import { AddRecord } from "./AddRecord";
import { AddMeal } from "./AddMeal";
import { AddMember } from "./AddMember";
import { Setting } from "./Setting";

export function TabContent({ toggle }) {
    const [memberInfo, setMemberInfo] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("memberInfo")) || [];
        setMemberInfo(data);
    }, []);

    useEffect(() => {
        if (memberInfo.length > 0) {
            localStorage.setItem("memberInfo", JSON.stringify(memberInfo));
        }
    }, [memberInfo]);

    let content;
    switch (toggle) {
        case 1:
            content = <Home toggle={toggle} memberInfo={memberInfo} />;
            break;
        case 2:
            content = <AddRecord toggle={toggle} memberInfo={memberInfo} setMemberInfo={setMemberInfo} />;
            break;
        case 3:
            content = <AddMeal toggle={toggle} memberInfo={memberInfo} setMemberInfo={setMemberInfo} />;
            break;
        case 4:
            content = <AddMember toggle={toggle} memberInfo={memberInfo} setMemberInfo={setMemberInfo} />;
            break;

        case 5:
            content = <Setting toggle={toggle} memberInfo = {memberInfo} setMemberInfo = {setMemberInfo} />
            break;
            
        default:
            content = <Home toggle={toggle} memberInfo={memberInfo} />;
    }

    return (
        <>
            {content}
           
        </>
    );
}
