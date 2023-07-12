// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// function Update() {

//     const [id, setId] = useState(0);
//     const [name, setName] = useState('');
//     const [pass, setpass] = useState('');
//     const [email, setEmail] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//       setId(localStorage.getItem('id'));
//       setName(localStorage.getItem('name'));
//       setpass(localStorage.getItem('pass'));
//       setEmail(localStorage.getItem('email'));
//     }, [])

//     const handleUpdate = (e) => {
//         e.preventDefault();
//         axios.put(`https://64426d1e76540ce2258bd154.mockapi.io/Crud/${id}`,{
//             e_name: name,
//             e_pass: pass,
//             e_email: email
//         }).then(() => {
//             navigate('/Table');
//         }).catch((err) => {
//             console.log(err)
//         });
//     }

//   return (
//     <>
//     <div className='row'>
//         <div className='col-md-4'>
//             <div className='mb-2 mt-2'>
//                 <Link to='/'>
//                     <button className='btn btn-primary'>Read Data</button>
//                 </Link>
//             </div>
//             <div className='bg-primary p-4 text-center'>
//                 <h1>Update Data</h1>
//             </div>
//             <form onSubmit={handleUpdate}>
//                 <div className='form-group'>
//                     <label>Enter Name: </label>
//                     <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
//                 </div>
//                 <div className='form-group'>
//                     <label>Enter Age: </label>
//                     <input type='number' value={pass} onChange={(e) => setpass(e.target.value)} placeholder='Password' className='form-control' />
//                 </div>
//                 <div className='form-group'>
//                     <label>Enter Email: </label>
//                     <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='form-control' />
//                 </div>
//                 <br />
//                 <div className='d-grid'>
//                     <input type='submit' value='Update' className='btn btn-primary' />
//                 </div>
//             </form>
//         </div>
//     </div>
// </>
//   )
// }

// export default Update

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Update() {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setpass] = useState('');


    const abc = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setpass(localStorage.getItem('email'));


    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://64426d1e76540ce2258bd154.mockapi.io/Crud/${id}`, {
            e_name: name,
            e_email: email

        }).then(() => {
            abc('/Table');
        }).catch((err) => {
            console.log(err)
        });
        // document.write("text")
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Update Data</h1>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>Enter email: </label>
                            <input type='email' value={email} onChange={(e) => setpass(e.target.value)} placeholder='text' className='form-control' />
                        </div>

                        <br />
                        <div className='d-grid'>
                            <input type='submit' value='Update' className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update