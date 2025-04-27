import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
 @Input() prodObj!:Iproduct
  productArr!: Array<Iproduct>;
  liked:boolean=false
  constructor(private _productservice: ProductService) {}

  ngOnInit(): void {

    // this._productservice.fetchAllProduct().subscribe((res) => {
    //   console.log(res);
    //   this.productArr = res;
    // });
  }

  toggleLike() {
    this.liked = !this.liked;
  }
}
