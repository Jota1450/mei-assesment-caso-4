import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  constructor(private router: Router) {}

  onSubmit(value1: HTMLInputElement, value2: HTMLInputElement) {
    const result = Number(value1.value) + Number(value2.value)

    this.router.navigate(['/result-component', result]);

    return false;
  }
}
