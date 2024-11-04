import { Activities } from "@prisma/client";
import { prisma } from "../../services/prismaDBProvider";

export async function getActivitiesByIdRepository(id: number): Promise<Activities | null> {
    try {
        const activity = await prisma.activities.findUnique({
            where: {
                id
            },
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
        return activity;
    } catch (error: any) {
        throw new Error(error.message);
    }
};