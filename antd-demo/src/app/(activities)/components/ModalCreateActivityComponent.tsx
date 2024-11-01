const baseUrl = "http://localhost:3000";
import React from 'react';
import { Modal, Button, Input, Tag } from 'antd';
import { Form } from 'antd';
import { IActivitiesFormSubmit } from '@/app/lib/IActivities';
import CheckboxBNCCComponent from './CheckboxBNCCComponent';
import { useModalAction } from "@/app/components/ModalActionComponent"


export const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <>
      {required ? <Tag color="error">Obrigatório</Tag> : <Tag color="warning">Opcional</Tag>}
      {label}
    </>
  );

const ActivityModal: React.FC = ( ) => {
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
            const response = await fetch(`${baseUrl}/api/activities`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(valuesForm),
            });
            if(response.ok){
                form.resetFields();
                setIsModalOpen(false);
                window.location.reload();
                return setModalAction({isopen: true, message: "Atividade criada com sucesso!", success: true});
            }
            return setModalAction({isopen: true, message: "Erro ao criar atividade!", success: false});
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
            <Modal 
                title="Criar atividade" 
                open={isModalOpen} 
                onOk={handleOk}
                okText="Criar"
                onCancel={handleCancel}>
                <Form
                    onFinish={onFinish}
                    form={form}
                    layout="vertical"
                    requiredMark={customizeRequiredMark}
                    >
                    <Form.Item name={"title"} label="Titulo" required rules={[{required: true, message:"Titulo é obrigatório!"}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={"resum"} label="Resumo">
                        <Input />
                    </Form.Item>
                    <Form.Item name={"objective"} label="Objetivo" required rules={[{required: true, message:"Objetivo é obrigatório!"}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={"BNCC"} label="Competências BNCC" required rules={[{required: true, message:"Minimo de uma competência!"}]} tooltip="A Base Nacional Comum Curricular é um documento normativo para as redes de ensino e suas instituições públicas e privadas.">
                        <CheckboxBNCCComponent />
                    </Form.Item>
                    <Form.Item name={"time_total"} label="Tempo total (horas)" required rules={[{required: true, message:"Tempo total é obrigatório!"}]}>
                        <Input type='number'/>
                    </Form.Item>
                    <Form.Item name={"necessary_resources"} label="Recursos necessários" required rules={[{required: true, message:"Recursos necessários é obrigatório!"}]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={"guide"} label="Guia" required rules={[{required: true, message:"Guia é obrigatório!"}]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ActivityModal;