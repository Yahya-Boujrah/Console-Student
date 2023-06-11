export interface User {
    id?: number;
    nom?: string;
    prenom: string;
    cne: string;
    cin: string;
    niveau: string;
    filiere: string;
    dateNaissance : Date;
    lieuNaissance : string;
    email : string;
    tel : string;
    isPasswordChanged: Boolean;

}