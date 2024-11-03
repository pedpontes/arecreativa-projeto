import { prisma } from "../../services/prismaDBProvider";

//FIXME: change return type any to Activities with Activities_BNCC

export async function getActivitiesRepository(): Promise<any> {
    try {
        const activities = await prisma.activities.findMany({
            include:{
                Activities_BNCC: {
                    include: {
                    BNCC: {
                        select: {
                            id: true,
                            title: true
                        }
                    }
                },
            }
        }});
        return activities;
    } catch (error: any) {
        throw new Error(error.message);;
    }
};