import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AbstractModalComponent } from "./abstract-modal.component";
import { ConditionModalComponent } from "./condition-modal/condition-modal.component";
import { TimeModalComponent } from "./time-modal/time-modal.component";

@NgModule({
    declarations: [
        AbstractModalComponent,
        TimeModalComponent,
        ConditionModalComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        AbstractModalComponent,
        TimeModalComponent
    ]
})
export class AbstractModalModule {}