import {Component, OnChanges, SimpleChange, Input, ChangeDetectionStrategy} from 'angular2/core';

import {Item} from './CheckableItem';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'counter',
    template: `
    <span>
        We have {{ length }} item{{ postFix }}
    </span>
    `
})
export class Counter implements OnChanges {
    @Input() items: Item[];

    postFix: string;
    length: number;

    ngOnChanges(changes: { items: SimpleChange }) {
        let newItems: Item[] = changes.items.currentValue;
        this.length = newItems.reduce((p, item) => p + (item.isChecked ? 0 : 1), 0);
    }
}
