"use client"

import { Checkbox, Form, Input, Modal, Tag } from "antd";
import { useEffect, useState } from "react";
import { BNCC, IActivitiesFormSubmit, IActivityBNCCData } from "../services/IActivities";
import { useModalAction } from "../contexts/ActionModalContext";
import apiConsumer from "@/app/config/ApiModule";

export const customizeRequiredMark = (label: React.ReactNode, { required }: { required: boolean }) => (
    <>
      {required ? <Tag color="error">Obrigatório</Tag> : <Tag color="warning">Opcional</Tag>}
      {label}
    </>
);

interface ModalFormsComponentProps {
    activity?: IActivityBNCCData,
    form: any,
    title: string, 
    isModalOpen: boolean, 
    handleOk: () => void, 
    okText: string, 
    onCancel: () => void, 
    onFinish: (valuesForm: IActivitiesFormSubmit) => Promise<void>,
    handleCancel: () => void
};

const ModalFormsComponent: React.FC<ModalFormsComponentProps> = (props) => {

    return (
        <>
            <Modal 
                onClose={() => props.form.resetFields()}
                title={props.title} 
                open={props.isModalOpen} 
                onOk={props.handleOk}
                okText={props.okText}
                onCancel={props.handleCancel}>
                <Form
                    onFinish={props.onFinish}
                    form={props.form}
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
                        <CheckboxBNCCEditComponent activity={props.activity} form={props.form}/>
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
    )
};

export default ModalFormsComponent;

const CheckboxBNCCEditComponent: React.FC<{ activity?: IActivityBNCCData, form: any}> = ({activity, form}) => {
    const [selectedValues, setSelectedValues] = useState<number[]>(activity ? activity.Activities_BNCC.map((bncc: { BNCC_id: number; }) => bncc.BNCC_id) : []);
    const [bncc, setBncc] = useState<BNCC[]>([]);

    const { setModalAction } = useModalAction();

    useEffect(() => {
        async function fetchBNCC() {
            try{
                const data = await apiConsumer.getAllBnccOptions();
                setBncc(data);
                
                return data;
            }
            catch(error: any){
                console.error(error);
                setModalAction({isopen: true, message: "Erro ao buscar bnccs!", success: false});
            }
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
            {bncc?.map((bncc_option) => (
                <Checkbox key={bncc_option.id} value={bncc_option.id}>
                    {bncc_option.title}
                </Checkbox>
            ))}
        </Checkbox.Group>
    );
};