export interface IActivitiesBase {
    title: string;
    resum?: string;
    objective: string;
    time_total: number;
    necessary_resources: string;
    guide: string;
};

export interface IActivitiesData extends IActivitiesBase{
    id: number;
    time_total: number;
    updatedAt: string;
    createdAt: string;
    actived: boolean;
}

export interface IActivityBNCCData extends IActivitiesData{
    Activities_BNCC: IActivitiesBNCCData[];
}

export interface IActivitiesBNCCBase{
    id: number;
    createdAt: string;
    updatedAt: string;
    Activities_id: number;
    BNCC_id: number;
}

interface IActivitiesBNCCData extends IActivitiesBNCCBase{
    BNCC: BNCC;
};

export interface IActivitiesFormSubmit extends IActivitiesBase{
    BNCC: number[];
}

export interface BNCC {
    id: number;
    title: string;
}
