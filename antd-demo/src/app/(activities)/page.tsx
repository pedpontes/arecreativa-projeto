"use client"

import getAllActivities from "../services/getAllAtivities";
import CreateActivityModalComponent from "@/app/components/ModalCreateActivityComponent";
import CardActivityComponent from "@/app/components/CardActivityComponent";
import { useState, use, useEffect } from "react";
import { IActivitiesData } from "../lib/IActivities";
import { Header } from "antd/es/layout/layout";
import { Flex, Switch } from "antd";
import { Input } from "antd";


export default function Page() {
    const [activities, setActivities] = useState<IActivitiesData[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const [toggleVisibility, setToggleVisibility] = useState<boolean>(true);

    useEffect(() => {
        async function fetchActivities() {
            const activitiesData = await getAllActivities();
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