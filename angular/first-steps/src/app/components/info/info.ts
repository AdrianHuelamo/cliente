import { Component,OnInit } from '@angular/core';
import { RickMorty } from '../../services/rick-morty';
import { CharacterRM, infoApiRM } from '../../common/rminterface';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.html',
  styleUrl: './info.css',
})
export class Info implements OnInit {
filterByName() {
throw new Error('Method not implemented.');
}

  dataApi!: infoApiRM
  characters: CharacterRM[] = [];
  activeIndex: number | null = null;
  charName: string; = "";

  // "Objeto" que nos da opcion a usar metodos del servicio RickMorty
  constructor(private rmservice: RickMorty) {
  }
  // Cuando se inicie 
  ngOnInit(): void {
    this.loadCharacters()
  }

  // Funcion que llama a getCharacters,del servido rmservice
  private loadCharacters(): void {
    this.rmservice.getCharacters().subscribe({
      next:(value) => {
        this.dataApi = value;
        this.characters = this.dataApi.results;
      },
      error:(err) => { 
        console.error(err);
      },
      complete: () => { 
        console.log("Done");       
      },
    })
  }
  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
