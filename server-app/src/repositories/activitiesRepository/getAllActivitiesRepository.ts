import { Activities } from "@prisma/client";
import { IActivityBNCCData } from "../../lib/IActivities";
import { prisma } from "../../services/prismaDBProvider";

export async function getActivitiesRepository(): Promise<Activities[]> {
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