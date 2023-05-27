import { Component, EventEmitter, Output } from "@angular/core";
import { ChiliTrigger } from "../core/model/chili-trigger";
import { ModalService } from "../core/service/modal.service";
import { OutletService } from "../core/service/outlet.service";
import { TriggerType } from "../core/utils/utils";

@Component({ 
    selector: 'AbstractModal',
    templateUrl: './abstract-modal.component.html',
    styleUrls: ['./abstract-modal.component.scss']
})
export class AbstractModalComponent {

    activeType : TriggerType = TriggerType.TIME;

    @Output()
    onClose : EventEmitter<void> = new EventEmitter<void>();

    constructor(private outletService: OutletService
        , private modalService: ModalService) {

    }

    onSelfClose() : void {
        this.onClose.emit();
    }

    getTriggerTypeEnum() {
        return TriggerType;
    }

    setActive(type: TriggerType) : void {
        this.activeType = type;
    }

    isTimeActive() : boolean {
        return this.activeType == TriggerType.TIME;
    }

    isConditionActive() : boolean {
        return this.activeType == TriggerType.CONDITION;
    }

    onCreateTrigger(trigger: ChiliTrigger) : void {
        const id = this.modalService.activeId;
        if (id > 0) {
            this.outletService.addTrigger(id, trigger);
        }
        this.onSelfClose();
    }

}