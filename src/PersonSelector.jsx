import { PersonSelectorList } from "./PersonSelectorList"
export function PersonSelector () {
    return (
        <select name="PersonSelector" id="PersonSelector" className="form-control_50">
            <PersonSelectorList />
        </select>
    )
}