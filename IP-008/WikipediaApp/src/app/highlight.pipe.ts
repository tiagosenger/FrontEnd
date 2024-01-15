import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, term: string): string {
    if (!term || !text) {
      return text;
    }

    const pattern = new RegExp(term, 'gi');
    return text.replace(pattern, match => `<span class="highlight">${match}</span>`);
  }
}