import { TableContent } from "./TableContent"
import { PersonSelector } from "./PersonSelector"

export function Home({ memberInfo }) {

let newArr = memberInfo.map((info, index) => {
    return <TableContent key={index} memberInfo = {info} />
}) 
    return (
        <>
            <div className="home-tabel_wrapper">
                <PersonSelector />
                <div className="flex border-buttom table-header">
                    <div className="width-280"><h3>Month Name</h3></div>
                    <div className="width-280"><h3> User Name </h3></div>
                    <div className="width-280"><h3>Meal</h3></div>
                    <div className="width-280"><h3>Amount</h3></div>
                </div>
                {newArr}
            </div>
        </>
    )
}