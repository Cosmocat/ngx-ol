import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxOlModule } from '@myworkspace/ngx-ol';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxOlModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
