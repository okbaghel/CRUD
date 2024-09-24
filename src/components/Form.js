"use client"
import {useState} from 'react';
import { useRouter } from 'next/navigation';



const Form=()=>{

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");

    const router=useRouter();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!title || !description){
            alert("Title & Description are required !!");
        }
        try{
            const res=await fetch("/api/topics",{
                method:"POST",
                headers:{
                    "content-type":"application/json",

                },

                body:JSON.stringify({title,description}),
                
            });

            if(res.ok){
                router.push('/');
            }
            else{
                throw new Error("Failed to update topic");
            }

        }catch(error){

        }
    }

    return(
     <form onSubmit={handleSubmit} class="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input onChange={(e)=>{setTitle(e.target.value)}} value={title} type="text" placeholder="Enter Title" class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"/>
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2">Description</label>
<textarea onChange={(e)=>{setDescription(e.target.value)}} value={description} rows="6" placeholder="Enter description" class="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"></textarea>    </div>
    <div class="flex items-center justify-between">
        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Add
        </button>
    </div>
</form>
    )
}
export default Form;