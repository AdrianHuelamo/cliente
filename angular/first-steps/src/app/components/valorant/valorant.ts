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

  allCharacteres: Daum[] = [];
  filteredCharacters: Daum[] = [];
  characters: Daum[] = [];

  activeIndex: number | null = null;
  charName: string = '';
  loading: boolean = false;
  elementsPP: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  initialSlice!:number;
  finalSlice!: number;
  sortState: number = 0;

  constructor(private valorantservices: Valorantservices) {
  }

  ngOnInit(): void {
    this.loadCharacters()
  }

  private loadCharacters(): void {
    this.loading = true;
    this.valorantservices.getCharacters().subscribe({
      next:(value) => {
        this.dataApi = value;
        this.allCharacteres = [...this.dataApi.data];
        this.filteredCharacters = [...this.dataApi.data];
        this.calculateTotalPages();
        this.pagination();
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

  calculateTotalPages() {
     this.totalPages = Math.ceil(this.filteredCharacters.length / this.elementsPP);
  }

  pagination() {
    this.initialSlice = (this.currentPage - 1) * this.elementsPP;
    this.finalSlice = this.initialSlice + this.elementsPP;
    this.characters = this.filteredCharacters.slice(this.initialSlice,this.finalSlice)
  }

  toggleAccordion(index:number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  //filterByName() {
  //  this.filteredCharacters = this.allCharacteres.filter(char => char.displayName.toLocaleLowerCase().includes(this.charName.toLocaleLowerCase())); 
  //  this.currentPage = 1;
  //  this.calculateTotalPages();
  //  this.pagination();
  //}

  applyFilterAndSort() {
    this.filteredCharacters = this.allCharacteres.filter(char => 
        char.displayName.toLocaleLowerCase().includes(this.charName.toLocaleLowerCase())
    );

    if (this.sortState === 1) {
        this.filteredCharacters.sort((a, b) => 
            a.displayName.toLocaleLowerCase().localeCompare(b.displayName.toLocaleLowerCase())
        );
    } else if (this.sortState === 2) {
        this.filteredCharacters.sort((a, b) => 
            b.displayName.toLocaleLowerCase().localeCompare(a.displayName.toLocaleLowerCase())
        );
    }

    this.currentPage = 1;
    this.calculateTotalPages();
    this.pagination();
  }

  toggleSort() {
    if (this.sortState === 0) {
        this.sortState = 1; 
    } else if (this.sortState === 1) {
        this.sortState = 2; 
    } else {
        this.sortState = 0; 
    }

    // Aplicamos los cambios
    this.applyFilterAndSort();
  }

  filterByName() {
      this.applyFilterAndSort();
  }

  resetFilter() {
    this.charName = "";
    this.filteredCharacters = [...this.allCharacteres];
    this.calculateTotalPages();
    this.currentPage = 1;
    this.pagination();
  }

  //orderByName() {
  //  this.filteredCharacters.sort((a,b) => {
  //    if (a.displayName.toLocaleLowerCase() > b.displayName.toLocaleLowerCase()) return 1;
  //    else if (a.displayName.toLocaleLowerCase() < b.displayName.toLocaleLowerCase()) return -1;
  //    else return 0;
  //  });
  //  this.pagination();
  //}

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
    if (page <= this.totalPages && page >= 1) {
      this.currentPage = page;
      this.pagination();
    }
  }
}
