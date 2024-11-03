import { Activities } from "@prisma/client";
import { IActivitiesData } from "../../lib/IActivities";
import { prisma } from "../../services/prismaDBProvider";

export async function createActivitiesRepository(data: IActivitiesData): Promise<void> {
    try {
        await prisma.activities.create({
            data: {
                title: data.title,
                objective: data.objective,
                resum: data.resum? data.resum : null,
                time_total: data.time_total,
                necessary_resources: data.necessary_resources,
                guide: data.guide,
                Activities_BNCC: {
                    create: data.BNCC.map((bncc) => ({
                        BNCC: {
                            connect: {
                                id: bncc
                            }
                        }
                    }))
                }
            }
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
};