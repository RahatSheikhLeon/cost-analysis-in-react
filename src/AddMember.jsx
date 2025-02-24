
export function AddMember({memberInfo, setMemberInfo }) {

    const dataHandeler = (e) => {
        const {name, value} = e.target
        setMemberInfo(prevState =>({
            ...prevState,
            [name]: value
        })   
        )
    }



    // function submit(){
    //     setMemberInfo = (
    //         [{
    //             memberName : 'Rahat',
    //             memberNumber: '09302930293',
    //             memberEmail : 'akfjklajfka',
    //             memberNID  : '3232323',
    //         }]
    //     )
           

    //         console.log(setMemberInfo)
    // }


    return (
        <form>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Member Name"
                value={setMemberInfo.memberName}
                onChange={dataHandeler}
                // onChange={(e) => setMemberInfo({...memberInfo, memberName : e.target.value})} 

            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member Phone Number"
                value={setMemberInfo.memberNumber}
                onChange={dataHandeler}
                // onChange={(e) => setMemberInfo({...memberInfo,  memberNumber: e.target.value})} 
            />

            <input
                type="email"
                className="form-control"
                placeholder="Enter Member Email"
                value={setMemberInfo.memberEmail}
                onChange={dataHandeler}
                // onChange={(e) => setMemberInfo({...memberInfo, memberEmail: e.target.value})} 
            />

            <input
                type="number"
                className="form-control"
                placeholder="Enter Member NID"
                value={setMemberInfo.memberNID}
                onChange={dataHandeler}
                // onChange={(e) => setMemberInfo({...memberInfo, memberNID: e.target.value})} 
            />

            <button type="button" className="add-btn" >Add Member</button>
        </form>
    )
}