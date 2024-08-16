import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroEntryPointModule } from 'my-library/primeiro-entry-point';

@Component({
  selector: 'lib-my-library',
  standalone: true,
  imports: [CommonModule , PrimeiroEntryPointModule],
  templateUrl: './my-library.component.html',
  styleUrl: './my-library.component.css',
})
export class MyLibraryComponent {}
