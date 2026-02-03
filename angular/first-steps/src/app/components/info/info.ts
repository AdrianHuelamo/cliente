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
  dataApi!: infoApiRM
  characters: CharacterRM[] = [];
  activeIndex: number | null = null;
  charName: string = "";
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;

  // "Objeto" que nos da opcion a usar metodos del servicio RickMorty
  constructor(private rmservice: RickMorty) {
  }
  // Cuando se inicie 
  ngOnInit(): void {
    this.loadCharacters()
  }

  // Funcion que llama a getCharacters,del servido rmservice
  private loadCharacters(): void {
    this.loading = true;
    this.rmservice.getCharacters(this.currentPage).subscribe({
      next:(value) => {
        this.dataApi = value;
        this.characters = this.dataApi.results;
        this.totalPages = this.dataApi.info.pages;
        this.loading = false;
      },
      error:(err) => { 
        console.error(err);
        this.loading = false;
      },
      complete: () => { 
        console.log("Done");       
      },
    })
  }

  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  filterByName() {
    this.characters = this.characters.filter(char => char.name.toLocaleLowerCase().includes(this.charName.toLocaleLowerCase()));
  }

  resetFilter() {
    this.loadCharacters();
    this.charName = "";
  }

  orderByOrigin() {
    this.characters.sort((a,b) => {
      if (a.origin.name.toLocaleLowerCase() > b.origin.name.toLocaleLowerCase()) return 1;
      else if (a.origin.name.toLocaleLowerCase() < b.origin.name.toLocaleLowerCase()) return -1;
      else return 0;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadCharacters();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacters();
    }
  }

  goToPage(page: number) {
    if (page < this.totalPages && page >= 1) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }
}
