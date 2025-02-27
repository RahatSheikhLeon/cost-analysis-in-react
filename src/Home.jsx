import { TableContent } from "./TableContent"
import { PersonSelector } from "./PersonSelector"
import { useState } from "react"
import { AmemberInformation } from "./AmemberInformation"
export function Home({ memberInfo }) {

    let setMember = memberInfo.map((info, index) => {
        return <TableContent key={index} memberInfo={info} />
    })

    const [selectMember, setSelectValue] = useState('all');



    return (
        <>
            <div className="home-tabel_wrapper">
                <PersonSelector memberInfo={memberInfo} selectMember={selectMember} setSelectValue={setSelectValue} />

                {memberInfo[0]?.id === selectMember ? <><AmemberInformation memberInfo={memberInfo} selectMember={selectMember} /></> : <><div className="flex border-buttom table-header">
                    <div className="width-280"><h3>Month Name</h3></div>
                    <div className="width-280"><h3> User Name </h3></div>
                    <div className="width-280"><h3>Meal</h3></div>
                    <div className="width-280"><h3>Amount</h3></div>
                </div>
                    {setMember}
                </>}
            </div>

        </>
    )
}