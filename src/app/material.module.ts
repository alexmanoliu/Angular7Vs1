import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatCheckboxModule,
  MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule,
  MatCardModule, MatOptionModule, MatSelectModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatOptionModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
