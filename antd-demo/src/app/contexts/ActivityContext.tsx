"use client"

import { IActivityBNCCData } from "@/app/lib/IActivities";
import { createContext, useEffect, useState } from "react";
import getActivityById from "../services/getActivityById";

export const ActivityContext = createContext<IActivityBNCCData>({} as IActivityBNCCData);

const ActivityContextProvider: React.FC<{ children: React.ReactNode, params: { id: number } }> = ({ children, params }) => {
    const [activity, setActivity] = useState<IActivityBNCCData>({} as IActivityBNCCData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchActivity() {
            const activityData = await getActivityById(params.id);
            
            setActivity(activityData);
        }
        
        fetchActivity();
    },[params.id]);

    useEffect(() => {
        if(activity.id) {
            setLoading(true);
        }
    }, [activity]);

    return (
        <> 
            {loading && 
                <ActivityContext.Provider value={activity}>
                    {children}
                </ActivityContext.Provider>}
        </>
    )
};

export default ActivityContextProvider;