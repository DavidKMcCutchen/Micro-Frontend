import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcComponent } from './abc.component';
import { AbcRoutingModule } from './abc-routing.module';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [CommonModule, AbcRoutingModule, ButtonModule],
})
export class AbcModule {}
