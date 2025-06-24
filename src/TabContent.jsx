// import { useState, useEffect } from "react";
// import { Home } from "./Home";
// import { AddRecord } from "./AddRecord";
// import { AddMeal } from "./AddMeal";
// import { AddMember } from "./AddMember";
// import { Setting } from "./Setting";
// // import { AmemberInformation } from "./AmemberInformation"


// export function TabContent({ toggle, setToggle }) {
//     const [memberInfo, setMemberInfo] = useState([]);
//     useEffect(() => {
//         const data = JSON.parse(localStorage.getItem("memberInfo")) || [];
//         setMemberInfo(data);
//     }, []);

//     useEffect(() => {
//         if (memberInfo.length > 0) {
//             localStorage.setItem("memberInfo", JSON.stringify(memberInfo));
//         }
//     }, [memberInfo]);

//     let content;

//     switch (toggle) {
//         case 1:
//             content = <Home  memberInfo={memberInfo} setToggle = {setToggle} />;
//             break;
//         case 2:
//             content = <AddRecord memberInfo={memberInfo} setMemberInfo={setMemberInfo} />;
//             break;
//         case 3:
//             content = <AddMeal  memberInfo={memberInfo} setMemberInfo={setMemberInfo} />;
//             break;
//         case 4:
//             content = <AddMember memberInfo={memberInfo} setMemberInfo={setMemberInfo} />;
//             break;

//         case 5:
//             content = <Setting  memberInfo={memberInfo} setMemberInfo={setMemberInfo} />
//             break;
//         // case 6:
//         //     content = <AmemberInformation   memberInfo={memberInfo} />
           
//             break;
//         default:
//             content = <Home  memberInfo={memberInfo} setToggle = {setToggle} />;
//     }

//     return (
//         <>
//             {content}

//         </>
//     );
// }
