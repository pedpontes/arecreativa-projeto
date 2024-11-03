import { prisma } from "../../services/prismaDBProvider";

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
        throw new Error(error.message);;
    }
}