"use client"

import { useState, useEffect } from "react";
import { IActivitiesData } from "../lib/IActivitiesData";
import CreateActivityModal from "./components/ModalCreateActivityComponent";
import CardActivityComponent from "./components/CardActivityComponent";


export default function ActivitiesPage() {
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
            <h1>Atividades</h1>
            <CardActivityComponent Activities={activities}/>                    
        </>
    );
}