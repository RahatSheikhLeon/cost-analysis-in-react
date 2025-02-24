
export function AddMember({ memberInfo, setMemberInfo }) {
    const dataHandeler = (e) => {
        const { name, value } = e.target;
        setMemberInfo(prevState => ({
            ...prevState,
            [name]: value
        })
        )

    }
    const dataTest = memberInfo.memberName == '' || memberInfo.memberNumber == '' || memberInfo.memberEmail == '' || memberInfo.memberNID == '';
    const submit = () => {
        if (dataTest) {
            alert('enter data')
            return
        }
    }


    return (
        <form>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Member Name"
                name="memberName"
                value={memberInfo.memberName || ""}
                onChange={dataHandeler}
            // onChange={(e) => setMemberInfo({...memberInfo, memberName : e.target.value})} 

            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member Phone Number"
                name="memberNumber"
                value={memberInfo.memberNumber || ""}
                onChange={dataHandeler}
            // onChange={(e) => setMemberInfo({...memberInfo,  memberNumber: e.target.value})} 
            />

            <input
                type="email"
                className="form-control"
                placeholder="Enter Member Email"
                name="memberEmail"
                value={memberInfo.memberEmail || ""}
                onChange={dataHandeler}
            // onChange={(e) => setMemberInfo({...memberInfo, memberEmail: e.target.value})} 
            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member NID"
                name="memberNID"
                value={memberInfo.memberNID || ""}
                onChange={dataHandeler}
            // onChange={(e) => setMemberInfo({...memberInfo, memberNID: e.target.value})} 
            />

            <button type="button" className="add-btn" onClick={submit} >Add Member</button>
        </form>
    )
}