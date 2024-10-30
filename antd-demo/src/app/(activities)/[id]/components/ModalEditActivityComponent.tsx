import React, { useContext } from 'react';
import { Modal, Button } from 'antd';
import { ActivityContext } from '../page';

const ActivityModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const activity = useContext(ActivityContext);

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