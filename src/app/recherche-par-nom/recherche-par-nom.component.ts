import { Component, OnInit } from '@angular/core';
import { chanson } from '../model/chanson.model';
import { chansonService } from '../services/chanson.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomProduit! : string;
  chansons!: chanson[];
  allChansons!: chanson[];
  searchTerm!: string;
  
  constructor(private chansonService : chansonService) { }

  ngOnInit(): void {
    this.chansonService.listeChanson().subscribe(chans => {
      console.log(chans);
      this.chansons = chans;
      });
      
  }

  rechercherChans(){
    this.chansonService.rechercherParNom(this.nom).
    subscribe(chans => {
      console.log(chans);
      this.chansons=chans;});
  }

  onKeyUp(filterText : string){
    this.chansons = this.allChansons.filter(item =>
    item.nom.toLowerCase().includes(filterText));
    }
    

}
