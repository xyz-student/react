import React from 'react'
// list
export default function List_object() {
    const cars = [
        { id: 1, brand: 'Ford',name:"abc",age:60 },
        { id: 2, brand: 'BMW',name:"xyz",age:100 },
        { id: 3, brand: 'Audi',name:"123",age:1 }
    ];
    return (
        <div>
            <table border={"2px"}>
                 <tr>
                    <td>brand</td>
                    <td>age</td>
                    <td>name</td>
                 </tr>
                {cars.map((new_val,ind) =>
                    <tr key={ind} ><td> {new_val.brand}</td> 
                     <td>{new_val.age} </td>
                      <td> {new_val.name} </td></tr>
               
                )}
                 
            </table>
        </div>
    )
}
