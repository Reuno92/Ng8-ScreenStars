import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'replaceBy'
})
export class ReplaceByPipe implements PipeTransform {

  transform(startedValue: any, refList: any[], findTerm: string, targetTerm: string): any {
    // if value is defined else return value for another pass
    if (startedValue) {
      if (typeof startedValue !== 'string') {
        return this.getNewValues(startedValue, refList, findTerm, targetTerm);
      } else {
        return this.getNewValue(startedValue, refList, findTerm, targetTerm);
      }
    } else {
      return startedValue;
    }
  }

  getNewValue(startedValue, refList, findTerm, targetTerm): string {
    const searchRef = refList.find(y => y[findTerm] === startedValue);
    return searchRef[targetTerm];
  }

  getNewValues(array, refList, findTerm, targetTerm): Array<string> {
    const results: Array<string> = Array<string>();
    array.map(x => {
      const searchRef = refList.find(y => y[findTerm] === x);
      results.push(searchRef[targetTerm]);
    });
    return results;
  }
}
