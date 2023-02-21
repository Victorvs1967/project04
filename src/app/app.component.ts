import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from './model/car.model';
import { CarsService } from './services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  carsData?: Car[];
  priceForm?: FormGroup;

  category: string = 'sport';

  translate: any;
  bgPosition: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.translate = { transform: 'translate3d(' + ((event.clientX * 0.4) / 8) + 'px, ' + ((event.clientY * 0.4) / 8) + 'px, 0px)' };
  }

  @HostListener('document:scroll', ['$event'])
  onScroll() {
    this.bgPosition = { backgroundPositionX: '0' + (.3 * window.scrollY) + 'px' };
  }

  constructor(private form: FormBuilder, private carService: CarsService) {

    this.priceForm = this.form.group({
      name: [ null, [ Validators.required ] ],
      phone: [ null, [ Validators.required ] ],
      car: [ null, [ Validators.required ] ],
    });
  }

  ngOnInit() {
    this.carService.getData(this.category)
      .subscribe((data: any) => this.carsData = data);
  }

  toggleCategory(category: string) {
    this.category = category;
    this.ngOnInit();
  }
  
  scroll(link: HTMLElement, payload?: string) {
    link.scrollIntoView();
    if (this.priceForm && payload) this.priceForm.patchValue({ car: payload });
  }

  submit() {
    if (this.priceForm && this.priceForm.valid) {
      this.carService.sendQuery(this.priceForm.value)
        .subscribe({
          next: (res: any) => alert(res.message),
          error: error => alert(error.error.message),
        });

      this.priceForm.reset();
    }
  }
}