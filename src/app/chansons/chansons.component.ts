import { Component, OnInit } from '@angular/core';
import { chanson } from '../model/chanson.model';
import { chansonService } from '../services/chanson.service';

@Component({
  selector: 'app-chansons',
  templateUrl: './chansons.component.html'
})
export class chansoonsComponent implements OnInit {

    chansons? : chanson[]; //un tableau de chansons

  constructor(private chansonService: chansonService) {
   //this.chansons=[];
     }

  ngOnInit(): void {

    this.chargerChansons();
  }

  chargerChansons(){
    this.chansonService.listeChanson().subscribe(chans => {
      console.log(chans);
      this.chansons = chans;
      });
  }

supprimerChanson(c: chanson)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.chansonService.supprimerChanson(c.idChanson).subscribe(() => {
        console.log("chanson supprimée");
        this.chargerChansons();     
      
});
}
 
 

}
