import { TableContent } from "./TableContent"
import { PersonSelector } from "./PersonSelector"
import { useState } from "react"
import { AmemberInformation } from "./AmemberInformation"



export function Home({ memberInfo }) {
    // console.log("member INfo in home", memberInfo)
    // const [allMealValue, setAllMealVaue]= useState('0')
    // const [allRecordValue, setAllRecordVaue]= useState('0')
    // console.log(
    //     'test allMealValue', allMealValue
    // )

    const [perPersoneTotalRecord, setPerPersoneTotalRecord] = useState()


    const setMember = memberInfo.map((info, index) => (
        <TableContent
          key={index}
          memberInfo={info}
          setPerPersoneTotalRecord = {setPerPersoneTotalRecord}
        />
      ));

    const [selectMember, setSelectMember] = useState('all')


    // console.log('memberinfo: ', memberInfo)
    const calculateMeal = () => {
        let total = 0
        if (memberInfo.length > 0) {
            memberInfo.forEach((item, index) => {
                if (item.Meal && item.Meal.length > 0) {
                    item.Meal.forEach((meal, mealIndex) => {
                        if (meal.Meal) {
                            total += parseInt(meal.Meal)
                        }
                    })
                }
            })
        }
        return total
    }


    const calculateAmount = () => {
        let total = 0
        if (memberInfo.length > 0) {
            memberInfo.forEach((item, index) => {
                if (item.Record && item.Record.length > 0) {
                    item.Record.forEach((record, recordIndex) => {
                        if (record.record) {
                            total += parseInt(record.record)
                        }
                    })
                }
            })
        }
        return total
    }


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
                    <div className="width-50 border-right"><h4 className="flex align-item_center">Total Meal : <span className="total-meal">{calculateMeal()}</span></h4></div>
                    <div className="width-50 "><h4 className="flex align-item_center">Total TK : <span className="total-tk">{calculateAmount()}</span></h4></div>
                </div>

                 </> 
                 :
                  <>
                    <AmemberInformation selectMember = {selectMember} memberInfo = {memberInfo} mealCount = {calculateMeal()} recordCount = {calculateAmount() } perPersoneTotalRecord = {perPersoneTotalRecord} />
                 </>}
            </div>
        </>
    )
}