import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({
   selector: 'pm-products',
   templateUrl: './product-list.component.html',
   styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
   pageTitle: string = "Product List";
   imageWidth: number = 50;
   imageMargin: number = 2;
   showImage: boolean = false;
   filteredProducts: IProduct[];
   products: IProduct[];
   _listFilter: string;

   constructor(private productService: ProductService) {

   }

   ngOnInit(): void {
      this.products = this.productService.getProducts();
      this.filteredProducts = this.products;
   }

   get listFilter(): string {
      return this._listFilter;
   }
   set listFilter(value: string) {
      this._listFilter = value;
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
   }

   performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
   }

   onRatingClicked(product: IProduct): void {
      this.pageTitle = `Product List: ${product.productName} - ${product.starRating}`;
   }

   toggleImage(): void {
      this.showImage = !this.showImage;
   }
}