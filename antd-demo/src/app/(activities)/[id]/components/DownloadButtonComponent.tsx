"use client"

import { Button } from "antd";
import { useContext } from "react";
import {ActivityContext} from "./ActivityContext";

const DownloadButtonComponent: React.FC = () => {
    const activity = useContext(ActivityContext);

    const handleClickDownload = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/activities/pdf/${activity.id}`, {
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