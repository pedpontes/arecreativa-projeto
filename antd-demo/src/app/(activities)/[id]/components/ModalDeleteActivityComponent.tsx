"use client"

const baseUrl = "http://localhost:3000";
import React from 'react';
import { Modal, Button } from 'antd';
import { useRouter } from 'next/navigation';
import { ActivityContext } from '../components/ActivityContext';
import { useModalAction } from "@/app/components/ModalActionComponent";

const ActivityModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const activity = React.useContext(ActivityContext);
    const router = useRouter();
    const { setModalAction } = useModalAction();

    const handleOk = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/activities/${activity.id}`, {
                method: 'DELETE',
            });

            if(response.ok) {
                setIsModalOpen(false);
                setModalAction({isopen: true, message: "Atividade exluida com sucesso!", success: true});
                return router.push('/');
            }
            return setModalAction({isopen: true, message: "Erro ao exluir atividade!", success: false});
        } catch (error) {
            setModalAction({isopen: true, message: "Erro ao exluir atividade!", success: false});
            console.error(error);  
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