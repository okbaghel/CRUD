"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = ({ id, title, description }) => {
    
    console.log(title);
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/topics/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription })
            });

            if (!res.ok) {
                throw new Error("Failed to update");
            }
            router.push("/");

        } catch (error) {
            console.log("error to update");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Edit Title</label>
                <input
                    onChange={e => setNewTitle(e.target.value)}
                    value={newTitle}
                    type="text"
                    placeholder="Enter Title"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Edit Description</label>
                <textarea
                    onChange={e => setNewDescription(e.target.value)}
                    value={newDescription}
                    rows="6"
                    placeholder="Enter description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Update
                </button>
            </div>
        </form>
    );
};

export default Page;
