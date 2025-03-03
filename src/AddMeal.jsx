import { PersonSelector } from "./PersonSelector";
import { useState } from "react";

export function AddMeal({ memberInfo, setMemberInfo }) {
    const [selectedMenber, setSelectedMenber] = useState("all");
    const [localMeal, setLocalMeal] = useState({
        Meal: "",
        date: "",
    });

    const localDataHandler = (e) => {
        const { name, value } = e.target;
        setLocalMeal((mealValue) => ({
            ...mealValue,
            [name]: value,
        }));
    };

    const submit = () => {
        if (localMeal.Meal === "" || localMeal.date === "") {
            return alert("Enter data");
        }

        setMemberInfo((prevMemberInfo) =>
            prevMemberInfo.map((info) => {
                if (selectedMenber === "all") {

                    return {
                        ...info,
                        Meal: [...(Array.isArray(info.Meal) ? info.Meal : []), localMeal],
                    };
                } else if (info.id === selectedMenber) {

                    return {
                        ...info,
                        Meal: [...(Array.isArray(info.Meal) ? info.Meal : []), localMeal],
                    };
                }
                return info;
            })
        );

        setLocalMeal({
            Meal: "",
            date: "",
        });
    };

    return (
        <>
            <PersonSelector setSelect={setSelectedMenber} memberInfoList={memberInfo} />
            <form>
                <input
                    type="number"
                    className="form-control_50"
                    placeholder="Enter Member Meal"
                    name="Meal"
                    value={localMeal.Meal || ""}
                    onChange={localDataHandler}
                />

                <input
                    className="form-control_50"
                    type="date"
                    name="date"
                    value={localMeal.date || ""}
                    onChange={localDataHandler}
                />

                <button type="button" className="add-btn" onClick={submit}>
                    ADD Meal
                </button>
            </form>
        </>
    );
}
