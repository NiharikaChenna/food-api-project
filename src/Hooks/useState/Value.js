import React, { useState } from 'react'

export default function Value() {
  const [count, setCount] = useState(10)

  return (
    <div className='container mt-3'>
      <h3>Hello World to React Hooks</h3>

      <h4>Count : {count}</h4>
      {/* <h4>Count1 : {count1}</h4>
      <h4>Count2 : {count2}</h4> */}
      <button className='btn btn-info' onClick={()=>{ setCount(count-1)}} >subtract</button>
    </div>
  )
}
