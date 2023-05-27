import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'ToggleSlider',
    templateUrl: './toggle-slider.component.html',
    styleUrls: ['./toggle-slider.component.scss']
})
export class ToggleSliderComponent {

    @Output()
    onToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input()
    isToggled : boolean = false;

    onSelfToggle() {
        this.isToggled = !this.isToggled;
        this.onToggle.emit(this.isToggled);
    }

}