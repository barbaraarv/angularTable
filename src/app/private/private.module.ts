import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DataTableComponent } from './data-table/data-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [DashboardComponent, DataTableComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    MatToolbarModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatPaginatorModule,
  ],
  exports: [DashboardComponent],
})
export class PrivateModule {}
