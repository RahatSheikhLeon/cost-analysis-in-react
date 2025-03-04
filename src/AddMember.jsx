import { useState } from "react";
export function AddMember({ memberInfo, setMemberInfo}) {
    
    let id = crypto.randomUUID()
    let shortId = id.split('-')[0]

    const [localMemberInfo, setLocalMemberInfo] = useState(
        {
            memberName: '',
            memberNumber: '',
            memberEmail: '',
            memberNID: '',
            id: shortId,
            // records: [],
            // meals: []
           } 
    )

    const localDataHandler = (e) => {
        const { name, value } = e.target;
        setLocalMemberInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const dataTest = localMemberInfo.memberName == '' || localMemberInfo.memberNumber == '' || localMemberInfo.memberEmail == '' || localMemberInfo.memberNID == '';
    const submit = () => {
        if (dataTest) {
            return alert('enter data')
        }
        // console.log([...memberInfo, localMemberInfo])
        setMemberInfo([...memberInfo, localMemberInfo])
        setLocalMemberInfo(
            {
                memberName: '',
                memberNumber: '',
                memberEmail: '',
                memberNID: '',
                id: shortId,
                // records: [],
                // meals: []
               } 
        )
    }

    return (
        <form>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Member Name"
                name="memberName"
                value={localMemberInfo.memberName}
                onChange={localDataHandler}
            // onChange={(e) => setMemberInfo({...memberInfo, memberName : e.target.value})} 

            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member Phone Number"
                name="memberNumber"
                value={localMemberInfo.memberNumber}
                onChange={localDataHandler}
            // onChange={(e) => setMemberInfo({...memberInfo,  memberNumber: e.target.value})} 
            />

            <input
                type="email"
                className="form-control"
                placeholder="Enter Member Email"
                name="memberEmail"
                value={localMemberInfo.memberEmail}
                onChange={localDataHandler}
            // onChange={(e) => setMemberInfo({...memberInfo, memberEmail: e.target.value})} 
            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member NID"
                name="memberNID"
                value={localMemberInfo.memberNID}
                onChange={localDataHandler}
            // onChange={(e) => setMemberInfo({...memberInfo, memberNID: e.target.value})} 
            />

            <button type="button" className="add-btn" onClick={submit} >Add Member</button>
        </form>
    )
}