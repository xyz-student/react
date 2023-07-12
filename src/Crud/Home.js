
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Home() {
    var [NameValue, setNameValue] = useState("");
    var [EmailValue, setEmailValue] = useState("");
    var [PasswordValue, setPasswordValue] = useState("");
    const Url = useNavigate();
    var Submit = (e) => {
        e.preventDefault();
        axios.post('https://64426d1e76540ce2258bd154.mockapi.io/Crud', {
            e_name: NameValue,
            e_email: EmailValue,
            e_pass: PasswordValue
        }).then(()=>{
            Url('Table')
        })
    }
    return (
        <div>
            <div className=' w-50 m-auto mt-5 alert alert-warning p-4'>
                <h1>Crud Using API </h1>
                <form className='' onSubmit={Submit}>
                    <input className='form-control mt-3' onChange={(e) => setNameValue(e.target.value)} placeholder='Name' type='text' name='' />
                    <input className='form-control mt-3' onChange={(e) => setEmailValue(e.target.value)} placeholder='Email' type='email' name='' />
                    <input className='form-control mt-3' onChange={(e) => setPasswordValue(e.target.value)} placeholder='Pssword' type='password' name='' />
                    <input className='btn btn-outline-success text-capitalize mt-3' type='submit' />
                </form>
                <h1>{NameValue}</h1>
                <h1>{EmailValue}</h1>
                <h1>{PasswordValue}</h1>
            </div>
        </div>
    )
}

export default Home