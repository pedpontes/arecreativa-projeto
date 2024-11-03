"use server"

import ContentActivityById from "@/app/components/ContentActivityById";
import UpdateButtonModal from "@/app/components/UpdateButtonModal";
import DeleteButtonModal from "@/app/components/DeleteButtonModal";
import ActivityContextProvider from "@/app/contexts/ActivityContext";
import ToggleStatusButton from "@/app/components/ToggleStatusButton";
import DownloadButton from "@/app/components/DownloadButton";
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
                        <UpdateButtonModal/>
                        <DownloadButton/>
                        <ToggleStatusButton/>
                        <DeleteButtonModal/>
                    </Flex>
                </Header>
                <ContentActivityById/>
            </ActivityContextProvider>
        </>
    );
};