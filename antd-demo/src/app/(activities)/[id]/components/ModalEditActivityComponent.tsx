"use client"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
import { BNCC, IActivityBNCCData } from "@/app/lib/IActivities";
import { Checkbox } from "antd";
import { useState, useEffect } from "react";
import { useContext } from 'react';
import { Modal, Button, Form, Input } from 'antd';
import { ActivityContext } from '../components/ActivityContext';
import { customizeRequiredMark } from '../../components/ModalCreateActivityComponent';
import { IActivitiesFormSubmit } from '@/app/lib/IActivities';
import { useRouter } from "next/navigation";
import { useModalAction } from "@/app/components/ModalActionComponent";

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

        console.log(valuesForm);
        try{
            const response = await fetch(`${baseUrl}/api/activities/${activity.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valuesForm),
            });
            if(response.ok){
                setIsModalOpen(false);
                form.resetFields();
                setModalAction({isopen: true, message: "Atividade editada com sucesso!", success: true});
                return router.push("/");
            }
            return setModalAction({isopen: true, message: "Erro ao editar atividade!", success: false});
        }
        catch(e){
            setModalAction({isopen: true, message: "Erro ao editar atividade!", success: false});
            console.error(e);
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
            <Modal 
                onClose={() => form.resetFields()}
                title="Editar atividade" 
                open={isModalOpen} 
                onOk={handleOk}
                okText="Salvar"
                onCancel={handleCancel}>
                <Form
                    onFinish={onFinish}
                    form={form}
                    layout="vertical"
                    requiredMark={customizeRequiredMark}
                    >
                    <Form.Item name={"title"} label="Titulo" required rules={[{required: true, message:"Titulo é obrigatório!"}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={"resum"} label="Resumo">
                        <Input/>
                    </Form.Item>
                    <Form.Item name={"objective"} label="Objetivo" required rules={[{required: true, message:"Objetivo é obrigatório!"}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={"BNCC"} label="Competências BNCC" required rules={[{required: true, message:"Minimo de uma competência!"}]} tooltip="A Base Nacional Comum Curricular é um documento normativo para as redes de ensino e suas instituições públicas e privadas.">
                        <CheckboxBNCCEditComponent activity={activity} form={form}/>
                    </Form.Item>
                    <Form.Item name={"time_total"} label="Tempo total (horas)" required rules={[{required: true, message:"Tempo total é obrigatório!"}]}>
                        <Input type='number'/>
                    </Form.Item>
                    <Form.Item name={"necessary_resources"} label="Recursos necessários" required rules={[{required: true, message:"Recursos necessários é obrigatório!"}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={"guide"} label="Guia" required rules={[{required: true, message:"Guia é obrigatório!"}]}>
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ActivityModal;

const CheckboxBNCCEditComponent: React.FC<{ activity: IActivityBNCCData, form: any}> = ({activity, form}) => {
    const [bncc, setBncc] = useState<BNCC[]>([]);
    const [selectedValues, setSelectedValues] = useState<number[]>(activity.Activities_BNCC.map(bncc => bncc.BNCC_id));
    
    useEffect(() => {
        async function fetchBNCC() {
            const response = await fetch('http://localhost:3000/api/options/bncc');
            const data = await response.json();
            setBncc(data);

            return data;
        }
        fetchBNCC();
    }, []);


    const handleCheckboxChange = (checkedValues: number[]) => {
        setSelectedValues(checkedValues);
        form.setFieldsValue({
            BNCC: checkedValues,
        });
    };

    return (
        <Checkbox.Group value={selectedValues} onChange={handleCheckboxChange}>
            {bncc.map((bncc_option) => (
                <Checkbox key={bncc_option.id} value={bncc_option.id}>
                    {bncc_option.title}
                </Checkbox>
            ))}
        </Checkbox.Group>
    );
};


