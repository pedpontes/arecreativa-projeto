"use client"

import { IActivityBNCCData } from "@/app/services/IActivities";
import { createContext, useEffect, useState } from "react";
import { useModalAction } from "./ActionModalContext";
import { useRouter } from "next/navigation";
import apiConsumer from "../config/ApiModule";

export const ActivityContext = createContext<IActivityBNCCData>({} as IActivityBNCCData);

const ActivityContextProvider: React.FC<{ children: React.ReactNode, params: { id: number } }> = ({ children, params }) => {
    const router = useRouter();
    const [activity, setActivity] = useState<IActivityBNCCData>({} as IActivityBNCCData);
    const [loading, setLoading] = useState(false);
    const { setModalAction } = useModalAction();

    useEffect(() => {
        async function fetchActivity() {
            try {
                const activityData = await apiConsumer.getActivityById(params.id);
                
                setActivity(activityData);
            } catch (error) {
                console.error(error);
                setModalAction({isopen: true, message: "Erro ao buscar atividade!", success: false});
                router.push("/");
            }
            
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