import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-school-year',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-school-year.component.html',
  styleUrl: './create-school-year.component.css',
})
export class CreateSchoolYearComponent {
  schoolYearForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.email]),
    start_date: new FormControl('', [Validators.required]),
    end_date: new FormControl('', [Validators.required]),
  });
}
