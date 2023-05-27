import { Injectable } from "@angular/core";

@Injectable()
export class ModalService {

    private _isOpen : boolean = false;
    private _activeId : number = 0;

    get activeId() : number {
        return this._activeId;
    }

    isModalOpen() : boolean {
        return this._isOpen;
    }

    openModal(id: number) : void {
        this._activeId = id;
        this._isOpen = true;
    }

    closeModal() : void {
        this._activeId = 0;
        this._isOpen = false;
    }

}