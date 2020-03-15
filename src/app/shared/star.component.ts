import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
   selector: "pm-star",
   templateUrl: "./star.component.html",
   styleUrls: ["./star.component.css"]
})

export class StarComponent implements OnChanges {
   @Input() rating: number;
   @Input() productName: string;
   starWidth: number;
   @Output() ratingClicked: EventEmitter<object> = new EventEmitter<object>();

   ngOnChanges(): void {
      this.starWidth = this.rating * 75 / 5
   }

   OnClick(): void {
      console.log(this.rating);
      this.ratingClicked.emit({
         starRating: this.rating,
         productName: this.productName
      });
   }
}