import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatDialogModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatDialogModule,
  ],
})
export class MaterialModule {}
