"use client"

import React from 'react';
import { Modal, Button } from 'antd';
import { useRouter } from 'next/navigation';
import { ActivityContext } from '../contexts/ActivityContext';
import { useModalAction } from "@/app/contexts/ActionModalContext";
import apiConsumer from "@/app/config/ApiModule";

const ActivityModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const activity = React.useContext(ActivityContext);
    const router = useRouter();
    const { setModalAction } = useModalAction();

    const handleOk = async () => {
        try {
            await apiConsumer.deleteActivity(activity.id);

            setIsModalOpen(false);
            setModalAction({isopen: true, message: "Atividade exluida com sucesso!", success: true});
            return router.push('/');            
        } catch (error) {
            console.error(error);  
            setIsModalOpen(false);
            setModalAction({isopen: true, message: "Erro ao exluir atividade!", success: false});
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button 
            type="primary" 
            onClick={() => setIsModalOpen(true)}
            style={{
                backgroundColor: "red",
            }}>
                Excluir
            </Button>
            <Modal 
                cancelText="CANCELAR"
                okText="EXCLUIR" 
                okType='danger' 
                title={"Tem certeza que deseja excluir essa atividade? A exclusão é PERMANENTE!"} 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}>
            </Modal>
        </>
    );
};

export default ActivityModal;