import {Injectable} from '@angular/core';
import {Car} from './car-tiles/car-tiles.component';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public cars: Car[];

  constructor() {

    this.cars = [
      new Car('Fiat', 200, 5, 999, true, 'car-2.png', 500),
      new Car('Subaru', 200, 5, 999, true, 'car-1.png', 500),
      new Car('BWM', 200, 5, 999, true, 'car-3.png', 500),
      new Car('Bugatti', 200, 5, 999, true, 'bugatti.jpg', 500),
    ];
  }

  getCars(): Car[] {
    return this.cars;
  }
}

