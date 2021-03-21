import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationComponent } from './components/validation/validation.component';
import { AvatarComponent } from './components/avatar/avatar.component';



@NgModule({
  declarations: [ValidationComponent, AvatarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
