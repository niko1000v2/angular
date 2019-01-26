import {Component, Input, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car-tiles',
  templateUrl: './car-tiles.component.html',
  styleUrls: ['./car-tiles.component.css']
})
export class CarTilesComponent implements OnInit {
  private cars: Car[];
  constructor( private carService: CarsService) {
  }

  ngOnInit() {
    this.cars = this.carService.getCars();

  }

  /*onRentCar(): void {
    if (this.available === true) {
      this.available = false;
    } else {
      this.available = true;
    }
  }*/
}

export class Car {
  carName: string;
  carPrice: number;
  numberOfSeats: number;
  caution: number;
  available: boolean;
  img: string;
  limit: number;


  constructor(carName: string, carPrice: number, numberOfSeats: number, caution: number, available: boolean, img: string, limit: number) {
    this.carName = carName;
    this.carPrice = carPrice;
    this.numberOfSeats = numberOfSeats;
    this.caution = caution;
    this.available = available;
    this.img = img;
    this.limit = limit;
  }
}

