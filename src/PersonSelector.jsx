

export function PersonSelector ({setSelect, memberInfoList  }) {

    let selectedMember =  memberInfoList?.map((perMemberInfo) => (
        <option key={perMemberInfo.id} value={perMemberInfo.id}>
            {perMemberInfo.memberName}
        </option>
    ))

    return (
        <select onChange={(e) => setSelect(e.target.value)} className="form-control_50">
            <option  value="all">All</option>

            { selectedMember }

        </select>
    );
}
