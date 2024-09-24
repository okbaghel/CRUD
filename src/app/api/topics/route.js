import connectDB from "@/libs/mongodb";
import Topic from "@/libs/models/topic";
import { NextResponse } from "next/server";
import mongoose from 'mongoose';

export async function DELETE(request){
    const id=request.nextUrl.searchParams.get('id');
    // console.log(id);
    await connectDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Deleted"},{status:200});
}


export async function GET(){
    await connectDB();
    const topics=await Topic.find();
    return NextResponse.json({topics});
}

export async function POST(request) {
    try {
        await connectDB();

        const { title, description } = await request.json();


        const newTopic = new Topic({ title, description });
        // console.log('New topic before save:', newTopic);

        const savedTopic = await newTopic.save();
        // console.log('Saved topic:', savedTopic);

        return NextResponse.json({
            message: "Topic created",
            topic: savedTopic
        }, { status: 201 });
    } catch (error) {
        console.error('Error creating topic:', error);
        if (error instanceof mongoose.Error.ValidationError) {
            console.error('Validation error details:', error.errors);
        }
        return NextResponse.json(
            { error: "Failed to create topic", details: error.message },
            { status: 500 }
        );
    }
}