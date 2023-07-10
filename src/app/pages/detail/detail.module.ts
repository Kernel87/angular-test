import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    DetailRoutingModule,
    SharedModule
  ]
})
export class DetailModule { }
