"use server"

import ContentActivityComponent from "./components/ContentActivityComponent";
import ModalEditActivityComponent from "./components/ModalEditActivityComponent";
import { Header } from "antd/es/layout/layout";
import { Flex } from "antd";
import ModalDeleteActivityComponent from "./components/ModalDeleteActivityComponent";
import ActivityContextProvider from "./components/ActivityContext";
import ToggleActiveButtonComponent from "./components/ToggleActiveButtonComponent";
import DownloadButtonComponent from "./components/DownloadButtonComponent";


export default async function Page({ params }: { params : { id : number }}) {
    const { id } = await params;

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