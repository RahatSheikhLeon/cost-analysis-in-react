import { useState } from "react";

export function AddPeople() {
    const [memberInfo, setMemberInfo] = useState({
        memberName: '',
        memberPhone: '',
        memberEmail: '',
        memberNID: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMemberInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        // Check if any field is empty
        for (let index in memberInfo) {
            if (!memberInfo[index]) {
                alert(`Please enter ${key.replace("member", "")}`);
                return;
            }
        }

        console.log("New Member Added:", memberInfo);

        // Clear input fields
        setMemberInfo({
            memberName: '',
            memberPhone: '',
            memberEmail: '',
            memberNID: '',
        });
    };

    return (
        <>
            <h2>ADD People:</h2>
            <form>
                <input
                    type="text"
                    name="memberName"
                    placeholder="Enter Member's Full Name"
                    className="form-control"
                    value={memberInfo.memberName}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="memberPhone"
                    placeholder="Enter Member's Phone Number"
                    className="form-control"
                    value={memberInfo.memberPhone}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="memberEmail"
                    placeholder="Enter Member's Email"
                    className="form-control"
                    value={memberInfo.memberEmail}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="memberNID"
                    placeholder="Enter Member's NID"
                    className="form-control"
                    value={memberInfo.memberNID}
                    onChange={handleChange}
                />
                <button type="button" onClick={handleAdd}>ADD</button>
            </form>
        </>
    );
}
