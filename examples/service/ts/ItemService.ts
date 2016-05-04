import {Injectable} from '@angular/core';

import {Item} from './CheckableItem';

@Injectable()
export class ItemService {

    private items: Item[] = [
        {
            isChecked: true,
            txt: 'Learn JavaScript'
        }, {
            isChecked: false,
            txt: 'Learn TypeScript'
        }, {
            isChecked: false,
            txt: 'Learn Angular2'
        }
    ];

    getItems(): Promise<Array<Item>> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.items);
            }, 1500);
        });
    }
}
