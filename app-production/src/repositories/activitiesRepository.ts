import { Activities } from "@prisma/client";
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
    console.log(data);  // Debug: verificar os dados recebidos
    try {
        const newActivity = await prisma.activities.create({
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
        return newActivity;
    } catch (error: any) {
        console.error("Erro ao criar atividade:", error);
        throw { status: 500, message: error };
    }
};

export async function deleteActivitiesRepository(id: number): Promise<void> {
    try {
        await prisma.activities_BNCC.deleteMany({
            where: {
                Activities_id: id
            }
        });
        await prisma.activities.delete({
            where: {
                id
            }
        });
    } catch (error: any) {
        throw {status: 500, message: error};
    }
};

export async function getActivitiesByIdRepository(id: number): Promise<any | null> {
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

export async function editActivitiesRepository(id: number, data: IActivitiesData): Promise<void> {
    try {
        const newActivity = await prisma.activities.update({
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
        console.error("Erro ao editar atividade:", error);
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