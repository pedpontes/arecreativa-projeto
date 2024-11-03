import { IActivitiesData } from "../../lib/IActivitiesData";
import { prisma } from "../../services/prismaDBProvider";

export async function editActivitiesRepository(id: number, data: IActivitiesData): Promise<void> {
    try {
        await prisma.activities.update({
            where: {
                id
            },
            data: {
                title: data.title,
                objective: data.objective,
                resum: data.resum,
                time_total: data.time_total,
                necessary_resources: data.necessary_resources,
                guide: data.guide,

                Activities_BNCC: {
                    deleteMany: {},
                    create: data.BNCC.map((bncc) => ({
                        BNCC: {
                            connect: {
                                id: bncc
                            }
                        }
                    })),
                },
              },
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
};