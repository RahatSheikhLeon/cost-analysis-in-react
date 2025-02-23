import { useState } from "react"

export function AddPeople() {
    // [memberInfoArr, setMemberInfoinArr]
    const [memberInfoArr, setMemberInfoinArr] = useState(

        {
            memberName: '',
            memberPhone: '',
            memberEmail: '',
            memberNID: ''
        }


    )

    function test() {
        // console.log(memberInfoArr)
        if (memberInfoArr.memberName === '' || memberInfoArr.memberPhone == '' || memberInfoArr.memberEmail == '' || memberInfoArr.memberNID == '') {
            alert('Enter data')
            console.log('test')
            return;
        }
        console.log(memberInfoArr)
        setMemberInfoinArr({
            memberName: '',
            memberPhone: '',
            memberEmail: '',
            memberNID: ''
        });
    }

    const handelChange = (e) => {
        const { name, value } = e.target;
        setMemberInfoinArr(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <>
            <h2>ADD Member : </h2>
            <form>
                <input type="text"
                    placeholder="Enter The Member's Name"
                    className="form-control"
                    name="memberName"
                    value={memberInfoArr.memberName}
                    onChange={(e) => handelChange(e, 'memberName')}
                />
                <input type="number"
                    placeholder="Enter The Member's Phone Number"
                    className="form-control"
                    name="memberPhone"
                    value={memberInfoArr.memberPhone}
                    onChange={(e) => handelChange(e, 'memberPhone')}
                />
                <input type="email"
                    placeholder="Enter The Member's Email"
                    className="form-control"
                    name="memberEmail"
                    value={memberInfoArr.memberEmail}
                    onChange={(e) => handelChange(e, 'memberEmail')}
                />
                <input type="number"
                    placeholder="Enter The Member's NID"
                    className="form-control"
                    name="memberNID"
                    value={memberInfoArr.memberNID}
                    onChange={(e) => handelChange(e, 'memberNID')}
                />

                <button type="button" onClick={test}>Add Info</button>
            </form>
        </>
    )
}