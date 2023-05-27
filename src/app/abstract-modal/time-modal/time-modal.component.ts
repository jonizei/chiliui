import { Component, EventEmitter, Output } from "@angular/core";
import { ChiliTimeTrigger } from "src/app/core/model/chili-trigger";

@Component({
    selector: 'TimeModal',
    templateUrl: './time-modal.component.html',
    styleUrls: ['./time-modal.component.scss']
})
export class TimeModalComponent {

    private weekdays : string[] = [
        'MONDAY'
        , 'TUESDAY'
        , 'WEDNESDAY'
        , 'THURSDAY'
        , 'FRIDAY'
        , 'SATURDAY'
        , 'SUNDAY'
    ];

    @Output()
    onCreate : EventEmitter<ChiliTimeTrigger> = new EventEmitter<ChiliTimeTrigger>();

    @Output()
    onClose : EventEmitter<void> = new EventEmitter<void>();

    weekday : number = 0;
    time : { hour: number, minute: number } = { hour: 0, minute: 0 };
    duration : number = 0;

    constructor() {}

    setWeekday(event: any) : void {
        if(event.target.value) {
            this.weekday = parseInt(event.target.value);
        }
    }

    setHour(event: any) : void {
        if(event.target.value) {
            this.time.hour = parseInt(event.target.value);
        }
    }

    setMinute(event: any) : void {
        if(event.target.value) {
            this.time.minute = parseInt(event.target.value);
        }
    }

    setDuration(event: any) : void {
        if(event.target.value) {
            this.duration = parseInt(event.target.value);
        }
    }
    
    getHours() : { label: string, value: number }[] {
        return this.createOptions(0, 24);
    }

    getMinutes() : { label: string, value: number }[] {
        return this.createOptions(0, 60);
    }

    getTimeString() : string {
        return this.formatTimeNumber(this.time.hour) + ':' + this.formatTimeNumber(this.time.minute);
    }

    getWeekdays() : { label: string, value: number }[] {
        let days : { label: string, value: number }[] = [];
        this.weekdays.forEach((day, index) => {
            days.push({ label: day, value: index });
        });
        return days;
    }

    onAddTrigger() : void {
        let timeTrigger : ChiliTimeTrigger = this.createTimeTrigger();
        this.onCreate.emit(timeTrigger);
    }

    onSelfClose() : void {
        this.onClose.emit();
    }

    private createTimeTrigger() : ChiliTimeTrigger {
        let timeTrigger : ChiliTimeTrigger = {
            id: 0
            , type: 'TIME'
            , weekday: this.weekdays[this.weekday]
            , time: this.getTimeString()
            , duration: this.duration
        };

        return timeTrigger;
    }

    private createOptions(min: number, max: number) : { label: string, value: number }[] {
        let options = [];

        for (let i = min; i < max; i++) {
            let tmp = { label: '', value: 0 };
            if (i < 10) {
                tmp.label = '0' + i;
            } else {
                tmp.label = String(i);
            }
            tmp.value = i;
            options.push(tmp);
        }

        return options;
    }

    private formatTimeNumber(value: number) : string {
        if (value < 10) {
            return '0' + value;
        }

        return String(value);
    }

}