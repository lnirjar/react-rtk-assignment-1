import { ComponentBView } from "../componentB/ComponentBView"
import { ComponentCView } from "../componentC/ComponentCView"

export const ComponentAView = () => {
    return (
        <div className="component-a">
            <h2>Component A</h2>
            <ComponentBView />
            <ComponentCView />
        </div>
    )
}
