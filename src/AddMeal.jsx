import { useState } from "react";
import { PersonSelector } from "./PersonSelector"

export function AddMeal({meal, setMeal, memberInfo}) {

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
        if (localMeal.date === '' || localMeal.meal === '') {
            alert('Enter data')
            return
        }
        setMeal([...meal, localMeal])
        setLocalMeal({
            date: '',
            meal: '',
        })
    }
    const [ selectMember, setSelectValue ] = useState('all');

    return (
        <>
            <PersonSelector memberInfo = {memberInfo} selectMember={selectMember} setSelectValue = {setSelectValue} />
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