import { Component, OnInit } from "@angular/core";
import { ChiliOutlet } from "../core/model/chili-outlet";
import { OutletService } from "../core/service/outlet.service";

@Component({
    selector: 'OutletPage',
    templateUrl: './outlet-page.component.html',
    styleUrls: ['./outlet-page.component.scss']
})
export class OutletPageComponent implements OnInit {

    chilioutlets: Array<ChiliOutlet> = [];
    
    constructor(private outletService: OutletService) {

    }

    ngOnInit(): void {
        this.outletService.getOutlets().subscribe((outlets: Array<ChiliOutlet>) => {
            this.chilioutlets = outlets;
        });
    }

}
