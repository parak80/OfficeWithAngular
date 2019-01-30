import {  } from '@angular/core';

export class ModalService {
  private modals: any[] = [];

  open(id: number) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.open();
  }
  close(id: number) {
    const modal: any = this.modals.filter(x => x.id === id)[0];
    modal.close();
  }
}
