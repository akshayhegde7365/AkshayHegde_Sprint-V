import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProjectDetails } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  serviceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.projectService}`;

  constructor(private http: HttpClient) {}

  fetchAllProducts() {
    return this.http.get(this.serviceUrl);
  }

  getProductByProductId(productId: number) {
    return this.http.get(this.serviceUrl + '/' + productId);
  }

  addProduct(formData : ProjectDetails) {
    return this.http.post(this.serviceUrl, formData);
  }

  updateProduct(productId: number, formData: ProjectDetails) {
    return this.http.put(this.serviceUrl+ '/' + productId, formData);
  }
  DeleteProduct(productId: number) {
    return this.http.delete(this.serviceUrl+ '/' + productId);
  }
}