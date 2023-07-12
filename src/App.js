
import React from 'react'
import Home from './Crud/Home'
import Table from './Crud/Table'
import Update from './Crud/Update'
// import { Router } from 'react-router-dom'
import { BrowserRouter as Router,Routes , Route , Link } from 'react-router-dom'
 
 function App() {
   return (
    <Router>
     
      <Link to='/'> home page</Link>
      <Link to='Table'> table page</Link>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='Table' element={<Table/>}></Route>
        <Route  path='Update' element={<Update/>}></Route>
      </Routes>
    </Router>
   
   )
 }
 
 export default App





// import React from 'react'
 
// // import Home from './CardsData/Home'

// export default function App() {
//   return (
//     <div>
//       {/* <Home /> */}
     
//     </div>
//   )
// }

 