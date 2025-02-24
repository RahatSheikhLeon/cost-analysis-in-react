
export function TableContent({memberInfo}){
    return(
        <div className="flex border-buttom table-content">
                    <div className="width-280 border-right">
                        <p>February</p>
                    </div>
                    <div className="width-280 border-right">
                        <p>{memberInfo.memberName}</p>
                    </div>
                    <div className="width-280 border-right">
                        <p>3</p>
                    </div>
                    <div className="width-280">
                        <p>500</p>
                    </div>
                </div>
    )
}