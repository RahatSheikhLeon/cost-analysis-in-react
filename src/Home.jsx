import { useState, useEffect } from "react"
// import { TableContent } from "./TableContent"
import { AmemberInformation } from "./AmemberInformation"


import DataTable from "react-data-table-component"
import { use } from "react";

export function Home({ memberInfo, setToggle }) {

    const lineCount = memberInfo.length

    const [allMember, setAllMember] = useState([]);
    const [filterMember, setFilterMember] = useState(allMember)
    const [oneMember, setOneMember] = useState(true)
    const [memberData, setMemberData] = useState()

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const newMonths = new Date().getMonth();
    const currentMonth = months[newMonths];

    const HandelClick = (member) => {
        setOneMember(false)
        setMemberData(member)
    };

    useEffect(() => {
        if (!memberInfo || memberInfo.length === 0) return;

        const homePageData = memberInfo.map((info) => ({
            MonthName: currentMonth,
            MemberName: info.memberName,
            meal: info.Meal && info.Meal.length > 0
                ? info.Meal.reduce((sum, meal) => sum + parseInt(meal.Meal || 0), 0)
                : 0,
            record: info.Record && info.Record.length > 0
                ? info.Record.reduce((sum, record) => sum + parseInt(record.record || 0), 0)
                : 0,
            action: (
                <>
                    <button onClick={() => HandelClick(info)}>More INFO</button>
                </>
            )
        }));

        setAllMember(homePageData);
    }, [memberInfo]);


    useEffect(() => {

        setFilterMember(allMember);
    }, [allMember]);

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

    const Header = [
        {
            name: 'Month Name',
            selector: row => row.MonthName,

        },
        {
            name: 'User Name',
            selector: row => row.MemberName,
        },
        {
            name: 'Meal',
            selector: row => row.meal,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.record,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => row.action,
        }
    ]

    function searchMember(event) {
        const filter = allMember.filter(row => {
            return row.MemberName && row.MemberName.toLowerCase().includes(event.target.value.toLowerCase());
        });
        setFilterMember(filter);
    }



    return (
        <>

            {oneMember == true ? <div className="home-tabel_wrapper ">
                <div className="flex home-header">

                    <p>Total Members : <span>{lineCount} </span></p>
                    <input type="text" className="form-control_50" style={{ margin: '0px' }} placeholder="Search Member" onChange={searchMember} />
                </div>
                <DataTable
                    columns={Header}
                    data={filterMember}
                    fixedHeader
                />


                <div className="flex border-buttom table-footer">
                    <div className="width-50 border-right"><h4 className="flex align-item_center">Total Meal : <span className="total-meal">{calculateMeal()}</span></h4></div>
                    <div className="width-50 "><h4 className="flex align-item_center">Total TK : <span className="total-tk">{calculateAmount()}</span></h4></div>
                </div>
            </div>
                : null}


            {oneMember == false ? <AmemberInformation memberData={memberData} setOneMember={setOneMember} memberInfo={memberInfo} totalAmounts={calculateAmount()} totalMealReat={calculateMeal()} /> : null}
        </>
    )
}