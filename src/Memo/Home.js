import React, { memo } from 'react'
 function Home(props) {
    console.log("this is Home count",props.data)
  return (
    <div>
{/* Using memo will cause React to skip rendering a component if its props have not changed. */}
    </div>
  )
}

export default memo(Home)
// import React from 'react'
// function Home(props) {
//   console.log("this is Home count", props.data)
//   return (
//     <div>

//     </div>
//   )
// }

// export default (Home)