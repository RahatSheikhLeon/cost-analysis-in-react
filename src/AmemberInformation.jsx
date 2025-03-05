export function AmemberInformation({ selectMember, memberInfo, mealCount, recordCount, perPersoneTotalRecord }) {
    const mealReat = recordCount / mealCount;
    const formattedMealReat = mealReat.toFixed(2); // Keeping two decimal places
    const selectedMember = memberInfo.find((info) => info.id === selectMember);
    const mealArray = selectedMember ? selectedMember.Meal : [];

    // Store daily meal expenses
    let perDayMealReatArray = mealArray?.map(meal => parseFloat(formattedMealReat) * meal.Meal);

    // Calculate total expenses and balance
    const totalExpenses = perDayMealReatArray?.reduce((total, cost) => total + cost, 0);
    // console.log(perPersoneTotalRecord)
    const balance = perPersoneTotalRecord - totalExpenses;

    return (
        <>
            <div className="home-tabel_wrapper">
                <div className="flex a-member">
                    <h2>User Name: <span>{selectedMember?.memberName}</span></h2>
                    <div className="width-350 info-box">
                        <h4>Email: <span className="email">{selectedMember?.memberEmail}</span></h4>
                        <h4>Phone: <span className="phone">{selectedMember?.memberNumber}</span></h4>
                        <h4>NID: <span className="nid">{selectedMember?.memberNID}</span></h4>
                    </div>
                </div>

                {/* Table Header */}
                <div className="flex border-buttom table-header">
                    <div className="width-280"><h3>Date</h3></div>
                    <div className="width-280"><h3>Daily Meal Rate</h3></div>
                    <div className="width-280"><h3>Daily Meal</h3></div>
                    <div className="width-280"><h3>Daily Food Expenses</h3></div>
                </div>

                {/* Meal Data */}
                {mealArray?.map((meal, index) => (
                    <div key={index} className="flex border-buttom table-content">
                        <div className="width-280 border-right">
                            <p>{meal.date}</p>
                        </div>
                        <div className="width-280 border-right">
                            <p>{formattedMealReat}</p>
                        </div>
                        <div className="width-280 border-right">
                            <p>{meal.Meal}</p>
                        </div>
                        <div className="width-280">
                            <p>{perDayMealReatArray[index]}</p>
                        </div>
                    </div>
                ))}

                {/* Total Cost Section */}
                <div className="flex border-buttom">
                    <div className="width-50 border-right">
                        <p>
                            <b>
                                <span>Total cost of </span> {selectedMember?.memberName} :
                                <span> {totalExpenses}</span>
                            </b>
                        </p>
                    </div>
                    <div className="width-50">
                        <p>
                            <b>
                                {selectedMember?.memberName} <span>will receive or give:</span>
                                <span style={{ color: balance < 0 ? 'red' : 'green' }}>
                                    {Math.ceil(Math.abs(balance) * 100) / 100} {balance < 0 ? "(Due Amount)" : "(Extra Paid)"}
                                </span>
                            </b>
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
}
