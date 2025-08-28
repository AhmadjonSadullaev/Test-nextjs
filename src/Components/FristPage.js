import Image from 'next/image'
import image from '../assets/image.png'

const FristPage = () => {
  return (
    <div className="w-ful  h-full flex flex- justify-center items-center bg-amber-100">
         <div className="flex items-center justify-center columns-lg">
              <div className='w-[220px] h-[130px] bg-white rounded-[100px] mt-70 justify-center items-center pl-10' >
                <p></p>
              </div>
              <div>
                 <Image src={image} alt='image' className='shadow-2xs w-[100%] h-[400px]'   />
              </div>
            
         </div>
       
    </div>
  )
}

export default FristPage