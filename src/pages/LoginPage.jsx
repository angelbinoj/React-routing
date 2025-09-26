import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {

    const [userData, setUserData] = useState({ username: "", password: "" })
    const navigate = useNavigate()

    const handleChange = async (e) => {
        setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
             const { data } = await axios.post('http://localhost:3000/api/user/login', userData,{withCredentials:true})
            if (data?.success) {
                localStorage.setItem('token', (data.data.token));
                navigate('/users')
            }
            console.log(userData);

        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div className='flex flex-col mx-auto mt-10 items-center bg-stone-300 rounded-md text-slate-950 font-medium w-96 px-6 pb-10'>
            <h1 className=' text-2xl my-10 font-bold uppercase '>Login form</h1>
            <form onSubmit={handleSubmit} className=' flex flex-col gap-4 w-10/12' >

                <input className='h-10 ps-4  rounded-md' type="text" name="username" placeholder='Username' onChange={handleChange} autoComplete='off' required />
                <input className='h-10 ps-4  rounded-md' type="password" name="password" placeholder='Password' onChange={handleChange} autoComplete='off' required />
                <div className=' mt-5 flex gap-3 justify-around'>

                <button type='reset' className=' text-slate-100 px-10 py-2 rounded-md bg-slate-800 hover:bg-slate-600'>Cancel</button>
                <button onClick={handleSubmit} type='submit' className='text-slate-100 px-10 py-2 rounded-md bg-slate-800 hover:bg-slate-600'>Login</button>
                </div>

            </form>
        </div>
    )
}

export default LoginPage