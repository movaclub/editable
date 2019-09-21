import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleaner'
})
export class BooleanerPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? '&#129297;' : '&#128545;';
  }

}
