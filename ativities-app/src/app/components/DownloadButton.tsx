"use client"

import {Button} from "antd";
import {useContext} from "react";
import {ActivityContext} from "../contexts/ActivityContext";
import {useModalAction} from "@/app/contexts/ActionModalContext";
import getPdfActivity from "../services/getPdfActivity";

const DownloadButtonComponent: React.FC = () => {
    const activity = useContext(ActivityContext);
    const { setModalAction } = useModalAction();

    const handleClickDownload = async () => {
        try {
            const blob = await getPdfActivity(activity.id);

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