
import { PersonSelector } from "./PersonSelector"
import { useState } from "react"
export function AddMeal({ memberInfo, setMemberInfo }) {

    const [selectedMenber, setSelectedMenber] = useState('')
    const [localMeal, setLocalMeal] = useState(
        {
            Meal: '',
            date: '',
        }
    )

    const localDataHandler = (e) => {
        const { name, value } = e.target
        setLocalMeal(test => ({
            ...test,
            [name]: value
        }))
    }

    const submit = () => {
        if (localMeal.Meal === '' || localMeal.date === '') {
            return alert('enter data')
        }

        // if 
    }

    return (
        <>
            <PersonSelector setSelectedMenber = {setSelectedMenber} list={memberInfo} />
            <form>
                <input
                    type="number"
                    className="form-control_50"
                    placeholder="Enter Member Meal"
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