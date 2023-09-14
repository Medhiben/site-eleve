import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eleve } from '../model/eleve';


@Injectable({
  providedIn: 'root'
})
export class EleveService {


  BASE_URL = 'http://localhost:3000';


  constructor( private http: HttpClient) {}

  getEleves(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(this.BASE_URL + '/eleves');
  }

  sendEleves(eleve : Eleve[]) : Observable<Eleve[]> {
  return this.http.post<Eleve[]>(this.BASE_URL + '/eleves', eleve)
  };

   getEleve(eleveId: any): Observable<Eleve> {
    return this.http.get<Eleve>(this.BASE_URL + '/eleves/' + eleveId);
  }

  putEleve(eleve: Eleve) : Observable<Eleve> {
    return this.http.put<Eleve>(this.BASE_URL + '/eleves/' + eleve.id , eleve);
  }

  deleteEleve(eleveId: any) : Observable<any> {
    return this.http.delete<any>(this.BASE_URL + '/eleves/' + eleveId);
  }




}
