import React from 'react'

export default function If_props(pro) {
    var a = () => {
        if (pro.name == "abc") {
            document.write("waah")
        }else{
            document.write("no")

        }
    }
  
    return (
        <div>
            <button onClick={ a }>click</button>
            <h1>{pro.name}</h1>
        </div>
    )
}
