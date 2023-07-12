import React, { useState } from 'react'
// hook use state
export default function UseSt() {
    var [name , SetName] = useState("sudhanshu");
    var go = () => {
        SetName("update")
    }
    return (
        <div>
            <button onClick={go}>click for more</button>
            <h1>print name  {name} </h1>
        </div>
    )
}
