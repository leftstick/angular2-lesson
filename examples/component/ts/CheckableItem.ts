import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'checkable-item',
    styles: [`
        .deleted{
            text-decoration: line-through;
        }
    `],
    template: `
    <div>
        <input type="checkbox" [ngModel]="item.isChecked" (click)="clickItem($event)">
        <label [class.deleted]="item.isChecked">{{ item.txt }}</label>
    </div>
    `
})
export class CheckableItem {
    @Input() item: Item;
    @Output() onItemClicked = new EventEmitter();

    clickItem(e: MouseEvent) {
        e.preventDefault();
        this.onItemClicked.emit(this.item);
    }
}


export interface ToggleItemHandler {
    (item: Item): void;
}

export interface Item {
    isChecked?: boolean;
    txt?: string;
}
