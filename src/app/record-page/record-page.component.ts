import { Component, OnInit } from "@angular/core";
import { ChiliRecord } from "../core/model/chili-record";
import { RecordService } from "../core/service/record.service";

@Component({
    selector: 'RecordPage',
    templateUrl: './record-page.component.html',
    styleUrls: ['./record-page.component.scss']
})
export class RecordPageComponent implements OnInit {
    
    chilirecords : Array<ChiliRecord> = [];

    constructor(private recordService : RecordService) {}

    ngOnInit(): void {
        this.recordService.getRecords().subscribe((records: Array<ChiliRecord>) => {
            this.chilirecords = records;
        });
    }

}