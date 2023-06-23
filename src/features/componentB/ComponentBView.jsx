import { useDispatch, useSelector } from "react-redux"
import { textChanged } from "./componentBSlice";

export const ComponentBView = () => {
    const text = useSelector((state) => state.componentB.text);
    const dispatch = useDispatch();

    return (
        <div className="component-b">
            <h2>Component B</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => dispatch(textChanged(e.target.value))}
                placeholder="Enter some text..."
            />
        </div>
    )
}
