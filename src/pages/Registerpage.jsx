import React, { useState } from 'react'

export default function Registerpage() {
    const [username, setusername]=useState('');
    const [password, setPassword]= useState('');
async    function register(e){
        e.preventDefault();
     const response=  await fetch("http://localhost:4000/register",{
            method:'POST',
            body:JSON.stringify({username,password}),
            headers:{'Content-Type':'application/json'},
        });
        if (response.status === 200){
       alert("registeration successful");
        }else{
          alert("registeration failed");
        }
    }

  return (
    <>
      <form  onSubmit={register} className='pt-[300px]'>
    <div>
  
      <input type="email" placeholder='Enter you email' value={username} onChange={(e)=>setusername(e.target.value)} style={{width:'200px',height:'50px', marginLeft:'200px'}}/>

    </div>
    <div>
<input type="password" placeholder='enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:'200px',height:'50px', marginLeft:'200px', marginTop:'20px'}}/> 
   
    </div>
   <button>Register</button>
    </form>
    </>
  )
}
