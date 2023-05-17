import { Component, OnInit } from '@angular/core';
import { artiste } from '../model/artiste.model';
import { chanson } from '../model/chanson.model';
import { chansonsComponent } from '../chansons/chansons.component';
import { chansonService } from '../services/chanson.service';

@Component({
  selector: 'app-recherche-par-artiste',
  templateUrl: './recherche-par-artiste.component.html',
  styles: [
  ]
})
export class RechercheParArtisteComponent implements OnInit {
  idArtiste! : number;
  artistes! : artiste[];
  chansons! : chanson[];


  constructor(private chansonService : artisteService) { }

  ngOnInit(): void {
    this.chansonService.listeArtistes().
      subscribe(arts => {this.artistes = arts._embedded.artistes;
      console.log(arts);
    });

  }

  onChange() {
    this.chansonService.rechercherParArtiste(this.idArtiste).
      subscribe(chans =>{this.chansons=chans});

    }

}
