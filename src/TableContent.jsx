
export function TableContent({ memberInfo }) {

     const months = [
            "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
      ]
    
      const newMonths = new Date().getMonth()
      const currentMonth = months[newMonths]

    return (
        <div className="flex border-buttom table-content">
            <div className="width-280 border-right">
                <p>{currentMonth}</p>
            </div>
            <div className="width-280 border-right">
                <p>{memberInfo.memberName}</p>
            </div>
            <div className="width-280 border-right">
                <p></p>
            </div>
            <div className="width-280">
                <p>500</p>
            </div>
        </div>
    )
}