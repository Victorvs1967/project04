import { Component } from '@angular/core';
import { Car } from 'src/app/model/car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.sass']
})
export class CarComponent {

  carsData: Car[] = [
  // carsData: Car[] = [
  //   { image: '1.png', name: 'Lamborghini Huracan Spyder', transmition: 'автомат', engine: '5.2', year: '2019', },
  //   { image: '2.png', name: 'Chevrolet Corvette', transmition: 'автомат', engine: '6.2', year: '2017', },
  //   { image: '3.png', name: 'Ferrari California', transmition: 'автомат', engine: '3.9', year: '2010', },
  //   { image: '4.png', name: 'Lamborghini Urus', transmition: 'автомат', engine: '4.0', year: '2019', },
  //   { image: '5.png', name: 'Audi R8', transmition: 'автомат', engine: '5.2', year: '2018', },
  //   { image: '6.png', name: 'Chevrolet Camaro', transmition: 'автомат', engine: '2.0', year: '2019', },
  //   { image: '7.png', name: 'Maserati Quattroporte', transmition: 'автомат', engine: '4.0', year: '2018', },
  //   { image: '8.png', name: 'Dodge Challenger', transmition: 'автомат', engine: '6.4', year: '2019', },
  //   { image: '9.png', name: 'Nissan GT-R', transmition: 'автомат', engine: '3.8', year: '2019', },
  ];

  link?: HTMLElement;

  scroll(link: HTMLElement, payload?: string) {
    link.scrollIntoView();
    // if (this.priceForm && payload) this.priceForm.patchValue({ car: payload });
  }

}
