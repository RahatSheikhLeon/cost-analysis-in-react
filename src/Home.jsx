import { TableContent } from "./TableContent"
import { PersonSelector } from "./PersonSelector"
import { useState } from "react"
import { AmemberInformation } from "./AmemberInformation"
export function Home({ memberInfo }) {

    let setMember = memberInfo.map((info, index) => {
        return <TableContent key={index} memberInfo={info} />
    })
    const [ selectMember, setSelectValue ] = useState('all');
    let Amember ;

    switch (selectMember) {
        case 'all':
            Amember = console.log('hello world')
            break;

        case memberInfo[0]?.id:
            Amember = <AmemberInformation />
            break;

    }




    return (
        <>
            <div className="home-tabel_wrapper">
                <PersonSelector memberInfo = {memberInfo} selectMember={selectMember} setSelectValue = {setSelectValue} />
                <div className="flex border-buttom table-header">
                    <div className="width-280"><h3>Month Name</h3></div>
                    <div className="width-280"><h3> User Name </h3></div>
                    <div className="width-280"><h3>Meal</h3></div>
                    <div className="width-280"><h3>Amount</h3></div>
                </div>
                {setMember}
                <AmemberInformation memberInfo = {memberInfo} />
            </div>

        </>
    )
}