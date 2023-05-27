import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ChiliTrigger } from "src/app/core/model/chili-trigger";
import { TriggerType } from "src/app/core/utils/utils";

@Component({
    selector: 'Trigger',
    templateUrl: './trigger.component.html',
    styleUrls: ['./trigger.component.scss']
})
export class TriggerComponent {

    @Input()
    id: number = 0;

    @Input()
    type: string = '';

    @Input()
    target: string = '';

    @Input()
    operation: string = '';

    @Input()
    value : number = 0;

    @Output()
    onRemove: EventEmitter<void> = new EventEmitter<void>();

    onSelfRemove() : void {
        this.onRemove.emit();
    }

}