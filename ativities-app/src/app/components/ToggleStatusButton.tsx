"use client"

import { Button } from "antd";
import { useContext } from "react";
import {ActivityContext} from "../contexts/ActivityContext";
import {useRouter} from "next/navigation";
import { useModalAction } from "@/app/contexts/ActionModalContext";
import apiConsumer from "@/app/config/ApiModule";

const ToggleActiveButtonComponent: React.FC = () => {
    const activity = useContext(ActivityContext);
    const router = useRouter();
    const { setModalAction } = useModalAction();

    const handleToggleActive = async () => {
        try {
            await apiConsumer.toggleActivityStatus(activity.id);
            
            setModalAction({isopen: true, message: "Status da atividade alterada com sucesso!", success: true});
            return router.push("/");
        }catch (error) {
            console.log(error);
            setModalAction({isopen: true, message: "Erro ao alterar status da atividade!", success: false});
        }
    };

    return (
        <Button type="primary" color="danger" onClick={handleToggleActive}>
            {activity.actived ? "Desativar" : "Ativar"}
        </Button>
    );
};

export default ToggleActiveButtonComponent;