import { Component, OnInit } from '@angular/core';
import { Finalspaceservices } from '../../services/finalspaceservices';
import { InfoFinalspace, Data } from '../../common/final-spaceinterface';


@Component({
  selector: 'app-final-space',
  standalone: false,
  templateUrl: './final-space.html',
  styleUrl: './final-space.css',
})
export class FinalSpace implements OnInit {
  dataApi: Data[] = [];
  characters: Data[] = [];
  activeIndex: number | null = null;
  charName: string = '';
  loading: boolean = false;
  elementsPP: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;
  allCharacteres: Data[] = [];
  initialSlice!:number;
  finalSlice!: number;

  constructor(private finalspaceservices: Finalspaceservices) {
  }

  ngOnInit(): void {
    this.loadCharacters()
  }

  private loadCharacters(): void {
    this.loading = true;
    this.finalspaceservices.getCharacters().subscribe({
      next:(value) => {
        this.dataApi = value;
        this.allCharacteres = value;
        this.totalPages =  Math.ceil( this.allCharacteres.length / this.elementsPP);
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

  pagination() {
    this.initialSlice = (this.currentPage - 1) * this.elementsPP;
    this.finalSlice = this.initialSlice + this.elementsPP;
    this.characters = this.allCharacteres.slice(this.initialSlice,this.finalSlice)
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

  orderByName() {
    this.characters.sort((a,b) => {
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) return 1;
      else if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) return -1;
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
