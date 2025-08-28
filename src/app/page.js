import FristPage from "@/Components/FristPage";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import SajuDetailPage from "@/Components/table";


export default function Home() {
  return (
    <>
    <div className="w-full flex justify-center items-center text-2xl">
        <Navbar/>
        
    </div>
     <div className="bg-yellow-900 scroll-pb-0">
        <FristPage/>
     </div>
       <div className="bg-grey-400">
           <Sidebar/>
       </div>
      <div>
        <SajuDetailPage/>
      </div>
    </>
  );
}
