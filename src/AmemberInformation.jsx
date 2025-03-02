export function AmemberInformation({ selectMember, memberInfo }) {

    // selectedMember থেকে Meal অ্যারে বের করো
    const selectedMember = memberInfo.find((info) => info.id === selectMember);
    const mealArray = selectedMember ? selectedMember.Meal : [];

    return (
        <>
            <div className="home-tabel_wrapper">
                <div className="flex a-member">
                    <h2>User Name : <span>{selectedMember?.memberName}</span></h2>
                    <div className="width-280 info-box">
                        <h4>Email : <span className="email">{selectedMember?.memberEmail}</span> </h4>
                        <h4>Phone : <span className="phone">{selectedMember?.memberNumber}</span></h4>
                        <h4>NID : <span className="nid">{selectedMember?.memberNID}</span></h4>
                    </div>
                </div>
                <div className="flex border-bottom table-header">
                    <div className="width-280"><h3>Date</h3></div>
                    <div className="width-280"><h3>Daily Meal Rate</h3></div>
                    <div className="width-280"><h3>Daily Meal</h3></div>
                    <div className="width-280"><h3>Daily Food Expenses</h3></div>
                </div>

                {/* mealArray যদি থাকে, তবে রেন্ডার করো */}
                {mealArray?.map((meal, index) => (
                    <div key={index} className="flex border-bottom table-content">
                        <div className="width-280 border-right">
                            <p>{meal.date}</p>
                        </div>
                        <div className="width-280 border-right">
                            <p>84</p> {/* Daily Meal Rate */}
                        </div>
                        <div className="width-280 border-right">
                            <p>{meal.Meal}</p> {/* Meal Description */}
                        </div>
                        <div className="width-280">
                            <p>252</p> {/* Daily Food Expenses */}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
