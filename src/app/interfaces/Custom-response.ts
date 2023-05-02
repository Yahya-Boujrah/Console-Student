import { Annonce } from "./Annonce.interface";
import { Demande } from "./Demande.interface";

export interface CustomResponse {
    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: string;
    message:    string;
    developerMessage:string;
    data: {annonces?: Annonce[] , demandes?: Demande[], demande?:Demande};
     
}