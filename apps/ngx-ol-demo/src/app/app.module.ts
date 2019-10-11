import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxOlModule } from '@myworkspace/ngx-ol';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxOlModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument({
      name: 'NGX OpenLayers',
      maxAge: 25
    }) : [],
    EffectsModule.forRoot([])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
