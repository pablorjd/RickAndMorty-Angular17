import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseRickAndMorty } from '../interfaces/api-rick-morty';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  url:string = 'https://rickandmortyapi.com/api/character';

  constructor( private http:HttpClient ) { }

  getCharacters() :Observable<ResponseRickAndMorty>{
    return this.http.get<ResponseRickAndMorty>(this.url)
  }

}
