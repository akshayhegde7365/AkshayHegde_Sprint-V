import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.userService}`;

  constructor(private http: HttpClient) {}

  fetchAllProducts() {
    return this.http.get(this.serviceUrl);
  }

  getProductByProductId(productId: number) {
    return this.http.get(this.serviceUrl + '/' + productId);
  }

  addProduct(formData: UserDetails) {
    return this.http.post(this.serviceUrl, formData);
  }
  
  updateProduct(productId: number, formData: UserDetails) {
    return this.http.put(this.serviceUrl+ '/' + productId, formData);
  }
  DeleteProduct(productId: number) {
    return this.http.delete(this.serviceUrl+ '/' + productId);
  }
}