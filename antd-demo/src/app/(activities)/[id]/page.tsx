"use client"

import { IActivitiesData } from "@/app/lib/IActivitiesData";
import { createContext, useEffect, useState } from "react";
import ContentActivityComponent from "./components/ContentActivityComponent";
import ModalEditActivityComponent from "./components/ModalEditActivityComponent";
import { Header } from "antd/es/layout/layout";
import { Flex } from "antd";
import ModalDeleteActivityComponent from "./components/ModalDeleteActivityComponent";


export const ActivityContext = createContext<IActivitiesData>({} as IActivitiesData);

export default function Page({ params }: { params : { id : number }}) {
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
                    <ActivityContext.Provider value={activity}>
                        <Header className="bg-inherit">
                            <Flex gap={"5px"} align="center" justify="flex-end">
                                <ModalEditActivityComponent/>
                                <ModalDeleteActivityComponent/>
                                //desative button
                                //download button
                            </Flex>
                        </Header>
                        <ContentActivityComponent/>
                    </ActivityContext.Provider>
                </>
            )}
        </>
    );
};