import React from 'react';
import { useState } from 'react';
import icons1 from "../assets/icons8-close-26.png";
export default function Learn({onClose}) {
    function handleClick(){
       
        let image=document.getElementById("close");
   image.style.display="none";
   
   }
//    useEffect(()=>{
//        Aos.init({duration:1300});
//    },[])
   const[learn,setLearn]=useState(true);
   const handlelearn=()=>{
setLearn(false);
   }
  return (
    <>
    {learn && 
     
     <div className=" lg:w-full lg:bg-[rgba(0,0,0,0.75)] lg:h-screen lg:fixed lg:z-50" onClick={onClose}>

  
    <div data-aos="fade-down" id="close" className=" bg-white w-[280px] h-[400px]  fixed z-50 left-[35px] top-[230px] lg:w-[620px] lg:h-[300px] lg:bg-white  lg:fixed lg:left-[470px] lg:top-[261px] lg:z-50 lg:shadow-md  lg:shadow-gray-100" onClick={handlelearn}>
     <div className="flex h-auto bg-green-900 shadow-2xl border-b-[1px] border-slate-300 shadow-gray-50  py-5  lg:py-3 justify-between  flex-row-reverse px-7 pt-6">
       <h1 className="lg:text-[24px]  font-semibold  text-white">Notice</h1>
     <img src={icons1} alt="" className="h-5  bg-white rounded-full " id="icons" onClick={handleClick}/>
    
     </div>
     <div>
        <div>
           
        </div>
            <p className="text-center pt-[50px]">No Notice yet</p>
     </div>

 
   
    </div>
    </div>
   
    }
    </>
  )
}
