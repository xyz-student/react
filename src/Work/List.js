import React from 'react'
// list
export default function List() {
    var ar = ["red", "yellow", "blue"]
    ar[3] = "black";
    return (
        <div>
            <ul>
                {ar.map((new_val, ind) =>
                    <li key={ind}> my index num is : {ind} {new_val}</li>
                )}

            </ul>
        </div>
    )
}
