import { Component, OnInit } from '@angular/core';
import {CarsService} from '../cars.service';
import {Car} from '../car-tiles/car-tiles.component';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  private cars: Car[];
  constructor(
    private carService: CarsService) { }

  ngOnInit() {
    this.cars = this.carService.getCars();
  }

}
