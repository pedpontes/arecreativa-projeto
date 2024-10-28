import React from 'react';
import { Modal, Button, Input, Tag } from 'antd';
import { Form } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';


const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <>
      {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
      {label}
    </>
  );

const ActivityModal: React.FC = ( ) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [form] = Form.useForm();

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
                Create Activity
            </Button>
            <Modal title="Criar atividade" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                form={form}
                layout="vertical"
                requiredMark={customizeRequiredMark}
                >
                <Form.Item label="Field A" required tooltip="This is a required field">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item
                    label="Field B"
                    tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                >
                    <Input placeholder="input placeholder" />
                </Form.Item>
                    <Form.Item>
                        <Button type="primary">Criar</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default ActivityModal;