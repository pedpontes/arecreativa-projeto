"use server"

import ContentActivityComponent from "@/app/components/ContentActivityComponent";
import ModalEditActivityComponent from "@/app/components/ModalEditActivityComponent";
import ModalDeleteActivityComponent from "@/app/components/ModalDeleteActivityComponent";
import ActivityContextProvider from "@/app/contexts/ActivityContext";
import ToggleActiveButtonComponent from "@/app/components/ToggleActiveButtonComponent";
import DownloadButtonComponent from "@/app/components/DownloadButtonComponent";
import { Header } from "antd/es/layout/layout";
import { Flex } from "antd";


export default async function Page({ params }: { params : Promise<{ id: number }> }) {
    const { id } = (await params);
    return (
        <>
            <ActivityContextProvider params={{ id: id }}>
                <Header
                style={{
                    height: 'max-content',
                    backgroundColor: 'white',
                    marginBottom: '10px',
                }}>
                    <Flex 
                    gap={"5px"} 
                    align="center" 
                    justify="flex-end"
                    wrap={true}
                    >
                        <ModalEditActivityComponent/>
                        <DownloadButtonComponent/>
                        <ToggleActiveButtonComponent/>
                        <ModalDeleteActivityComponent/>
                    </Flex>
                </Header>
                <ContentActivityComponent/>
            </ActivityContextProvider>
        </>
    );
};