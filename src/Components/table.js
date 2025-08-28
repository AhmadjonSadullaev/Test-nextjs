import Image from "next/image";

import right from "../assets/right.png";
import left from "../assets/left.png";

export default function SajuDetailPage() {


  return (
    <div className="p-8 max-w-2xl mx-auto just border-2">
        <div className=" items-center flex justify-between">
            <div><Image src={left}/></div>
           <div>    
        <h1 className="text-2xl font-bold mb-6 w-[250px] pl-20">김로켓님의 사주</h1>
        <h1 className="text-4xl font-bold mb-6">1980년 8월27일 08:10</h1>
             </div>
             <div><Image src={right}/></div>
        </div>
    
       <table className="border-1  w-full h-[50px]">
           <tr className="items-center  ">
              <th className="border-1 text-2xl"></th>
              <th className="border-1 text-2xl">時</th>
              <th className="border-1 text-2xl">日</th>
              <th className="border-1 text-2xl">月</th>
              <th className="border-1 text-2xl" >年</th>
           </tr>
           <tr className="items-center  ">
              <th className="border-1 text-2xl">十星<br/>십성</th>
              <th className="border-1 text-2xl">傷官<br/>상관</th>
              <th className="border-1 text-2xl"> 比肩<br/>비견</th>
              <th className="border-1 text-2xl"> 傷官<br/>상관</th>
              <th className="border-1 text-2xl" > 傷官 <br/>상관</th>
           </tr>
           <tr className="items-center justify-center">
              <th className="border-1 text-2xl"> 天干<br/>천간</th>
               <th className="border-1  bg-black text-white"> 임 <br/>嘴 <br/>陽水</th>
               <th className="border-1 bg-red-600 text-white ">정 <br/>丁 <br/>陰火</th>
               <th className="border-1  bg-black text-white"> 계<br/>癸<br/>陰水</th>
               <th className="border-1  bg-black text-white "> 계<br/>癸<br/>陰水</th>
           </tr>
           <tr className="items-center justify-center">
              <th className="border-1 text-2xl"> 地支<br/>지지</th>
               <th className="border-1 bg-blue-400 text-white"> 인<br/>寅<br/>陽木</th>
               <th className="border-1 bg-red-600 text-white">사<br/>巳<br/>陰火</th>
               <th className="border-1 bg-black text-white ">해<br/>亥<br/>陰水</th>
               <th className="border-1  bg-white ">유<br/>酉<br/>陰金</th>
           </tr>
           <tr className="items-center justify-center">
              <th className="border-1 text-2xl"> 十星<br/>신성</th>
               <th className="border-1 items-center"> 比肩<br/>비견</th>
               <th className="border-1 ">劫財<br/>겁재</th>
               <th className="border-1 "> 食神<br/>식신</th>
               <th className="border-1 ">偏財 <br/>편재</th>
           </tr>
           <tr className="items-center justify-center">
              <th className="border-1 text-2xl">十二運星 <br/>십이운성</th>
               <th className="border-1 items-center">死 <br/>사</th>
               <th className="border-1 ">帝旺<br/>제왕</th>
               <th className="border-1 ">胎 <br/>태</th>
               <th className="border-1 "> 長生<br/>장생</th>
           </tr>
           <tr className="items-center justify-center">
              <th className="border-1 text-2xl"> 十二神殺<br/>십이신살</th>
               <th className="border-1 items-center"> 劫殺<br/>건살</th>
               <th className="border-1 "> 地殺<br/>지살</th>
               <th className="border-1 "> 驛馬殺<br/>역마살</th>
               <th className="border-1 "> 將星殺<br/>(장성살)</th>
           </tr>
       
           <tr className="items-center justify-center">
              <th ></th>
               <th ></th>
               <th ></th>
               <th ></th>
               <th > 天乙<br/>천을귀인</th>
           </tr>
           <tr className="items-center justify-center">
           <th className=" text-xl h-20">貴人<br/>귀인</th>
               <th className=" items-center"> 없음</th>
               <th className=" ">없음</th>
               <th className="" >天乙<br/>(천을귀인)</th>
               <th >太極 <br/>천을귀인</th>
           </tr>
           
           <tr className="items-center justify-center ">
           <th ></th>
               <th ></th>
               <th ></th>
               <th ></th>
               <th> 文昌<br/>문창귀인</th>
           </tr>
         
       </table>
    
    </div>
  );
}
