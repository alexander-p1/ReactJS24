import { ReactElement } from "react";

//The return type comes after the colon, in this case the component must return a ReactElement. ReactElement is a specific type that includes many other types, like strings, booelans, other components and such things.
export function Header(): ReactElement {
    return (
    <header className="header">
        <h1>React Lecture</h1>
        <div className="header-actions">
            <button>Click me</button>
        </div>
    </header>
    )
}