import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  isDarkTheme:boolean=true;

  changeColorTheme() {
    if (this.isDarkTheme) {
      document.querySelector('html')?.setAttribute('data-bs-theme','light')
      this.isDarkTheme = false
    }else {
      document.querySelector('html')?.setAttribute('data-bs-theme','dark')
      this.isDarkTheme = true
    }
  }
}
