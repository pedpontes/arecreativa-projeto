export interface IActivitiesData {
    BNCC: BNCC[];
    title: string;
    id: number;
    guide: string;
    necessary_resources: string;
    objective: string;
    resum?: string;
    time_total: number;
    updatetAt: string;
    createdAt: string;
    actived: boolean;
}

export interface IActivitiesFormSubmit {
    title: string;
    resum?: string;
    objective: string;
    BNCC: BNCC[];
    time_total: number;
    necessary_resources: string;
    guide: string;
}

export interface BNCC {
    id: number;
    title: string;
}