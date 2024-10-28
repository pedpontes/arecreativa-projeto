import React, { useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { IActivitiesData } from '@/app/lib/IActivitiesData';

const ContentActivityComponent: React.FC<IActivitiesData> = (Activity) => {
    const [activityItemsContent, setActivityItemsContent] = useState<DescriptionsProps["items"]>([])


    useEffect(() => {
        let activityItemsMap: DescriptionsProps["items"] = []

        Object.keys(Activity).map((key, index) => {
            activityItemsMap.push(
                {
                    key: index.toString(),
                    label: key,
                    children: <p></p>
                }
            )
        })

        setActivityItemsContent(activityItemsMap);
    }, [])


    return (
        <>
            <Descriptions size='default' column={1} title="Informações da atividade" items={activityItemsContent} />
        </>
    );
}
export default ContentActivityComponent;