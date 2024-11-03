
import React from 'react';
import { Button } from 'antd';
import { Form } from 'antd';
import { IActivitiesFormSubmit } from '@/app/lib/IActivities';
import { useModalAction } from "@/app/contexts/ActionModalContext"
import createActivity from '../services/createActivity';
import FormsModal from './FormsModal';

const ActivityModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [form] = Form.useForm();
    const { setModalAction } = useModalAction();

    const handleOk = () => {
        form.submit();
    };

    const onFinish = async (valuesForm: IActivitiesFormSubmit) => {
        valuesForm = {
            ...valuesForm,
            time_total: Number(valuesForm.time_total),
        }
        try{
            await createActivity(valuesForm);
            
            form.resetFields();
            setIsModalOpen(false);
            setModalAction({isopen: true, message: "Atividade criada com sucesso!", success: true});
            return window.location.reload();
        }
        catch(e){
            console.error(e);
            return setModalAction({isopen: true, message: "Erro ao criar atividade!", success: false});
        }
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    return (
        <>
            <Button size='large' type="primary" onClick={() => setIsModalOpen(true)}>
                Criar atividade
            </Button>
            <FormsModal
                form={form}
                title="Criar atividade"
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                okText="Criar"
                onCancel={handleCancel}
                onFinish={onFinish}
                handleCancel={handleCancel}
            />
        </>
    );
};

export default ActivityModal;