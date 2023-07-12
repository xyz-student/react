import React, { useState } from 'react'

export default function Counter() {
  const [Count, SetCount] = useState(0);
  return (
    <div className='btn-group'>
      <button className='btn btn-success btn-lg fw-bold' onClick={() => SetCount(Count + 1)} >+</button>
      <button className='btn btn-success btn-lg fw-bold' >{Count}</button>
      <button className='btn btn-success btn-lg fw-bold' onClick={() => SetCount(Count - 1)} >-</button>
    </div>
  )
}
