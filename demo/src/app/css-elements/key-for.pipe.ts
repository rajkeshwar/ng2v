
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'keyFor'})
export class KeyForPipe implements PipeTransform {
    transform( object:Object ) {
        return Object.keys(object);
    }
}