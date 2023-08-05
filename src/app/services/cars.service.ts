import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  sendQuery(data: any) {
    return this.http.post('https://testologia.site/intensive-price', data);
  }

  getData(category: any) {
    return this.http.get('assets/data.json')
      .pipe(map(((data: any) => data[category])));
    // return this.http.get('https://testologia.site/intensive-data', { params: { category: category } });
  }

}
