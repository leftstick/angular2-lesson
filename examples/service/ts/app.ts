import {Component, OnInit} from 'angular2/core';

import {InputItem} from './InputItem';
import {CheckableItem, Item} from './CheckableItem';
import {Counter} from './Counter';

import {ItemService} from './ItemService';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <input-item (onItemAdded)="addItem($event)"></input-item>
    <checkable-item *ngFor="#itemInfo of items; #i = index" [item]="itemInfo" (onItemClicked)="toggle($event, i)">
    </checkable-item>
    <p *ngIf="loading">Loading</p>
    <counter *ngIf="!loading" [items]="items"></counter>
    `,
    directives: [InputItem, CheckableItem, Counter],
    providers: [ItemService]
})
export class AppComponent implements OnInit {

    items: Item[] = [];
    loading: boolean = true;

    constructor(private _itemService: ItemService) { }

    ngOnInit() {
        this._itemService
            .getItems()
            .then(data => {
                this.loading = false;
                this.items = data;
            });
    }

    addItem(item: Item) {
        this.items = [...this.items, item];
    }

    toggle(item: Item, index: number) {
        this.items = [
            ...this.items.slice(0, index),
            { isChecked: !item.isChecked, txt: item.txt },
            ...this.items.slice(index + 1)
        ];
    }
}
