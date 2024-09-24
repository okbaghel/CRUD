import Link from 'next/link';
import Deletebtn from './Deletebtn';
import Image from 'next/image'

const getTopics = async () => {

    

    const apiUrl=process.env.API;
    try {
        const res = await fetch(`${apiUrl}/api/topics`, { cache: "no-store" });
        if (!res.ok) {
            throw new Error("Failed to load data");
        }
       
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

const Card = async () => {
    const { topics } = await getTopics();


    return (
        <>
            {topics.length === 0 ? (
                <div className="w-full flex flex-col items-center justify-center  p-4  shadow-md rounded-lg mt-5 mb-5">
                    <h1 className="text-gray-400 text-xl font-semibold">No data available</h1>
                    <Image src="/nodata.png" width={500} height={500} />
                </div>
            ) : (
                topics.map(t => (
                    <div key={t._id} className="w-full p-4 bg-white shadow-md rounded-lg mt-5 mb-5">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-semibold">
                                <h1 className="text-gray-700">{t.title}</h1>
                            </span>
                            <span className="flex space-x-2">
                                <Link href={`/editTopic/${t._id}`}>
                                    <button className="text-blue-500 hover:text-blue-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m4 8H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v4m-4 8v-4m0 0H9m4 0v4m0-4h4" />
                                        </svg>
                                    </button>
                                </Link>
                                <Deletebtn id={t._id} />
                            </span>
                        </div>
                        <div>
                            <p className="text-gray-700">{t.description}</p>
                        </div>
                    </div>
                ))
            )}
        </>
    )
}

export default Card;
