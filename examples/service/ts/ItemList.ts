import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

import { CheckableItem, Item } from './CheckableItem';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'item-list',
    template: `
    <checkable-item *ngFor="let item of data; let i=index" [item]="item" (onItemClicked)="clickItem($event, i)">
    </checkable-item>
    <p *ngIf="showLoading">Loading</p>
    `,
    directives: [CheckableItem]
})
export class ItemList {
    @Input() data: Item[];
    @Input() showLoading: boolean;

    @Output() onItemClicked = new EventEmitter();

    clickItem(e: Item, i: number) {
        this.onItemClicked.emit({
            item: e,
            index: i
        });
    }
}
