export interface IActivitiesData {
    title: string;
    resum?: string;
    objective: string;
    BNCC: BNCC[];
    time_total: number;
    necessary_resources: string;
    guide: string;
}

export interface BNCC {
    BNCC_id: number;
    title: string;
}