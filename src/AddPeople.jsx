import { useState } from "react"

export function AddPeople() {
    // [memberInfoArr, setMemberInfoinArr]
    const [memberInfoArr, setMemberInfoinArr] = useState(
        [
            {
                memberName: '',
                memberPhone: '',
                memberEmail: '',
                memberNID: ''
            }
        ]

    )

    function test(){
        console.log(memberInfoArr)
    }

    return (
        <>
            <h2>ADD Member : </h2>
            <form>
                <input type="text"
                    placeholder="Enter The Member's Name"
                    className="form-control"
                    value={memberInfoArr.memberName}
                    onChange={(e) => setMemberInfoinArr(e.target.value)}
                />
                <input type="number"
                    placeholder="Enter The Member's Phone Number"
                    className="form-control"
                    value={memberInfoArr.memberPhone}
                    onChange={(e) => setMemberInfoinArr(e.target.value)}
                />
                <input type="email"
                    placeholder="Enter The Member's Email"
                    className="form-control"
                    value={memberInfoArr.memberEmail}
                    onChange={(e) => setMemberInfoinArr(e.target.value)}
                />
                <input type="number"
                    placeholder="Enter The Member's NID"
                    className="form-control"
                    value={memberInfoArr.memberNID}
                    onChange={(e) => setMemberInfoinArr(e.target.value)}
                />

                <button type="button" onClick={test()}>Add Info</button>
            </form>
        </>
    )
}