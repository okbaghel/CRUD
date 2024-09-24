import Topic from "@/libs/models/topic";
import connectDB from "@/libs/mongodb";
import { NextResponse } from "next/server";


export async function PUT(request, {params}){
    const {id}=params;
    const {newTitle:title, newDescription:description}=await request.json();
    await connectDB();
    await Topic.findByIdAndUpdate(id,{title,description});
    return NextResponse.json({message:"Updated topics"});

}

export async function GET(request,{params}){
    const {id}=params;
    await connectDB();
    const topic=await Topic.findOne({_id:id});
    
    return NextResponse.json({topic});
}