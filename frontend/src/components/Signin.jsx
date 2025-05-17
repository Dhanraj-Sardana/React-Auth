
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

export default function Signin() {
    const navigate=useNavigate();
     const { register, handleSubmit,formState:{errors} } = useForm()
    const handleSub= async (data)=>{
        console.log(data);
        
        try {
        const response=await fetch('http://localhost:3000/signin',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)


       
        })
        
       
        
        
      if(response.status==200){
        navigate('/home',{replace:true})
      }
    } catch (err) {
      console.error("Error while sending data to server", err.message);
    }

    }
    return (
        <div className='bg-zinc-600 min-h-screen '>
            <form onSubmit={handleSubmit(handleSub)}  method="post" className='flex flex-col items-center gap-6 min-h-screen  justify-center' >
                <div className='flex gap-4'>
                    <label htmlFor="name" className="font-extrabold text-xl">Enter your name :</label>
                    <input type="text" className=" border-b font-bold border-blue-200 focus: outline-none" name='name' {...register('name',{required:"Name is Required"})} placeholder='Userame' />
                </div>
                 {errors?.name&&<span className="text-red-500 m-[-6px] ml-9">{errors.name.message}</span>}
                <div className='flex gap-4'>
                    <label htmlFor="Password" className="font-extrabold text-xl">Enter your password :</label>
                    <input type="password" name="password" {...register('password',{required:"password is required",minLength:{value:8,message:"password must have atleat 8 characters"}})}   className="border-b font-bold border-blue-200 focus: outline-none" placeholder='Passsword' />
                </div>
                {!errors?.name&&errors?.password&&<span className="text-red-500 m-[-6px] ml-9">{errors.password.message}</span>}
                <div className='flex gap-4 ' >
                    <label htmlFor="email" className="font-extrabold text-xl">Enter your email :</label>
                    <input type="email" name="email" {...register('email',{required:'email is required'})}  className="border-b font-bold border-blue-200 focus: outline-none " placeholder='Email' />
                </div>
                {!errors?.name&& !errors?.password&& errors?.email&&<span className="text-red-500 m-[-6px] ml-9" >{errors.email.message}</span>}
                <div>
           <input  className=" font-extrabold border border-solid-blue-400 p-3 bg-zinc-400 hover:text-white hover:bg-zinc-600" type="submit" value="Sign-in" />
                </div>
            </form>
        </div>
    )
}
