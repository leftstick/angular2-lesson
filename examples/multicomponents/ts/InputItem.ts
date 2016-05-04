import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'input-item',
    template: `
    <form (ngSubmit)="onSubmit()">
        <input type="text" [(ngModel)]="text">
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
