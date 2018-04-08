import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star-component',
  templateUrl: './star-component.component.html',
  styleUrls: ['./star-component.component.scss']
})
export class StarComponentComponent implements OnInit , OnChanges {

  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> =
            new EventEmitter<string>();

  constructor() {     
  }

  ngOnInit() {
    console.log("StarComponentComponent - ngOnInit");    
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
    console.log("ngOnChanges");
    console.log(this.rating);
}


  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

}
