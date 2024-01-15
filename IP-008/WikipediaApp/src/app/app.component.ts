import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HighlightPipe } from './highlight.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: any[] = [];
  searchTerm: string = '';

  constructor(private wikipediaService: WikipediaService) {}

  search(term: string) {
    this.searchTerm = term;
    this.wikipediaService.search(term).subscribe(data => {
      this.results = data.query.search;
    });
  }
}

