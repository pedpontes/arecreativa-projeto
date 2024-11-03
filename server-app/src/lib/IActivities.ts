
export interface IActivitiesData {
    title: string;
    resum?: string;
    objective: string;
    BNCC: number[];
    time_total: number;
    necessary_resources: string;
    guide: string;
}

export interface BNCC {
    id: number;
    title: string;
}

export interface IActivitiesDataById {
    title: string;
    resum?: string;
    objective: string;
    BNCC: BNCC[];
    time_total: number;
    necessary_resources: string;
    guide: string;
}