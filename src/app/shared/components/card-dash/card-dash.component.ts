import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../model/product';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-card-dash',
  templateUrl: './card-dash.component.html',
  styleUrls: ['./card-dash.component.scss'],
})
export class CardDashComponent implements OnInit {
  ProductObj!: Array<Iproduct>;
  constructor(
    private _Http: HttpClient,
    private _PRoductService: ProductService
  ) {}
  ngOnInit(): void {
    this._PRoductService.fetchAllProduct().subscribe((res) => {
      this.ProductObj = res;
    });
  }
}
