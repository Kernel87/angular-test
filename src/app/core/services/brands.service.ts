import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private dataSource = new BehaviorSubject<any>(null);
  data = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  updatedDataSelection(data: any){
    this.dataSource.next(data);
  }

  getBrandsInfo(): Observable<any> {
    const url = environment.apiUrl + '/vehicles/GetMakesForVehicleType/car?format=json';
    return this.http.get(url);
  }

  getTypesAndModels(id: any): Observable<any> {
    const url = environment.apiUrl + '/vehicles/GetVehicleTypesForMakeId/' + `${id}` + '?format=json';
    return this.http.get(url);
  }

  getModels(type: number): Observable<any> {
    const url = environment.apiUrl + '/vehicles/GetModelsForMakeId/' + `${type}` + '?format=json';
    return this.http.get(url);
  }
}
