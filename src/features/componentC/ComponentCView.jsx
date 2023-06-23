import { useSelector } from "react-redux"

export const ComponentCView = () => {
    const text = useSelector((state) => state.componentB.text);

    return (
        <div className="component-c">
            <h2>Component C</h2>
            <p>
                <span className="highlight">{text || "No Text..."}</span>
            </p>
        </div>
    )
}
