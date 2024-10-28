"use client"

import { IActivitiesData } from "@/app/lib/IActivitiesData";
import { useEffect, useState } from "react";
import ContentActivityComponent from "./components/ContentActivityComponent";
import ModalEditActivityComponent from "./components/ModalEditActivityComponent";


export default function ActivityById({ params }: { params : { id : number }}) {
    const [activity, setActivity] = useState<IActivitiesData | null>(null);

    useEffect(() => {
        async function fetchActivity() {
            console.log(params.id);
            const response = await fetch(`http://localhost:3000/api/activities/${params.id}`);
            const activityData = await response.json();
            
            console.log(activityData);
            setActivity(activityData);
        }
        
        fetchActivity();
    }, []);

    return (
        <>
            { activity && (
                <>
                    <ModalEditActivityComponent activity={activity}/>
                    <ContentActivityComponent {...activity} />
                </>
            )}
        </>
    );
};