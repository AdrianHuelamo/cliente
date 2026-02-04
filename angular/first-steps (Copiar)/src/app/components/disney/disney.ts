import { Component, OnInit } from '@angular/core';
import { Disneyservices } from '../../services/disneyservices';
import { Daum, Root } from '../../common/disneyinterface';

@Component({
  selector: 'app-disney',
  standalone: false,
  templateUrl: './disney.html',
  styleUrl: './disney.css',
})
export class Disney implements OnInit {
  dataApi!: Root
  characters: Daum[] = [];
  activeIndex: number | null = null;
  charName: string = '';
  loading: boolean = false;
  currentPage: number = 1;
  totalPages: number = 0;
  pageToGo: number = 1;

  constructor(private Disneyservices: Disneyservices) {
  }

  ngOnInit(): void {
    this.loadCharacters()
  }
  
  private loadCharacters(): void {
    this.loading = true;
    this.Disneyservices.getCharacters(this.currentPage).subscribe({
      next:(value) => {
        this.dataApi = value;
        this.characters = this.dataApi.data;
        this.totalPages = this.dataApi.info.totalPages;
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
