import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRootComponent } from './app-root/app-root.component';

@NgModule({
  bootstrap: [AppRootComponent]
  declarations: [AppRootComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
