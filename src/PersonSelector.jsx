
export function PersonSelector({ memberInfo,  setSelectValue  }) {

    return (
        <select onChange={(e) => setSelectValue(e.target.value)} className="form-control_50">
            <option value="all">ALL</option>
            {memberInfo.map((info, index) => (
                <option key={index} value={info.memberName}>{info.memberName}</option>
            ))}
        </select>
    );
}
