
import { useState } from "react"
import { PersonSelector } from "./PersonSelector"

export function AddRecord({record, setRecord}){

const [localRecord, setLocalRecord] = useState(
    {
        date: '',
        record: '',
    }
);

const localDataHandler = (e) => {
   const {name, value } = e.target;
   setLocalRecord(records => ({
    ...records,
    [name] : value
   }))
}

function submit (){
    setRecord([...record, localRecord])
    setLocalRecord({
        date: '',
        record: '',
    })
}

    return(
        <>
        <PersonSelector />
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