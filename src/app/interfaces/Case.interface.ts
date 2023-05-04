export interface Case {
    id?: number;
    sujet: string;
    type:string;
    description: string;
    date : Date;
    studentId: string;
    priorite?: string;
    origine: string;
    Statut: string;
    motifRejet?: string;
    commentaire?: string;

}