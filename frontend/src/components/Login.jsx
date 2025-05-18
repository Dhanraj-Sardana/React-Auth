import React from 'react'
import { useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const {handleSubmit,register,formState:{errors}}=useForm();
    const navigate=useNavigate();
  const handleSub= async (data)=>{
console.log(data);
const response= await fetch('http://localhost:3000/login',{ 
  method:'POST',
  headers:{
'content-type':'application/json'
  },
  body:JSON.stringify(data)
})
if(response.status===200){
  navigate('/home')
}
}
    return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit(handleSub)} className='bg-zinc-600 flex flex-col gap-6 p-10'>
        <div className='flex gap-4'>
        <label htmlFor="email" className='font-extrabold text-xl'>Enter Your Email :</label>
        <input type="email" placeholder='Enter Email' {...register('email',{required:'Email is Required'})}  name="email" className='border-b font-bold border-blue-200 focus: outline-none' />
        </div>
        {errors?.email&&<span className='text-red-500 m-[-6px] ml-30'>{errors.email.message}</span>}
        <div className='flex gap-4'>
        <label htmlFor="password" className='font-extrabold text-xl'>Enter your Password :</label>
        <input type="password" name="password" className="border-b font-bold border-blue-200 focus: outline-none" {...register('password',{required:'Password is Required',minLength:{value:8,message:'Min length of Password Must be 8'}})} placeholder='Enter Password' />
       
      </div>
       {!errors?.email&&errors?.password&&<span className='text-red-500 m-[-6px] ml-30'>{errors.password.message}</span>}
      <input type="submit" className='font-extrabold border border-solid-blue-400 p-3 bg-zinc-400 hover:text-white hover:bg-zinc-600' value="Login" />
      </form>
      
    </div>
  )
}
