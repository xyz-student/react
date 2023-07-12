import React, { useState } from 'react'

export default function UseStateForm() {
    var [ValueName , SetValeName] = useState(" " )
    var [ValueEmail , SetValeEmail] = useState(" ")
    var go =()=>{
      alert(ValueName +  " "+ValueEmail)
    }
  return (
    <div>
      <form   >
        <input type="text" placeholder='Name' 
        onChange={(e)=>SetValeName(e.target.value)}   />< br/>< br/>
        <input type="email" placeholder='Email'
         onChange={(e)=>SetValeEmail(  e.target.value.split('').length )}   />< br/>< br/>
        <input type="submit"  onClick={go}  />   
      </form>

      <h1>{ValueName.toUpperCase()}</h1>
      
      <h1>{ValueEmail}</h1>
    </div>
  )
}
