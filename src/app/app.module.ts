import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InvestmentResultsModule } from './investment-results/investment-results.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserInputComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, InvestmentResultsModule],
})
export class AppModule {}
