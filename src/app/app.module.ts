import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { InvestmentResultsModule } from './investment-results/investment-results.module';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, InvestmentResultsModule, UserInputModule],
})
export class AppModule {}
