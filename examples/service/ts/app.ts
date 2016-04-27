import {Component, OnInit} from 'angular2/core';

import {InputItem} from './InputItem';
import {Item} from './CheckableItem';
import {ItemList} from './ItemList';
import {Counter} from './Counter';

import {ItemService} from './ItemService';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <input-item (onItemAdded)="addItem($event)"></input-item>
    <item-list [data]="items" (onItemClicked)="toggle($event)" [showLoading]="loading">
    </item-list>
    <counter *ngIf="!loading" [items]="items"></counter>
    `,
    directives: [InputItem, ItemList, Counter],
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

    toggle(e: { item: Item, index: number }) {
        this.items = [
            ...this.items.slice(0, e.index),
            { isChecked: !e.item.isChecked, txt: e.item.txt },
            ...this.items.slice(e.index + 1)
        ];
    }
}
