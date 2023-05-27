import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ChiliRecord } from "../model/chili-record";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class RecordService {

    private readonly apiUrl : string = 'http://192.168.5.212:8080';
    private recordList : BehaviorSubject<Array<ChiliRecord>> = new BehaviorSubject<Array<ChiliRecord>>([]);

    constructor(private http: HttpClient) {

    }

    getRecords() : BehaviorSubject<Array<ChiliRecord>> {
        return this.recordList;
    }

    loadRecords() {
        return this.http.get<Array<ChiliRecord>>(this.apiUrl + '/get-records').subscribe((data) => {
            if (data) {
                this.recordList.next(data);
            }
        });
    }

}