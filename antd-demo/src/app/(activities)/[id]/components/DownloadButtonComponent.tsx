"use client"

const baseUrl = "http://localhost:3000";
import { Button } from "antd";
import { useContext } from "react";
import {ActivityContext} from "./ActivityContext";
import { useModalAction } from "@/app/components/ModalActionComponent";

const DownloadButtonComponent: React.FC = () => {
    const activity = useContext(ActivityContext);
    const { setModalAction } = useModalAction();

    const handleClickDownload = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/activities/pdf/${activity.id}`, {
                method: "GET"
            })

            if(!response.ok) {
                throw new Error("Error to download pdf");
            }
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            
            const link = document.createElement("a");
            link.href = url;
            link.download = `activity-${activity.id}.pdf`;
            link.click();
            
            window.URL.revokeObjectURL(url);
        } catch (error) {
            setModalAction({isopen: true, message: "Erro ao fazer download do arquivo!", success: false});
            console.error(error);
        }
    }


    return (
        <Button onClick={handleClickDownload} type="primary" color="default">
            PDF
        </Button>
    )
};

export default DownloadButtonComponent;