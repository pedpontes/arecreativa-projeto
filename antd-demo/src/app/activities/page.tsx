"use client"

import { useState, useEffect } from "react";
import { IActivitiesData } from "../lib/IActivitiesData";
import CreateActivityModal from "./components/ModalCreateActivityComponent";
import EditActivityModal from "./components/ModalEditActivityComponent";


export default function Activities() {
    const [activities, setActivities] = useState<IActivitiesData[]>([]);
    
    useEffect(() => {
        async function fetchActivities () {
            const response = await fetch('http://localhost:3000/api/activities');
            const activitiesData = await response.json();
            
            setActivities(activitiesData);
        }
        fetchActivities();
    }, []);

    return (
        <>
            <CreateActivityModal/>
            <h1>Activities</h1>
            <ul>
                {activities.map((activity, index) => (
                    <li key={index}>
                        {activity.title}
                        <EditActivityModal activity={activity}/>
                    </li>
                ))}
            </ul>
        </>
    );
}