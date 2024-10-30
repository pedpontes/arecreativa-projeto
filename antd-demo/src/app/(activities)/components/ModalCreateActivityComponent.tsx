import React from 'react';
import { Modal, Button, Input, Tag } from 'antd';
import { Form } from 'antd';
import { CheckboxBNCCComponent } from './CheckboxBNCCComponent';


const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <>
      {required ? <Tag color="error">Obrigatório</Tag> : <Tag color="warning">Opcional</Tag>}
      {label}
    </>
  );

const ActivityModal: React.FC = ( ) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [form] = Form.useForm();

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    const handleCancel = () => {
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
                    <Form.Item name={"BNCC[]"} label="Competências BNCC" required rules={[{required: true, message:"Minimo de uma competência!"}]} tooltip="A Base Nacional Comum Curricular é um documento normativo para as redes de ensino e suas instituições públicas e privadas.">
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
                    <Form.Item>
                        <Button type="primary" htmlType='submit'>Criar</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ActivityModal;