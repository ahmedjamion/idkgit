import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-levels',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './levels.component.html',
  styleUrl: './levels.component.css',
})
export class LevelsComponent {}
