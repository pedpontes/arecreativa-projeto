"use client"

import React from 'react';
import { Modal, Button } from 'antd';
import { useRouter } from 'next/navigation';
import { ActivityContext } from '../components/ActivityContext';

const ActivityModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const activity = React.useContext(ActivityContext);
    const router = useRouter();

    const handleOk = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/activities/${activity.id}`, {
                method: 'DELETE',
            });

            if(response.ok) {
                setIsModalOpen(false);
                router.push('/');
            }
            return;
        } catch (error) {
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