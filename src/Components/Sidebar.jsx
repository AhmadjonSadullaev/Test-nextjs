import Image from 'next/image';
import React from 'react';
import logo from '../assets/logo.png';
import image2 from "../assets/image2.png";
import image3 from '../assets/image4.png'

const Sidebar = () => {
  return (
    <>
    <div className='w-full h-[300px] flex items-center border-1 justify-between bg-yellow-100'>
        <div>
            <Image src={logo}/>
        </div>
        <div className='image3 w-[220px] border-1 h-[130px] bg-white rounded-[100px] pl-20  justify-center items-center flex' >
                <p></p>
              </div>
         <div>
           <Image src={image2} />
         </div>
    </div>
   
    <div className=''>
   
        <div className=''>
            <Image src={image3} className=' w-full h-[500px]'/>
         </div>
    </div>
    </>
    
  )
}

export default Sidebar