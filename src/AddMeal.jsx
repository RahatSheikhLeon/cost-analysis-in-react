import { useState } from "react";
import {PersonSelector} from "./PersonSelector";
export function AddMeal({meal, setMeal}) {

    const [localMeal, setLocalMeal] = useState(
        {
            date: '',
            record: '',
        }
    );

    const localDataHandler = (e) => {
        const { name, value } = e.target;
        setLocalMeal(meal => ({
            ...meal,
            [name]: value
        }))
    }

    function submit() {
        setMeal([...meal, localMeal])
        setLocalMeal({
            date: '',
            meal: '',
        })
    }

    return (
        <>
        <PersonSelector />
            <form>
                <input
                    type="number"
                    className="form-control_50"
                    placeholder="Enter Member Reacord"
                    name="Meal"
                    value={localMeal.Meal || ''}
                    onChange={localDataHandler}
                />

                <input
                    className="form-control_50"
                    type="date"
                    name="date"
                    value={localMeal.date || ''}
                    onChange={localDataHandler}
                />

                <button type="button" className="add-btn " onClick={submit}> ADD Meal</button>
            </form>
        </>
    )
}