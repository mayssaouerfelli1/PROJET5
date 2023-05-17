import { artiste } from "./artiste.model";

export class chanson {
    idChanson! : number;
    dateCreation! : Date ;
    nom! : string;
    artiste! : artiste;
    }