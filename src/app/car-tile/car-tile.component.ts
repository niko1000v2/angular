import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car-tile',
  templateUrl: './car-tile.component.html',
  styleUrls: ['./car-tile.component.css']
})
export class CarTileComponent implements OnInit {
  @Input() carName;
  @Input() carPrice;
  @Input() numberOfSeats ;
  @Input() caution;
  @Input() img;
  @Input() limit;
  @Input() available;
  constructor() { }
  onRentCar(): void {
    if (this.available === true) {
      this.available = false;
    } else {
      this.available = true;
    }
  }
  ngOnInit() {
  }

}
