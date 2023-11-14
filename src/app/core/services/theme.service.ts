import { ElementRef, Injectable, Renderer2, ViewChild, inject } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDarkTheme:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  htmlTag:any
  // private render = inject(Renderer2)
  @ViewChild('html', { static: false }) html!: ElementRef;
  // constructor(private render: Renderer2) {

  // }

  setValueTheme() {
    // this.render.setAttribute(this.html,'data-bs-theme','light');
  }


}
