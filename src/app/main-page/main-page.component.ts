import { Component, OnDestroy, OnInit } from "@angular/core";
import { ModalService } from "../core/service/modal.service";
import { OutletService } from "../core/service/outlet.service";
import { RecordService } from "../core/service/record.service";

@Component({
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnDestroy {

    private readonly REFRESH_TIME : number = 30000;
    private refreshInterval : any = null;

    constructor(private modalService : ModalService
        , private outletService: OutletService
        , private recordService: RecordService) {
        this.refreshData = this.refreshData.bind(this);
        this.refreshData();
        this.refreshInterval = setInterval(this.refreshData, this.REFRESH_TIME);
    }

    isModalOpen() : boolean {
        return this.modalService.isModalOpen();
    }

    onCloseModal() : void {
        this.modalService.closeModal();
    }

    private refreshData() : void {
        this.outletService.loadOutlets();
        this.recordService.loadRecords();
    }

    ngOnDestroy(): void {
        clearInterval(this.refreshInterval);
    }
    
}