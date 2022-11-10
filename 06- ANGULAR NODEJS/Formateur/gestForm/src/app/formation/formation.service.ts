import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Formation } from './formation.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = `${environment.endpoint}/formations`
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application.json',
    'Authorization': 'Basic '+btoa('mehdy:mehdy'),
    'Access-Control-Allow-Origin': '*',
  })
}
@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

  //LISTE FORMATIONS
  getFormationList(): Observable<Formation[]>{
    return this.http.get<Formation[]>(baseUrl, httpOptions);
  }

  //FORMATION PAR ID
  getFormationById(formationId: number): Observable<Formation|undefined>{
    return this.http.get<Formation>(`${baseUrl}/${formationId}`, httpOptions);
  }

  //CREATION
  createFormation(formation: Formation): Observable<Formation>{
    return this.http.post<Formation>(baseUrl, formation, httpOptions);
  }

}
