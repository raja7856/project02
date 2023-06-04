import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public productDetails : any;
  public products: any;
public getProductDetail(product: any){
  console.log(product);

  this.productDetails = product;
  
}
  
    
  
  constructor (public apiService: ApiService) {
    this.apiService.getProducts().subscribe((productResponce) =>{
      console.log(productResponce);
      this.products = productResponce.data;
    })
  }
}


