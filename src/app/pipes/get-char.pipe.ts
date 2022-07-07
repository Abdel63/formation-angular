import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar',
  
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    const position = args[0] ?? 0; 
    // on prend cette valeur de args si elle est diff de undefined et de null, sinon on prend celui qui est défini dans getchar:qqchose
    return value[position];
  }
 
}

