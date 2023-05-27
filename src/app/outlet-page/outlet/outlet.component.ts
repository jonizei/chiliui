import { trigger } from "@angular/animations";
import { Component, Input } from "@angular/core";
import { ChiliOutlet } from "src/app/core/model/chili-outlet";
import { ChiliConditionTrigger, ChiliTimeTrigger, ChiliTrigger } from "src/app/core/model/chili-trigger";
import { ModalService } from "src/app/core/service/modal.service";
import { OutletService } from "src/app/core/service/outlet.service";
import { TriggerType } from "src/app/core/utils/utils";

@Component({
    selector: 'Outlet',
    templateUrl: './outlet.component.html',
    styleUrls: ['./outlet.component.scss']
})
export class OutletComponent {

    @Input()
    id: number = -1;
    @Input()
    name: string = '';
    @Input()
    stayOn: boolean = false;
    @Input()
    isOn: boolean = false;
    @Input()
    triggers: Array<ChiliTrigger> = [];

    constructor(private modalService : ModalService
        , private outletService : OutletService) {

    }

    setStatus(value: boolean) : void {
        this.stayOn = value;
        this.outletService.forceOutletStatus(this.id, this.stayOn);
    }

    getStatus() : string {
        return this.isOn ? 'ON' : 'OFF';
    }

    isToggled() : boolean {
        return this.stayOn || this.isOn;
    }

    onOpenTriggerModal() : void {
        this.modalService.openModal(this.id);
    }

    getTarget(trigger: ChiliTrigger) : string {
        return trigger.type == 'TIME' 
        ? (trigger as ChiliTimeTrigger).weekday 
        : (trigger as ChiliConditionTrigger).target;
    }

    getOperation(trigger: ChiliTrigger) : string {
        return trigger.type == 'TIME' 
        ? (trigger as ChiliTimeTrigger).time 
        : (trigger as ChiliConditionTrigger).operation;
    }

    getValue(trigger: ChiliTrigger) : number {
        return trigger.type == 'TIME' 
        ? (trigger as ChiliTimeTrigger).duration 
        : (trigger as ChiliConditionTrigger).value;
    }

    onRemoveTrigger(triggerId: number) : void {
        this.outletService.removeTrigger(this.id, triggerId);
    }

} 