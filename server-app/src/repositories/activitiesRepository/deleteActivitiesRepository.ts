import { prisma } from "../../services/prismaDBProvider";

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
        throw new Error(error.message);
    }
};