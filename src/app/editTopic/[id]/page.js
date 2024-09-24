import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    const apiUrl=process.env.API;
    // console.log(id);
    try {
        const res = await fetch(`${apiUrl}/api/topics/${id}`, {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error(`Failed to fetch: ${res.statusText}`);
        }
        const data = await res.json();
        // console.log("Fetched data:", data); // Log the fetched data
        return data;
    } catch (error) {
        console.error("Error fetching topic by ID:", error);
        return null; // Return null or handle the error as needed
    }
};

const Page = async ({params}) => {
    const { id } = params;

   
    
    const topicData = await getTopicById(id);
    if (!topicData) {
        console.error("No topic data found");
        return <div>Error: No topic data found</div>;
    }

    console.log("Topic data:", topicData);

    const { title, description } = topicData.topic;
    
    

    return (
        <div>
            <EditTopicForm id={id} title={title} description={description} />
        </div>
    );
};

export default Page;
