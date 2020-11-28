import { CategoryService } from './../category.service';
import { BrandService } from './../brand.service';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  title = ''
  description = ''
  category= 1
  brand = 1
  price = 0
  categories = []
  brands = []
  productService: ProductService
  brandService: BrandService
  categoryService: CategoryService

  constructor( 
  productService: ProductService,
  brandService: BrandService,
  categoryService: CategoryService) {

  this.productService = productService
  this.brandService = brandService
  this.categoryService = categoryService
  }

  ngOnInit(): void {
    console.log('Inside on init()')
    this.loadData()
  }

  loadData() {
    //get the list of categories
    this.categoryService
    .getCategories()
    .subscribe(response => {
      if (response['status'] == 'success'){
        this.categories = response['data']
        console.log(this.categories)
      } else {
        console.log(response['error'])
      }
    })

    //get the list of brands
    this.brandService
    .getBrand()
    .subscribe(response => {
      if (response['status'] == 'success'){
        this.brands = response['data']
        console.log(this.brands)
      } else {
        console.log(response['error'])
      }
  })
}

onSave() {
  // console.log(this.title)
  // console.log(this.description)
  // console.log(this.price)
  // console.log(this.category)
  // console.log(this.brand)
  this.productService
  .createProduct(this.title,this.description,this.price,this.category,this.brand)
  .subscribe(response => {
    if (response['status'] == 'success'){
      alert('Product added Successfully')
    } else {
      console.log(response['error'])
    }
  })

}

onCancel(){

}

}
