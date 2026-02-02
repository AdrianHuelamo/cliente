import { Component, OnInit } from '@angular/core';
import { Valorantservices } from '../../services/valorantservices';
import { Daum, InfoValorant } from '../../common/valorantinterface';

@Component({
  selector: 'app-valorant',
  standalone: false,
  templateUrl: './valorant.html',
  styleUrl: './valorant.css',
})
export class Valorant implements OnInit {
  dataApi!: InfoValorant
  characters: Daum[] = [];
  activeIndex: number | null = null;
  charName: string = '';
  elementsPP: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  allCharacteres: Daum[] = [];
  initialSlice!:number;
  finalSlice!: number;

  constructor(private valorantservices: Valorantservices) {
  }

  ngOnInit(): void {
    this.loadCharacters()
  }

  private loadCharacters(): void {
    this.valorantservices.getCharacters().subscribe({
      next:(value) => {
        this.dataApi = value;
        this.allCharacteres = this.dataApi.data;
        this.totalPages =  Math.ceil( this.allCharacteres.length / this.elementsPP);
        this.pagination();
      },
      error:(err) => { 
        console.error(err);
      },
      complete: () => { 
        console.log("Done");       
      },
    })
  }

  pagination() {
    this.initialSlice = (this.currentPage - 1) * this.elementsPP;
    this.finalSlice = this.initialSlice + this.elementsPP;
    this.characters = this.allCharacteres.slice(this.initialSlice,this.finalSlice)
  }

  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  filterByName() {
    this.characters = this.characters.filter(char => char.displayName.toLocaleLowerCase().includes(this.charName.toLocaleLowerCase()));
  }

  resetFilter() {
    this.loadCharacters();
    this.charName = "";
  }

  orderByName() {
    this.characters.sort((a,b) => {
      if (a.displayName.toLocaleLowerCase() > b.displayName.toLocaleLowerCase()) return 1;
      else if (a.displayName.toLocaleLowerCase() < b.displayName.toLocaleLowerCase()) return -1;
      else return 0;
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pagination();  
    }
  }

  goToPage(page: number) {
    if (page < this.totalPages && page >= 1) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }
}
