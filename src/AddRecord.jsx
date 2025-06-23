import { useState } from "react";
import { PersonSelector } from "./PersonSelector";
import { Outlet } from "react-router-dom";

export function AddRecord({ memberInfo, setMemberInfo }) {
	console.log('Add Record');
    const [selectedMember, setSelectedMember] = useState("all");

    const [localRecord, setLocalRecord] = useState({
        record: "",
        date: "",
    });

    const localDataHandler = (e) => {
        const { name, value } = e.target;
        setLocalRecord((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submit = () => {
        if (localRecord.record === "" || localRecord.date === "") {
            return alert("Enter data");
        }

        setMemberInfo((prevMemberInfo) =>
            prevMemberInfo.map((info) => {
                if (selectedMember === "all") {

                    return {
                        ...info,
                        Record: [...(Array.isArray(info.Record) ? info.Record : []), localRecord],
                    };
                } else if (info.id === selectedMember) {

                    return {
                        ...info,
                        Record: [...(Array.isArray(info.Record) ? info.Record : []), localRecord],
                    };
                }
                return info;
            })
        );

        setLocalRecord({
            record: "",
            date: "",
        });
    };

    return (
        <>
            <PersonSelector setSelect={setSelectedMember} memberInfoList={memberInfo} />

            <form>
                <input
                    type="number"
                    className="form-control_50"
                    placeholder="Enter Member Record"
                    name="record"
                    value={localRecord.record || ""}
                    onChange={localDataHandler}
                />

                <input
                    className="form-control_50"
                    type="date"
                    name="date"
                    value={localRecord.date || ""}
                    onChange={localDataHandler}
                />

                <button type="button" className="add-btn" onClick={submit}>
                    ADD Record
                </button>
            </form>
        </>
    );
}
