import { Activities, PrismaClient } from "@prisma/client";
import { IActivitiesData } from "../lib/IActivitiesData";
import { prisma } from "../services/prismaDBProvider";

export async function getActivitiesRepository(): Promise<Activities[]> {
    try {
        const activities = await prisma.activities.findMany();
        
        return activities;
    } catch (error: any) {
        throw {error: 500, message: error};
    }
};

export async function createActivitiesRepository(data: IActivitiesData): Promise<Activities> {
    const { title, resum, objective, BNCC, time_total, necessary_resources, guide } = data;
    try {
        const newActivity = await prisma.activities.create({
            data: {
                title,
                resum,
                objective,
                Activities_BNCC: {
                    create: BNCC.map((bncc) => {
                        return {
                            BNCC: {
                                connect: {
                                    id: bncc.BNCC_id
                                }
                            }
                        }
                    })
                },
                time_total,
                necessary_resources,
                guide
            }
        });
        return newActivity
    } catch (error: any) {
        throw {status: 500, message: error};
    }
};

export async function deleteActivitiesRepository(id: number): Promise<void> {
    try {
        await prisma.activities.delete({
            where: {
                id
            }
        });
    } catch (error: any) {
        throw {status: 500, message: error};
    }
};

export async function getActivitiesByIdRepository(id: number): Promise<Activities | null> {
    try {
        const activity = await prisma.activities.findUnique({
            where: {
                id
            }
        });
        return activity;
    } catch (error: any) {
        throw {status: 500, message: error};
    }
};

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
        throw {status: 500, message: error};
    }
};

export async function editActivitiesRepository(id: number, data: IActivitiesData): Promise<Activities> {
    try {
        const newActivity = await prisma.activities.update({
            where: {
                id
            },
            data: {
                ...data, 
        
                Activities_BNCC: {
                  set: data.BNCC.map((bncc) => ({ id: bncc.BNCC_id })),
                },
              },
        });

        return newActivity;
    } catch (error: any) {
        throw {status: 500, message: error};
    }
};

export async function getBNCCOptionsRepository(): Promise<any> {
    try {
        const bNCCOptions = await prisma.bNCC_options.findMany({
            select: {
                id: true,
                title: true
            }
        });
        return bNCCOptions;
    } catch (error: any) {
        throw {status: 500, message: error};
    }
}