import React, { useState } from 'react'

export default function SimpleForm() {
  const [Email , SetEmail] = useState("");
  const [Password , SetPassword] = useState("");

  const [AllEntry , SetEntry] = useState([])
  const FormSubmit=()=>{
    const newEntry = {Email:Email ,Password:Password }
    SetEntry([...AllEntry,newEntry])
    console.log(AllEntry)
  }
  return (
    <div>
      <form onSubmit={FormSubmit} >
        <input type='password' placeholder='Password'value={Password}  onChange={(e)=>SetPassword(e.target.value)} /> <br /><br />
        <input type='email' placeholder='Email' value={Email} onChange={(e)=>SetEmail(e.target.value)} /> <br /><br />
        <input type='submit'/>
      </form>
    </div>
  )
}
