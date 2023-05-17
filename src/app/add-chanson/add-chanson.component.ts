import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { artiste } from '../model/artiste.model';
import { chanson } from '../model/chanson.model';
import { chansonService } from '../services/chanson.service';

@Component({
  selector: 'app-add-chanson',
  templateUrl: './add-chanson.component.html'
})
export class AddChansonComponent implements OnInit {

  newChanson = new chanson();
  artistes! : Artistes[];
  newIdCat! : number;
  newCategorie! : artiste;
  
  constructor(private chansonService: chansonService,
              private router : Router) { }

  ngOnInit(): void {

    this.chansonService.listeArticles().
          subscribe(arts => {this.artistes = arts._embedded.artistes;
            console.log(arts);
        });
 
  }

 
  addProduit(){
    this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
    this.produitService.ajouterProduit(this.newProduit)
                      .subscribe(prod => {
                      console.log(prod);
                      this.router.navigate(['produits']);
                      }); 
    }




}
