"use client"

import { CheckSquareOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useState, createContext, ReactNode, useContext } from "react";

interface ModalActionProps {
    success: boolean;
    message: string;
    isopen: boolean;
}

interface ModalActionContextProps {
    modalAction: ModalActionProps;
    setModalAction: React.Dispatch<React.SetStateAction<ModalActionProps>>;
}

export const ModalActionContext = createContext<ModalActionContextProps | undefined>(undefined);

interface ModalActionProviderProps {
    children: ReactNode;
}

const ModalActionProvider: React.FC<ModalActionProviderProps> = ({ children }) => {
    const [modalAction, setModalAction] = useState<ModalActionProps>({
        success: false,
        message: "",
        isopen: false,
    });

    return (
        <>
            <Modal
                title={"Aviso"}
                onOk={() => setModalAction((prev) => ({ ...prev, isopen: false }))}
                open={modalAction.isopen}
                cancelButtonProps={{ style: { display: "none" } }}
            >
                {modalAction.success 
                    ? <p><CheckSquareOutlined /> {modalAction.message}</p> 
                    : <p><CloseCircleOutlined /> {modalAction.message}</p>}
            </Modal>
            <ModalActionContext.Provider value={{ modalAction, setModalAction }}>
                {children}
            </ModalActionContext.Provider>
        </>
    );
};

export const useModalAction = () => {
    const context = useContext(ModalActionContext);
    if (context === undefined) {
        throw new Error("useModalAction must be used within a ModalActionProvider");
    }
    return context;
};

export default ModalActionProvider;