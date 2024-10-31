"use client"

import React from 'react';
import { Card } from 'antd';
import { IActivitiesData } from '@/app/lib/IActivities';
import Link from 'next/link';

const CardActivityComponent: React.FC<{ Activities: IActivitiesData[] }> = ({ Activities }) => {

    return(      
    <>  
        <Card
            title="Atividades"
            >
                {Activities.map((item) =>
                    <Link href={`/${item.id}`}>
                            <Card 
                                extra={<span>{item.actived ? "ATIVADO" : "DESATIVADO"}</span>}
                                title={item.title} 
                                type='inner'
                                hoverable={true}
                                style={{
                                    wordWrap: "break-word", 
                                    overflowWrap: "break-word", 
                                    whiteSpace: "normal",
                                    marginBottom: "10px"
                                }}
                            >
                                {item.resum || "Nenhum resumo."}
                            </Card>
                    </Link>
                )}
        </Card>
    
    </>
)};
export default CardActivityComponent;