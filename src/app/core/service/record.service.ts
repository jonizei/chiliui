import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ChiliRecord } from "../model/chili-record";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class RecordService {

    private readonly apiUrl : string = environment.API_URL;
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