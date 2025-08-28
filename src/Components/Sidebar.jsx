import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png';
import image2 from "../assets/image2.png";
import image3 from '../assets/image4.png'

const Sidebar = () => {
  return (
    <>
    <div className='w-full h-[280px] flex items-center border-1 justify-between bg-white'>
        <div>
            <Image src={logo}/>
        </div>
         <div>
           <Image src={image2} />
         </div>
    </div>
    <div className='margintop'>
       <div className='zfull p-7 flex w-[220px] h-[140px] bg-white rounded-[100px] mt-70 justify-center items-center pl-10 border-1'>
          <p className='zfull bg-white'>  </p>
         </div>
        <div className='margintop1'>
           <Image src={image3} className='w-full h-[500px]'/>
         </div>
    </div>
    </>
    
  )
}

export default Sidebar