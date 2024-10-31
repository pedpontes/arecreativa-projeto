"use client"

import { Button } from "antd";
import { useContext } from "react";
import {ActivityContext} from "./ActivityContext";
import {useRouter} from "next/navigation";

const ToggleActiveButtonComponent: React.FC = () => {
    const activity = useContext(ActivityContext);
    const router = useRouter();

    const handleToggleActive = async () => {
        try {
            await fetch(`http://localhost:3000/api/activities/${activity.id}/changestatus`, {
                method: "PATCH"
            })
                router.push("/");
            }catch (error) {
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