import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeiroEntryPointModule } from 'my-library/primeiro-entry-point';

@NgModule({
  imports: [CommonModule , PrimeiroEntryPointModule],
})
export class ButtonModule {}
