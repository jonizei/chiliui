import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ChiliOutlet } from "../model/chili-outlet";
import { ChiliTrigger } from "../model/chili-trigger";

@Injectable()
export class OutletService {

    private readonly apiUrl : string = 'http://192.168.5.212:8080';
    private outletList : BehaviorSubject<Array<ChiliOutlet>> = new BehaviorSubject<Array<ChiliOutlet>>([]);

    constructor(private http: HttpClient) {

    }

    getOutlets() : BehaviorSubject<Array<ChiliOutlet>> {
        return this.outletList;
    }

    loadOutlets() {
        this.http.get<Array<ChiliOutlet>>(this.apiUrl + '/get-outlets').subscribe((data) => {
            if (data) {
                this.outletList.next(data);
            }
        });
    }

    updateOutlets() {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        this.http.post<Array<ChiliOutlet>>(this.apiUrl + '/update-outlets', JSON.stringify(this.outletList.getValue()), {
            headers: headers
        }).subscribe();
    }

    forceOutletStatus(id: number, status : boolean) : void {
        let outlets : Array<ChiliOutlet> = this.outletList.getValue();
        let success : boolean = false;

        for(let i = 0; i < outlets.length && !success; i++) {
            if (outlets[i].id == id) {
                outlets[i].stay_on = status;
                success = true;
            }
        }

        if (success) {
            this.outletList.next(outlets);
            this.updateOutlets();
        }
    }

    addTrigger(id: number, trigger: ChiliTrigger) : void {
        let outlets : Array<ChiliOutlet> = this.outletList.getValue();
        let success : boolean = false;

        for (let i = 0; i < outlets.length && !success; i++) {
            if (outlets[i].id == id) {
                const nextTriggerId = outlets[i].triggers.length + 1;
                trigger.id = nextTriggerId;
                outlets[i].triggers.push(trigger);
                success = true;
            }
        }
        
        if (success) {
            this.outletList.next(outlets);
            this.updateOutlets();
        }
    }

    removeTrigger(id: number, triggerId: number) : void {
        let outlets : Array<ChiliOutlet> = this.outletList.getValue();
        let success : boolean = false;
        
        for (let i = 0; i < outlets.length && !success; i++) {
            if (outlets[i].id == id) {
                outlets[i].triggers = outlets[i].triggers.filter(t => t.id != triggerId);
                success = true;
            }
        }

        if (success) {
            this.outletList.next(outlets);
            this.updateOutlets();
        }
    }

}