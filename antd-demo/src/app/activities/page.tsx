"use client"

import { useState, useEffect } from "react";
import { IActivitiesData } from "../lib/IActivitiesData";
import CreateActivityModal from "./components/ModalCreateActivityComponent";
import CardActivityComponent from "./components/CardActivityComponent";
import { Header } from "antd/es/layout/layout";
import { Flex } from "antd";
import { Input } from "antd";


export default function ActivitiesPage() {
    const [activities, setActivities] = useState<IActivitiesData[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');
    const [filteredActivities, setFilteredActivities] = useState<IActivitiesData[]>([]);
    
    useEffect(() => {
        async function fetchActivities () {
            const response = await fetch('http://localhost:3000/api/activities');
            const activitiesData = await response.json();
            
            setActivities(activitiesData);
            setFilteredActivities(activitiesData);
        }
        fetchActivities();
    }, []);

    useEffect(() => {
        setFilteredActivities(activities.filter(activity => activity.title.includes(searchInput)));
    }, [searchInput]);

    const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    return (
        <>
            <Header className="bg-inherit">
                <Flex align="center" justify="space-between">
                    <Input 
                        size="middle"
                        className="w-1/3"
                        placeholder="Buscar atividade" 
                        onInput={handleInputSearch}
                    />
                    <CreateActivityModal/>
                </Flex>
            </Header>
            <CardActivityComponent Activities={filteredActivities}/>                    
        </>
    );
}