"use client"

const baseUrl = "http://localhost:3000";
import { Button } from "antd";
import { useContext } from "react";
import {ActivityContext} from "../contexts/ActivityContext";
import {useRouter} from "next/navigation";
import { useModalAction } from "@/app/contexts/ModalActionContext";

const ToggleActiveButtonComponent: React.FC = () => {
    const activity = useContext(ActivityContext);
    const router = useRouter();
    const { setModalAction } = useModalAction();

    const handleToggleActive = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/activities/${activity.id}/changestatus`, {
                method: "PATCH"
            })
            
            setModalAction(response.ok 
                ? {isopen: true, message: "Status da atividade alterada com sucesso!", success: true}
                : {isopen: true, message: "Erro ao alterar status da atividade!", success: false}
            );
            
            router.push("/");
            
        }catch (error) {
            setModalAction({isopen: true, message: "Erro ao alterar status da atividade!", success: false});
            console.log(error);
        }
    };

    return (
        <Button type="primary" color="danger" onClick={handleToggleActive}>
            {activity.actived ? "Desativar" : "Ativar"}
        </Button>
    );
};

export default ToggleActiveButtonComponent;