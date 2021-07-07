import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Category } from 'src/app/models/category/category';
import { ListResponseModel } from 'src/app/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'https://localhost:44330/api/categories/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Category>> {
    this.httpClient
      return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl)
  }
}
