import React from 'react'
import Data  from './Data' // OBJECT DATA
import ComponentsCards from './ComponentsCards' // COMPONENT
export default function Home() {
    return (
        <div style={{ display:'flex',flexWrap:'wrap' ,width:'50%' }}>
           <div >
           <h1 className='text-capitalize'>this is my home page</h1>
            {Data.map((e) => {
                return (
                    <ComponentsCards cards_img={e.cards_img} 
                       para={e.para} heading={e.heading}  />
                );
            })}
           </div>
        </div>
    )
}
