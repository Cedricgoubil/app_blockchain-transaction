import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { BlockchainTransactionListDto } from '../dto/BlockchainTransactionListDto';


@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(searchFilterTransform: BlockchainTransactionListDto[], searchTerm: string) {
    if (!searchFilterTransform || !searchTerm) {
      return searchFilterTransform;
    }
    return searchFilterTransform.filter(
      pipe(search => {
        return (
          search?.level?.toString().match(searchTerm.toUpperCase())
        );
      })
    );
  }
}
