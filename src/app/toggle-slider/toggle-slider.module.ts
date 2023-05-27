import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ToggleSliderComponent } from "./toggle-slider.component";

@NgModule({
    declarations: [
        ToggleSliderComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        ToggleSliderComponent
    ],
    exports: [
        ToggleSliderComponent
    ],
    bootstrap: []
})
export class ToggleSliderModule {}