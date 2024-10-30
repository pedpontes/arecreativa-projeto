import React, { useContext, useEffect, useState } from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { ActivityContext } from '../page';

const ContentActivityComponent: React.FC = () => {
    const [activityItemsContent, setActivityItemsContent] = useState<DescriptionsProps["items"]>([])
    const activity = useContext(ActivityContext);

    useEffect(() => {
        let activityItemsMap: DescriptionsProps["items"] = []

        Object.keys(activity).map((key, index) => {
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