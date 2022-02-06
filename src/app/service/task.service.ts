import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TasktDetails } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.taskService}`;

  constructor(private http: HttpClient) {}

  fetchAllProducts() {
    return this.http.get(this.serviceUrl);
  }

  getProductByProductId(productId: number) {
    return this.http.get(this.serviceUrl + '/' + productId);
  }

  addProduct(formData: TasktDetails) {
    return this.http.post(this.serviceUrl, formData);
  }
  
  updateProduct(productId: number, formData: TasktDetails) {
    return this.http.put(this.serviceUrl+ '/' + productId, formData);
  }
  
  DeleteProduct(productId: number) {
    return this.http.delete(this.serviceUrl+ '/' + productId);
  }
}