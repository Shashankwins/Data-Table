import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subject'
})
export class SubjectPipe implements PipeTransform {

  transform(value: Array<any> ): string {
    if(!value.length){
      return "none";
    }
    else if(value.length == 1){
      return "is Single"
    }
    else{
      return "is Multiple"
    }
  }
}
