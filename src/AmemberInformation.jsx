export function AmemberInformation({memberInfo, selectMember}) {




    return (
        <>
            <div className="home-tabel_wrapper">
                <div className="flex a-member">
                    <h2>User Name : <span>name</span></h2>
                    <div className="width-280 info-box">
                        <h4>Email : <span className="email">leon@gmail.com</span> </h4>
                        <h4>Phone : <span className="phone">0178</span></h4>
                        <h4>NID : <span className="nid">98329390</span></h4>
                    </div>
                </div>
                <div className="flex border-buttom table-header">
                    <div className="width-280"><h3>Date</h3></div>
                    <div className="width-280"><h3>Daily Meal Reat</h3></div>
                    <div className="width-280"><h3>Daily Meal</h3></div>
                    <div className="width-280"><h3>Daily food expenses</h3></div>
                </div>

                <div className="flex border-buttom table-content">
                    <div className="width-280 border-right">
                        <p>18/02/2025</p>
                    </div>
                    <div className="width-280 border-right">
                        <p>84</p>
                    </div>
                    <div className="width-280 border-right">
                        <p>3</p>
                    </div>
                    <div className="width-280">
                        <p>252</p>
                    </div>
                </div>
            </div>

        </>
    )
}