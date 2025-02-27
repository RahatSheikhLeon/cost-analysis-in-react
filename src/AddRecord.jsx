
import { useState } from "react"

import { PersonSelector } from "./PersonSelector"


export function AddRecord({ memberInfo, setMemberInfo }) {

    const [selectedMember, setSelectedMember] = useState('')

    const [localRecord, setLocalRecord] = useState(
        {
            record: '',
            date: '',
        }
    )

    const localDataHandler = (e) => {
        const { name, value } = e.target
        setLocalRecord(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const submit = () => {
        if (localRecord.record === '' || localRecord.date === '') {
            return alert('enter data')
        }
        
        if (selectedMember === 'all') {
            setMemberInfo(memberInfo?.map(info => ({
                ...info,
                record: [...[Array.isArray(info?.record) ? info.record : []], localRecord]
            })))
        } else {
            setMemberInfo(memberInfo?.map(info => {
                if (info.id === selectedMember) {
                    return {
                        ...info,
                        record: [...[Array.isArray(info.record) ? info.record : []], localRecord]
                    }
                }
                return info;
            }))
            
       
        }

        setLocalRecord  (
            {
                record: '',
                date: '',
            }
        )
            
        
    }
    return (
        <>

            <PersonSelector setSelect={setSelectedMember} list={memberInfo} />

            <form>
                <input
                    type="number"
                    className="form-control_50"
                    placeholder="Enter Member Reacord"
                    name="record"
                    value={localRecord.record || ''}
                    onChange={localDataHandler}
                />

                <input
                    className="form-control_50"
                    type="date"
                    name="date"
                    value={localRecord.date || ''}
                    onChange={localDataHandler}
                />

                <button type="button" className="add-btn " onClick={submit}> ADD Reacord</button>
            </form>
        </>
    )
}