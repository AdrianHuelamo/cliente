import { Component, OnInit } from '@angular/core';
import { Dragonballservices } from '../../services/dragonballservices';
import { Item, Infodragonball } from '../../common/dragonballinterface';

@Component({
  selector: 'app-dragonball',
  standalone: false,
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball implements OnInit {
  dataApi!: Infodragonball

  allCharacteres: Item[] = [];
  filteredCharacters: Item[] = [];
  characters: Item[] = [];

  activeIndex: number | null = null;
  charName: string = '';
  race: string = '';
  limit: number = 6;
  moreInfo: boolean = false;
  totalCharacters: number = 0;
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  initialSlice!:number;
  finalSlice!: number;
  sortState: number = 0;

  constructor(private dragonballservices: Dragonballservices) {
  }

  ngOnInit(): void {
    this.loadCharacters()
  }

  private loadCharacters(): void {
    this.dragonballservices.getCharacters(this.currentPage, this.limit).subscribe({
      next:(value) => {
        this.dataApi = value;
        this.allCharacteres = [...this.dataApi.items];
        this.filteredCharacters = [...this.dataApi.items];
        this.characters = [...this.dataApi.items];
        this.totalPages = this.dataApi.meta.totalPages;
        this.limit = this.dataApi.meta.itemsPerPage;
        this.totalCharacters = this.dataApi.meta.totalItems;
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

  applyFilterAndSort() {
    this.filteredCharacters = this.allCharacteres.filter(char => 
        char.race.toLocaleLowerCase().includes(this.race.toLocaleLowerCase())
    );

    if (this.sortState === 1) {
        this.filteredCharacters.sort((a, b) => 
            a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
        );
    } else if (this.sortState === 2) {
        this.filteredCharacters.sort((a, b) => 
            b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase())
        );
    }

    this.currentPage = 1;
    this.characters = this.filteredCharacters;
  }

  toggleSort() {
    if (this.sortState === 0) {
        this.sortState = 1; 
    } else if (this.sortState === 1) {
        this.sortState = 2; 
    } else {
        this.sortState = 0; 
    }

    this.applyFilterAndSort();
  }

  filterByRace() {
      this.applyFilterAndSort();
      this.race = "";
  }

  

  resetFilter() {
    this.charName = "";
    this.race = "";
    this.characters = [...this.allCharacteres];
    this.currentPage = 1;
    this.loadCharacters();
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

  firstPage() {
    if (this.currentPage > 1) {
      this.currentPage = 1;
      this.loadCharacters();
    }
  }

  lastPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.totalPages;
      this.loadCharacters();
    }
  }

  goToPage(page: number) {
    if (page < this.totalPages && page >= 1) {
      this.currentPage = page;
      this.loadCharacters();
    }
  }
  
  limitpp(limit: number) {
    if (limit < this.totalCharacters && limit >= 1) {
      this.limit = limit;
      this.loadCharacters();
    }
  }

  moreinfo() {
    if (this.moreInfo == true) {
      this.moreInfo = false;
    } else {
      this.moreInfo = true;
    }
  }
}
