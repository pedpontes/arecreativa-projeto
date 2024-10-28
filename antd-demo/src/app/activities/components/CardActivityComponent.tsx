"use client"

import React from 'react';
import { Card, List } from 'antd';
import EditActivityModal from '@/app/activities/[id]/components/ModalEditActivityComponent';
import { IActivitiesData } from '@/app/lib/IActivitiesData';

const CardActivityComponent: React.FC<{ Activities: IActivitiesData[] }> = ({ Activities }) => {
    const handleRedirectActivity = (item: IActivitiesData) => {
        window.location.href = `/activities/${item.id}`;
    }

    return(
    <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={Activities}
        renderItem={(item) => (
        <List.Item>
            <Card onClick={() => handleRedirectActivity(item)} title={item.title}>{item.resum || "Nenhum resumo."}</Card>
        </List.Item>
        )}
    />
)
};

export default CardActivityComponent;