import Image from "next/image"
import navbar from "../assets/navbar.png"

const Navbar = () => {
  return (
    <>
   
    <div className="w-full bg-gray-800 h-[260px] flex p-5 text-amber-50 items-center justify-center">
       <div className="items-center">
       <h2 className="w-[140px] pl-10">제 1장</h2>
       <Image src={navbar}/>
       <h1 className="text-4xl">나의 사주 팔자</h1>
       </div>
    
    
        
    </div>
    </>
  )
}

export default Navbar