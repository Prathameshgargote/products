import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  ProductId!: string;
  productInfo!: Iproduct;
  quantity: number = 1;
  prodImgArr!: Array<string>;
  selectedImg!: string;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    this.ProductId = this._activatedRoute.snapshot.params['Id'];
    console.log(this.ProductId);
    this._productService.getSingleproduct(this.ProductId).subscribe((res) => {
      this.productInfo = res;
      this.prodImgArr = res.images;
      this.selectedImg = res.images[0];
      console.log(this.productInfo);
    });
  }

  onSmImg(SmImg: string) {
    console.log(SmImg);
    // this.productInfo.images[0] = SmImg;
    this.selectedImg = SmImg;
  }

  onDescres() {
  if(this.quantity<1){
    this.quantity--;
  }
  }

  onIncres() {
    this.quantity++;
  }
}
