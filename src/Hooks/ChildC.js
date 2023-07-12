import React, { useContext } from 'react'
import {data} from './UseCon'
export default function ChildC() {
    const fname = useContext(data)
  return (
    <div>
      <h1>sdds {fname}</h1>
    </div>
  )
}
