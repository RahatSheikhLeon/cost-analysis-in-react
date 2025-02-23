import { Home } from "./Home";
import { AddMeal } from "./AddMeal";
import { AddRecord } from "./AddRecord";
import { AddPeople } from "./AddPeople";
import { useState } from "react";

export function TabContent({toggle}) {
    const [peopleData, setPeopleData] = useState(null);

    console.log('peopleData', peopleData)

    let views;

    switch (toggle) {
        case 1:
        default:
            views = <Home toggle={toggle} />;
            break;
        case 2:
            views = <AddPeople home={<Home toggle={toggle} />} toggle={toggle} setPeopleData={setPeopleData}/>;
            break;
        case 3:
            views = <AddMeal toggle={toggle} />;
            break;
        case 4:
            views = <AddRecord toggle={toggle} />;
            break;
    }

    return (
        <>
            {views}
            {/* { toggle === 1 && <Home toggle={toggle} />}
            { toggle === 2 && <AddPeople toggle={toggle} setPeopleData={setPeopleData} />}
            { toggle === 3 && <AddMeal toggle={toggle} />}
            { toggle === 4 && <AddRecord toggle={toggle} />} */}
            {/* <div className={toggle === 1 ? "show-content" : "content"}>
                <Home toggle={toggle} />
            </div>
            <div className={toggle === 2 ? "show-content" : "content"}>
                <AddPeople toggle={toggle} setPeopleData={setPeopleData} />
            </div>
            <div className={toggle === 3 ? "show-content" : "content"}>
                <AddMeal toggle={toggle}/>
            </div>
            <div className={toggle === 4 ? "show-content" : "content"}>
                <AddRecord toggle={toggle}/>
            </div> */}
        </>
    )
}