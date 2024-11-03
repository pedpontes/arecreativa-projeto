"use client"

import CreateButtonModal from "@/app/components/CreateButtonModal";
import CardActivity from "@/app/components/CardActivity";
import { useState, useEffect } from "react";
import { IActivitiesData } from "../services/IActivities";
import { Header } from "antd/es/layout/layout";
import { Flex, Switch } from "antd";
import { Input } from "antd";
import { useModalAction } from "@/app/contexts/ActionModalContext";
import apiConsumer from "@/app/config/ApiInjector";

export default function Page() {
    const [activities, setActivities] = useState<IActivitiesData[]>([]);
    const [searchInput, setSearchInput] = useState<string>("");
    const [toggleVisibility, setToggleVisibility] = useState<boolean>(true);
    const { setModalAction } = useModalAction();

    useEffect(() => {
        async function fetchActivities() {
            try{
                const activitiesData = await apiConsumer.getAllActivities();

                setActivities(activitiesData);
            }
            catch(error: any){
                console.error(error);
                setModalAction({isopen: true, message: "Erro ao buscar atividades!", success: false});
                setActivities([]);
            };
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
                    <CreateButtonModal/>
                </Flex>
            </Header>
            <CardActivity Activities={filteredActivities}/>                    
        </>
    );
}