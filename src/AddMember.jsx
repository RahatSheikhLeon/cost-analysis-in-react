export function AddMember({ memberInfo, setMemberInfo }) {

    const dataHandeler = (e) => {
        const { name, value } = e.target
        console.log([name], value)
    }


    return (
        <form>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Member Name"
                value={setMemberInfo.memberName}
                onChange={dataHandeler}
            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member Phone Number"
                value={setMemberInfo.memberPhone}
                onChange={dataHandeler}
            />

            <input
                type="email"
                className="form-control"
                placeholder="Enter Member Email"
                value={setMemberInfo.memberEmail}
                onChange={dataHandeler}
            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member NID"
                value={setMemberInfo.memberNID}
                onChange={dataHandeler}
            />

            <button type="button" className="add-btn" >Add Member</button>
        </form>
    )
}