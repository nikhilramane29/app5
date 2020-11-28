import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productService: ProductService

  products=[]
  

  constructor(productService: ProductService) { 
    this.productService = productService
  }
 

  onDelete(product){
    this.productService
    .deleteProduct(product['id'])
    .subscribe(response => {
      if (response['status'] == 'success'){
        this.loadProducts()
      }else{
        console.log(response['error'])
      }
    })
  }
    onEdit(product){


    }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts(){
    const request = this.productService.getProducts()
        request.subscribe(response => {
      if (response['status'] == 'success'){
        this.products = response['data']
        // for (let index = 0; index < response['data'].length; index++) {
        //   const element = response['data'][index];
        //   this.products.push(element)
        // }
      } else{
        alert('error while loading list of products')
        console.log(response['error'])
      }
    })
  }
}
