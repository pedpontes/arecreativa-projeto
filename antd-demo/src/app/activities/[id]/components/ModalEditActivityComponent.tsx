import React from 'react';
import { Modal, Button } from 'antd';
import { IActivitiesData } from '@/app/lib/IActivitiesData';

interface EditActivityModalProps {
    activity: IActivitiesData;
}

const ActivityModal: React.FC<EditActivityModalProps> = ({ activity }: EditActivityModalProps) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" color='default' onClick={() => setIsModalOpen(true)}>
                Editar
            </Button>
            <Modal title={"Editar atividade #" + activity.id} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>{activity.title}</p>
                <p>{activity.id}</p>
                <p>{activity.BNCC}</p>
            </Modal>
        </>
    );
};

export default ActivityModal;