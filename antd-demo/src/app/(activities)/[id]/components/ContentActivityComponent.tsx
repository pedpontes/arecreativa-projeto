"use client"

import React, { useContext } from 'react';
import { Descriptions } from 'antd';
import { ActivityContext } from '../components/ActivityContext';

const ContentActivityComponent: React.FC = () => {
    const activity = useContext(ActivityContext);
    
    return (
        <>
            <Descriptions bordered layout='vertical' size='default' column={1} title="Informações da atividade">
                <Descriptions.Item label="Status">{activity.actived ? "ATIVA" : "DESATIVADA"}</Descriptions.Item>
                <Descriptions.Item label="Título">{activity.title}</Descriptions.Item>
                <Descriptions.Item label="Resumo">{activity.resum}</Descriptions.Item>
                <Descriptions.Item label="Objetivo">{activity.objective}</Descriptions.Item>
                <Descriptions.Item label="Recursos necessários">{activity.necessary_resources}</Descriptions.Item>
                <Descriptions.Item label="Guia">{activity.guide}</Descriptions.Item>
                <Descriptions.Item label="Competências BNCC">
                    {activity.Activities_BNCC.map((item) => item.BNCC.title).join(', ')}
                </Descriptions.Item>
                <Descriptions.Item label="Tempo de duração">{activity.time_total} Horas</Descriptions.Item>
            </Descriptions>
        </>
    );
}
export default ContentActivityComponent;