import { NgModule } from '@angular/core';
import { InvestmentResultsComponent } from './investment-results.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [InvestmentResultsComponent],
  exports: [InvestmentResultsComponent],
  imports: [CurrencyPipe],
})
export class InvestmentResultsModule {}
