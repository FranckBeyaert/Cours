import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

export enum SearchType 
{
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey = 'e05f3b76'

  /**
   * The constructor function is a default function that runs when the component is loaded. The private
   * http: HttpClient variable creates an instance of the HttpClient service and allows us to use it in
   * the component
   * @param {HttpClient} http - HttpClient - This is the HttpClient that we imported from
   * @angular/common/http.
   */
  constructor(private http: HttpClient) { }

  /**
   * We're using the http.get() method to make a GET request to the OMDb API, passing in the title and
   * type of search we want to make. We're then using the map() method to return the results of the
   * search
   * @param {string} title - The title of the movie or TV show you want to search for.
   * @param {SearchType} type - SearchType - This is an enum that we created in the search.service.ts
   * file. It's used to specify the type of search we want to perform.
   * @returns The results of the search.
   */
  searchData(title: string, type: SearchType): Observable<any>
  {
    return this.http.get(`www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`)
    .pipe(map((results: any) => results['Search']))
  }
  
  /**
   * The function takes an id as a parameter and returns the details of the movie with that id
   * @param {any} id - The id of the movie you want to search for.
   * @returns The details of the movie.
   */
  getDetails(id: any)
  {
    return this.http.get(`www.odbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
