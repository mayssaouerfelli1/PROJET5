import { Injectable } from '@angular/core';
import { artiste } from '../model/artiste.model';
import { chanson } from '../model/chanson.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { artisteWrapper } from '../model/artisteWrapped.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class chansonService {
  apiURL: string = 'http://localhost:8080/chansons/api';
  apiURLCat: string = 'http://localhost:8080/chansons/art';

  chansons : chanson[]; //un tableau de chansons
  //artistes : artiste[];
 

  constructor(private http : HttpClient) { 
    
    
    this.chansons = [{idChanson : 1,dateCreation : new Date("10/05/2023"), nom : "tourne vide",
  artiste : {idArtiste : 1, nomArtiste : "INDILA",nationaliteArtiste : "française"} },
                     {idChanson : 3,dateCreation : new Date("02/04/2023"),nom : "HIER ENCORE",
                    artiste :  {idArtiste : 2 , nomArtiste : "CHARLES AZNAVOUR",nationaliteArtiste : "franco-arménien"}},
                     {idChanson : 3,  dateCreation : new Date("09/04/2023") ,nom :"MILLORD", 
                     artiste : {idArtiste : 3, nomArtiste : "EDITH PIAF" ,nationaliteArtiste :"française"}}
                    ];
    
  }

  listeChanson(): Observable<chanson[]>{
    return this.http.get<chanson[]>(this.apiURL);
    }

    ajouterChanson( chans: chanson):Observable<chanson>{
      return this.http.post<chanson>(this.apiURL, chans, httpOptions);
      }

      supprimerChanson(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterChanson(id: number): Observable<chanson> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<chanson>(url);
          }

          trierChanson(){
            this.chansons = this.chansons.sort((n1,n2) => {
              if (n1.idChanson > n2.idChanson) {
                  return 1;
              }
             if (n1.idChanson < n2.idChanson) {
                  return -1;
              }
            return 0;
          });
          }
      

          updateChanson(chans :chanson) : Observable<chanson>
            {
                return this.http.put<chanson>(this.apiURL, chans, httpOptions);
            }

         
         
       listeChansons():Observable<artisteWrapper>{
            return this.http.get<artisteWrapper>(this.apiURLCat);
            }     

  rechercherParArtiste(idArtiste: number): Observable<chanson[]> {
    const url = `${this.apiURL}/prodscat/${idArtiste}`;
    return this.http.get<chanson[]>(url);
  } 

  rechercherParNom(nom: string):Observable< chanson[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<chanson[]>(url);
    }

 
}
