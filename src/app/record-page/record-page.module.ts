import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RecordPageComponent } from "./record-page.component";

@NgModule({
    declarations: [
        RecordPageComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        RecordPageComponent
    ],
    exports: [
        RecordPageComponent
    ],
    bootstrap: []
})
export class RecordPageModule {}