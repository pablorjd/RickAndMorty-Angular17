import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from '../../components/movie-detail/movie-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieApiService } from '../../core/services/movie-api.service';
import { ResponseRickAndMorty } from '../../core/interfaces/api-rick-morty';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MovieDetailComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  movies:any
  isVisiting:boolean = false
  movieService = inject(MovieApiService)
  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters() {
    this.movieService.getCharacters().subscribe({
      next: (data:ResponseRickAndMorty)=> {
        console.log(data.results);
        this.movies = data.results
      },error: (err)=> {
        console.error(`Error getting characters ${err}`)
      },complete:()=> {
        console.log("Completed transaction");
        this.isVisiting = true;
      }
     })
  }

}
