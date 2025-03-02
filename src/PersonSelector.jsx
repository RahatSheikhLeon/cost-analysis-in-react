
// export const PersonSelector = ({ list, setSelect }) => {

//     const modifiedList = Array.isArray(list) ? list?.map(info => ({ label: info?.memberName, value: info?.id })) : [];

//     const options = [{ label: 'All', value: 'all' }, ...modifiedList];

//     return (
//         <select onChange={(e) => setSelect(e.target.value)} className="form-control_50">
//             {options?.map((info, index) => (
//                 <option key={index} value={info?.value}>{info?.label}</option>
//             ))}
//         </select>
//     );
// }

export function PersonSelector ({setSelect, memberInfoList  }) {

    let test =  memberInfoList?.map((perMemberInfo) => (
        <option key={perMemberInfo.id} value={perMemberInfo.id}>
            {perMemberInfo.memberName}
        </option>
    ))

    return (
        <select onChange={(e) => setSelect(e.target.value)} className="form-control_50">
            <option  value="all">All</option>

            { test }

        </select>
    );
}
