import { Component } from '@angular/core';
import { CreateSchoolYearComponent } from './create-school-year/create-school-year.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-school-year',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './school-year.component.html',
  styleUrl: './school-year.component.css',
})
export class SchoolYearComponent {}
