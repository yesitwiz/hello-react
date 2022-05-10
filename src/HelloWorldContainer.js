/*Task: Build a react functional component
1. import
2. need a func
    a. return statement that contains html
    b. 
3. export */

import React from "react"
import HelloWorld from "./HelloWorld"

function HelloWorldContainer() {
    return (
        <div className="helloWorldContainer">
            <HelloWorld />
        </div>
    )
}

export default HelloWorldContainer