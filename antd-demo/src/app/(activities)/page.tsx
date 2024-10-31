"use client"

import { useState, useEffect } from "react";
import { IActivitiesData } from "../lib/IActivities";
import CreateActivityModalComponent from "./components/ModalCreateActivityComponent";
import CardActivityComponent from "./components/CardActivityComponent";
import { Header } from "antd/es/layout/layout";
import { Flex, Switch } from "antd";
import { Input } from "antd";


export default function Page() {
    const [activities, setActivities] = useState<IActivitiesData[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const [toggleVisibility, setToggleVisibility] = useState<boolean>(true);
    
    useEffect(() => {
        async function fetchActivities () {
            const response = await fetch('http://localhost:3000/api/activities',{
                cache: 'no-store',
            });
            const activitiesData = await response.json();
            
            setActivities(activitiesData);
        }
        fetchActivities();
    }, []);

    const filteredActivities = !toggleVisibility 
        ? activities.filter(activity => activity.title.includes(searchInput))
        : activities.filter(activity => activity.title.includes(searchInput) && activity.actived);

    const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value);

    return (
        <>
            <Header
            style={{
                height: 'max-content',
                backgroundColor: 'white',
                marginBottom: '10px',
            }}
            >
                <Flex 
                gap={"10px"}
                align="center" 
                justify="space-around"
                wrap={true}>
                    <Input 
                        style={{ width: "80%" }}
                        size="middle"
                        placeholder="Buscar atividade" 
                        onInput={handleInputSearch}
                    />
                    <Flex 
                    style={{
                        height: 'max-content',
                    }} 
                        wrap={true} 
                        gap={"10px"} 
                        align="center" 
                        justify="center">
                        Exibir ocultos?
                        <Switch title={"Exibir desabilitados"} defaultChecked={false} onChange={(checked) => setToggleVisibility(checked ? false : true)} />
                    </Flex>
                    <CreateActivityModalComponent/>
                </Flex>
            </Header>
            <CardActivityComponent Activities={filteredActivities}/>                    
        </>
    );
}