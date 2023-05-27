import { Component, EventEmitter, Output } from "@angular/core";
import { ChiliConditionTrigger } from "src/app/core/model/chili-trigger";

@Component({
    selector: 'ConditionModal',
    templateUrl: './condition-modal.component.html',
    styleUrls: ['./condition-modal.component.scss']
})
export class ConditionModalComponent {

    private targets : string[] = [
        'AIR_TEMP'
        , 'AIR_PRESSURE'
        , 'HUMIDITY'
        , 'LIGHT'
    ];

    private operations : string[] = [
        'EQUALS'
        , 'GREATER'
        , 'LOWER'
        , 'NOT'
    ];

    @Output()
    onCreate : EventEmitter<ChiliConditionTrigger> = new EventEmitter<ChiliConditionTrigger>();

    @Output()
    onClose : EventEmitter<void> = new EventEmitter<void>();

    target: number = 0;
    operation: number = 0;
    value: number = 0;

    getTargets() : { label: string, value: number }[] {
        return this.createStringOptions(this.targets);
    }

    getOperations() : { label: string, value: number }[] {
        return this.createStringOptions(this.operations);
    }

    setTarget(event: any) : void {
        if (event.target.value) {
            this.target = parseInt(event.target.value);
        }
    }

    setOperation(event: any) : void {
        if (event.target.value) {
            this.operation = parseInt(event.target.value);
        }
    }

    setValue(event: any) : void {
        if (event.target.value) {
            this.value = parseInt(event.target.value);
        }
    }

    onAddTrigger() : void {
        const conditionTrigger = this.createConditionTrigger();
        this.onCreate.emit(conditionTrigger);
    }

    onSelfClose() : void {
        this.onClose.emit();
    }

    private createStringOptions(array: string[]) : { label: string, value: number }[] {
        let options : { label: string, value: number }[] = [];
        array.forEach((text, index) => {
            options.push({
                label: text,
                value: index
            });
        });
        return options;
    }

    private createConditionTrigger() : ChiliConditionTrigger {
        let conditionTrigger : ChiliConditionTrigger = {
            id: 0
            , type: 'CONDITION'
            , target: this.targets[this.target]
            , operation: this.operations[this.operation]
            , value: this.value
        };

        return conditionTrigger;
    }

}