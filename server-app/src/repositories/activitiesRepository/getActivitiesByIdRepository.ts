import { Activities } from "@prisma/client";
import { prisma } from "../../services/prismaDBProvider";

//FIXME: change return type any to Activities with Activities_BNCC

export async function getActivitiesByIdRepository(id: number): Promise<any> {
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