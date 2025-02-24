import { TableContent } from "./TableContent"
export function Home() {
    return (
        <>
            <div className="home-tabel_wrapper">
                <div className="flex border-buttom table-header">
                    <div className="width-280"><h3>Month Name</h3></div>
                    <div className="width-280"><h3>Username</h3></div>
                    <div className="width-280"><h3>Meal</h3></div>
                    <div className="width-280"><h3>Amount</h3></div>
                </div>

                <TableContent />

            </div>
        </>
    )
}