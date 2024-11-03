import { Activities } from "@prisma/client";
import { prisma } from "../../services/prismaDBProvider";

export async function changeStatusActivitiesRepository(activity: Activities): Promise<void> {
    const {id} = activity;
    try {
        await prisma.activities.update({
            where: {
                id
            },
            data: {
                actived: !activity?.actived
            }
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
};