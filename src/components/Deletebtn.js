"use client"

import { useRouter } from "next/navigation";

const Deletebtn=({id})=>{
    const router=useRouter();
    const removeTopic=async()=>{
        
        const confirmed=confirm("Are You sure !");
        if(confirmed){
            const res=await fetch(`/api/topics?id=${id}`,{
                method:"DELETE",
            });

            if(res.ok){

                router.refresh();
            }

        }
    }

    return(
        <button onClick={removeTopic} className="text-red-500 hover:text-red-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </button>
        
    )
}
export default Deletebtn;