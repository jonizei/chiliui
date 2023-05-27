import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { OutletPageComponent } from "./outlet-page.component";
import { OutletComponent } from "./outlet/outlet.component";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ToggleSliderModule } from "../toggle-slider/toggle-slider.module";
import { TriggerComponent } from "./trigger/trigger.component";

@NgModule({
    declarations: [
        OutletPageComponent,
        OutletComponent,
        TriggerComponent
    ],
    imports: [
        CommonModule,
        MatSlideToggleModule,
        ToggleSliderModule
    ],
    providers: [
        OutletPageComponent
    ],
    exports: [
        OutletPageComponent
    ],
    bootstrap: []
})
export class OutletPageModule {}