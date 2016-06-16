import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'input-item',
    template: `
    <form (ngSubmit)="onSubmit()" #todoForm="ngForm">
        <input type="text" [(ngModel)]="text" ngControl="todotext">
        <button type="submit">Add Item</button>
    </form>
    `
})
export class InputItem {
    text: string;
    @Output() onItemAdded = new EventEmitter();

    onSubmit() {
        this.onItemAdded.emit({
            isChecked: false,
            txt: this.text
        });
        this.text = '';
    }
}
