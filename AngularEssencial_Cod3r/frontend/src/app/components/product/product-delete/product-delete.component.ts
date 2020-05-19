import { Product } from './../product.model';
import {  Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product : Product

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.readById(this.route.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(){
    this.productService.delete(this.product.id.toString()).subscribe(() => {
      this.productService.showMessage('Produto excluído com sucesso')
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }
}
