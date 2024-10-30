"use client"

import React from 'react';
import { Card, List } from 'antd';
import { IActivitiesData } from '@/app/lib/IActivitiesData';
import Link from 'next/link';

const CardActivityComponent: React.FC<{ Activities: IActivitiesData[] }> = ({ Activities }) => {

    return(
    <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={Activities}
        renderItem={(item) => (
            <Link href={`/${item.id}`}>
                <List.Item>
                    <Card 
                        title={item.title} 
                        hoverable 
                        style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        {item.resum || "Nenhum resumo."}
                    </Card>
                </List.Item>
            </Link>
        )}
    />
)
};

export default CardActivityComponent;