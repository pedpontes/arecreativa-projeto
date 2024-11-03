"use client"

import { useState, useEffect } from "react";
import { useContext } from 'react';
import { Button, Form } from 'antd';
import { ActivityContext } from '../contexts/ActivityContext';
import { IActivitiesFormSubmit } from '@/app/services/IActivities';
import { useRouter } from "next/navigation";
import { useModalAction } from "@/app/contexts/ActionModalContext";
import FormsModal from "./FormsModal";
import apiConsumer from "@/app/config/ApiInjector";

const ActivityModal: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const activity = useContext(ActivityContext);
    const [form] = Form.useForm();
    const router = useRouter();
    const { setModalAction } = useModalAction();

    useEffect(() => {
        if (isModalOpen) {
            form.setFieldsValue({
                title: activity.title,
                resum: activity.resum,
                objective: activity.objective,
                time_total: activity.time_total,
                necessary_resources: activity.necessary_resources,
                guide: activity.guide,
                BNCC: activity.Activities_BNCC.map(bncc => bncc.BNCC_id),
            });
        }
    }, [isModalOpen, activity, form]);

    const onFinish = async (valuesForm: IActivitiesFormSubmit) => {
        valuesForm = {
            ...valuesForm,
            time_total: Number(valuesForm.time_total),
        }

        try{
            await apiConsumer.updateActivity(activity.id, valuesForm);

            setIsModalOpen(false);
            form.resetFields();
            setModalAction({isopen: true, message: "Atividade editada com sucesso!", success: true});
            return router.push("/");
        }
        catch(error: any){
            console.error(error);
            setModalAction({isopen: true, message: "Erro ao editar atividade!", success: false});
        };
    }

    const handleOk = () => {
        form.submit();
    };

    const handleCancel = () => {
        form.resetFields();
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" color='default' onClick={() => setIsModalOpen(true)}>
                Editar
            </Button>
            <FormsModal
                title="Editar atividade"
                isModalOpen={isModalOpen}
                handleOk={handleOk}
                okText="Editar"
                handleCancel={handleCancel}
                form={form}
                onFinish={onFinish}
                onCancel={handleCancel}
                activity={activity}
            />
        </>
    );
}

export default ActivityModal;
