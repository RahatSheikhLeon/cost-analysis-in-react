import { useState } from "react";

export function AddPeople({ data, memberInfoArr }) {
    const [memberInfo, setMemberInfo] = useState(
        memberInfoArr || {
            memberName: '',
            memberPhone: '',
            memberEmail: '',
            memberNID: ''
        }
    );
   
    function submit() {
        if (!memberInfo.memberName || !memberInfo.memberPhone || !memberInfo.memberEmail || !memberInfo.memberNID) {
            alert('Enter all data');
            return;
        }
        console.log(memberInfo);
        setMemberInfo({
            memberName: '',
            memberPhone: '',
            memberEmail: '',
            memberNID: ''
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMemberInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <h2>ADD Member :</h2>
            <form>
                <input type="text"
                    placeholder="Enter The Member's Name"
                    className="form-control"
                    name="memberName"
                    value={memberInfo.memberName}
                    onChange={handleChange}
                />
                <input type="number"
                    placeholder="Enter The Member's Phone Number"
                    className="form-control"
                    name="memberPhone"
                    value={memberInfo.memberPhone}
                    onChange={handleChange}
                />
                <input type="email"
                    placeholder="Enter The Member's Email"
                    className="form-control"
                    name="memberEmail"
                    value={memberInfo.memberEmail}
                    onChange={handleChange}
                />
                <input type="number"
                    placeholder="Enter The Member's NID"
                    className="form-control"
                    name="memberNID"
                    value={memberInfo.memberNID}
                    onChange={handleChange}
                />

                <button type="button" onClick={submit}>Add Info</button>
            </form>
        </>
    );
}
