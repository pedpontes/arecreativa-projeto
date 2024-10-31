"use client"

import { IActivityBNCCData } from "@/app/lib/IActivities";
import { createContext, useEffect, useState } from "react";


export const ActivityContext = createContext<IActivityBNCCData>({} as IActivityBNCCData);


const ActivityContextProvider: React.FC<{ children: React.ReactNode, params: { id: number } }> = ({ children, params }) => {
    const [activity, setActivity] = useState<IActivityBNCCData>({} as IActivityBNCCData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchActivity() {
            const response = await fetch(`http://localhost:3000/api/activities/${params.id}`, {
                cache: 'no-store',
            });
            const activityData = await response.json();
            
            setActivity(activityData);
        }
        
        fetchActivity();

    }, []);

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