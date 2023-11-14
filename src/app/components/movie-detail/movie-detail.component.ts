import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../../core/interfaces/api-rick-morty';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent {


  @Input() chacacters:Result[] = [];

}
