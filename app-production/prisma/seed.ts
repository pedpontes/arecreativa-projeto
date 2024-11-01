import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.bNCC_options.createMany({
        data: [
            { title: 'Conhecimento' },
            { title: 'Pensamento crítico, cíentifico e criativo' },
            { title: 'Repertório Cultural' },
            { title: 'Comunicação' },
            { title: 'Trabalho e Projeto de Vida' },
            { title: 'Argumentação' },
            { title: 'Autoconhecimento e Autocuidado' },
            { title: 'Empatia e Cooperação' },
            { title: 'Responsabilidade e Cidadania' },
            { title: 'Cultura Digital' },
        ],
    });

    await prisma.activities.create({
        data: {
            title: "Atividade 1",
            objective: "Objetivo da atividade 1",
            resum: "Resumo da atividade 1",
            time_total: 60,
            necessary_resources: "Recursos necessários para a atividade 1",
            guide: "Guia da atividade 1",
            Activities_BNCC: {
                create: [1,2,3].map((bncc) => ({
                    BNCC: {
                        connect: {
                            id: bncc
                        }
                    }
                }))
            }
        }
    });
    await prisma.activities.create({
        data: {
            title: "Atividade 2",
            objective: "Objetivo da atividade 2",
            resum: "Resumo da atividade 2",
            time_total: 90,
            necessary_resources: "Recursos necessários para a atividade 2",
            guide: "Guia da atividade 2",
            Activities_BNCC: {
                create: [4, 5, 6, 7, 8, 9, 10].map((bncc) => ({
                    BNCC: {
                        connect: {
                            id: bncc
                        }
                    }
                }))
            }
        }
    });
    }
    await prisma.activities.create({
        data: {
            title: "Atividade 3",
            objective: "Objetivo da atividade 3",
            resum: "Resumo da atividade 3",
            time_total: 45,
            necessary_resources: "Recursos necessários para a atividade 3",
            guide: "Guia da atividade 3",
            Activities_BNCC: {
                create: [1, 3, 5].map((bncc) => ({
                    BNCC: {
                        connect: {
                            id: bncc
                        }
                    }
                }))
            }
        }
    });

    await prisma.activities.create({
        data: {
            title: "Atividade 4",
            objective: "Objetivo da atividade 4",
            resum: "Resumo da atividade 4",
            time_total: 120,
            necessary_resources: "Recursos necessários para a atividade 4",
            guide: "Guia da atividade 4",
            Activities_BNCC: {
                create: [2, 4, 6, 8].map((bncc) => ({
                    BNCC: {
                        connect: {
                            id: bncc
                        }
                    }
                }))
            }
        }
    });

    await prisma.activities.create({
        data: {
            title: "Atividade 5",
            objective: "Objetivo da atividade 5",
            resum: "Resumo da atividade 5",
            time_total: 30,
            necessary_resources: "Recursos necessários para a atividade 5",
            guide: "Guia da atividade 5",
            Activities_BNCC: {
                create: [7, 9, 10].map((bncc) => ({
                    BNCC: {
                        connect: {
                            id: bncc
                        }
                    }
                }))
            }
        }
    });

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });