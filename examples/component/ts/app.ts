import {Component, OnInit} from '@angular/core';

import {Item} from './CheckableItem';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <checkable-item [item]="itemInfo" (onItemClicked)="toggle($event)">
    </checkable-item>
    `
})
export class AppComponent implements OnInit {

    itemInfo: Item;

    ngOnInit() {
        this.itemInfo = {
            isChecked: false,
            txt: 'Hello World!'
        };
    }

    toggle(item: Item) {
        this.itemInfo = {
            isChecked: !item.isChecked,
            txt: item.txt
        };
    }
}
