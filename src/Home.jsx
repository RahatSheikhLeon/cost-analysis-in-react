import { TableContent } from "./TableContent"
import { PersonSelector } from "./PersonSelector"
import { useState } from "react"
import { AmemberInformation } from "./AmemberInformation"



export function Home({ memberInfo }) {
    console.log("member INfo in home", memberInfo)
    const [allMealValue, setAllMealVaue]= useState('0')
    const [allRecordValue, setAllRecordVaue]= useState('0')
    console.log(
        'test allMealValue', allMealValue
    )
    const setMember = memberInfo.map((info, index) => (
        <TableContent
          key={index}
          memberInfo={info}
          setAllMealVaue={setAllMealVaue}
          setAllRecordVaue={setAllRecordVaue}
        />
      ));

    const [selectMember, setSelectMember] = useState('all')
  

    return (
        <>
            <div className="home-tabel_wrapper">

                <PersonSelector setSelect ={setSelectMember} memberInfoList={memberInfo} />

                {selectMember === 'all'?<> 

                <div className="flex border-buttom table-header">
                    <div className="width-280"><h3>Month Name</h3></div>
                    <div className="width-280"><h3> User Name </h3></div>
                    <div className="width-280"><h3>Meal</h3></div>
                    <div className="width-280"><h3>Amount</h3></div>
                </div>

                {setMember}
                <div className="flex border-buttom table-footer">
                    <div className="width-280"><h4 className="flex align-item_center">Total Meal : <span className="total-meal">{allMealValue}</span></h4></div>
                    <div className="width-280"><h4 className="flex align-item_center">Total TK : <span className="total-tk">{allRecordValue}</span></h4></div>
                </div>

                 </> 
                 :
                  <>
                    <AmemberInformation selectMember = {selectMember} memberInfo = {memberInfo} />
                 </>}
            </div>
        </>
    )
}