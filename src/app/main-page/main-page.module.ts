import { NgModule } from "@angular/core";
import { MainPageComponent } from "./main-page.component";
import { RecordPageModule } from "../record-page/record-page.module";
import { OutletPageModule } from "../outlet-page/outlet-page.module";
import { AbstractModalModule } from "../abstract-modal/absract-modal.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        MainPageComponent
    ],
    providers: [],
    bootstrap: [],
    imports: [
        CommonModule,
        RecordPageModule,
        OutletPageModule,
        AbstractModalModule
    ]
})
export class MainPageModule {}