
import { useState } from "react"
import { PersonSelector } from "./PersonSelector"


export function AddRecord({ record, setRecord, memberInfo }) {

    const [localRecord, setLocalRecord] = useState(
        {
            date: '',
            record: '',
        }
    );

    const localDataHandler = (e) => {
        const { name, value } = e.target;
        setLocalRecord(records => ({
            ...records,
            [name]: value
        }))
    }

    function submit() {
        if (localRecord.date === '' || localRecord.record === '') {
            alert('Enter data')
            return
        }
        setRecord([...record, localRecord])
        setLocalRecord({
            date: '',
            record: '',
        })

    }

    const [selectMember, setSelectValue] = useState('all');


    return (
        <>

            <PersonSelector memberInfo={memberInfo} selectMember={selectMember} setSelectValue={setSelectValue} />

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