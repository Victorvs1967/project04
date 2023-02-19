import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  carsData = [
    { image: '1.png', name: 'Lamborghini Huracan Spyder', transmition: 'автомат', engine: '5.2', year: '2019', },
    { image: '2.png', name: 'Chevrolet Corvette', transmition: 'автомат', engine: '6.2', year: '2017', },
    { image: '3.png', name: 'Ferrari California', transmition: 'автомат', engine: '3.9', year: '2010', },
    { image: '4.png', name: 'Lamborghini Urus', transmition: 'автомат', engine: '4.0', year: '2019', },
    { image: '5.png', name: 'Audi R8', transmition: 'автомат', engine: '5.2', year: '2018', },
    { image: '6.png', name: 'Chevrolet Camaro', transmition: 'автомат', engine: '2.0', year: '2019', },
    { image: '7.png', name: 'Maserati Quattroporte', transmition: 'автомат', engine: '4.0', year: '2018', },
    { image: '8.png', name: 'Dodge Challenger', transmition: 'автомат', engine: '6.4', year: '2019', },
    { image: '9.png', name: 'Nissan GT-R', transmition: 'автомат', engine: '3.8', year: '2019', },
  ];

  priceForm?: FormGroup;

  translate: any;
  bgPosition: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.translate = { transform: 'translate3d(' + ((event.clientX * 0.4) / 8) + 'px, ' + ((event.clientY * 0.4) / 8) + 'px, 0px)' };
  }

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPosition = { backgroundPositionX: -380 + (.3 * window.pageYOffset) + 'px' };
  }

  constructor(private form: FormBuilder) {
    this.priceForm = this.form.group({
      name: [ null, [ Validators.required ] ],
      phone: [ null, [ Validators.required ] ],
      car: [ null, [ Validators.required ] ],
    });
  }
  
  scroll(link: HTMLElement, payload?: string) {
    link.scrollIntoView();
    if (this.priceForm && payload) this.priceForm.patchValue({ car: payload });
  }

  submit() {
    if (this.priceForm && this.priceForm.valid) {
      alert('Спасибо ' + this.priceForm.controls['name'].value + ', мы Вам позвоним');
      this.priceForm.reset();
    } else {
      alert('Заполните поля формы');
    }
  }
}