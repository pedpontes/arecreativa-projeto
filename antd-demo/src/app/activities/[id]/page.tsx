import { IActivitiesData } from "@/app/lib/IActivitiesData";
import { useEffect, useState } from "react";


export default function ActivityById({ id }: { id: number }) {
    const [activity, setActivity] = useState<IActivitiesData | null>(null);

    useEffect(() => {
        async function fetchActivity() {
            const response = await fetch(`http://localhost:3000/api/activities/${id}`);
            const activityData = await response.json();

            setActivity(activityData);
        }
        
        fetchActivity();
    })


    //TODO: get activity by id component
    return (
        <div>
            <h1>Activity {activity?.id}</h1>
        </div>
    );
};