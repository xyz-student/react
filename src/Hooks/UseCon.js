import React, { createContext } from 'react'
 
import ChildA from './ChildA';



const data = createContext();
export default function UseCon() {
    return (
        <div>
            <data.Provider value={"deev"} >
                <ChildA />
            </data.Provider>
        </div>
    )
}

export { data }