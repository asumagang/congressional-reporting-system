import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];
  constructor() { }

  private show(msg: string, options: any = {}) {
    this.toasts.push({ msg, ...options });
  }

  remove(toast) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  showSuccess(msg: string) {
    this.show(msg, {
      autohide: true,
      classname: "p-0 m-0 font-italic text-center bg-success text-light",
      delay: 5000
    });
  }
  showFailed(msg: string) {
    this.show(msg, {
      autohide: true,
      classname: "p-0 m-0 font-italic text-center bg-danger text-light",
      delay: 5000
    });
  }
}
