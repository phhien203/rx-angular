import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { RenderingWorkComponent } from './rendering-work/rendering-work.component';
import { UnpatchModule } from '@rx-angular/template/experimental/unpatch';

@NgModule({
  declarations: [RenderingWorkComponent],
  exports: [RenderingWorkComponent],
  imports: [CommonModule, MatButtonModule, UnpatchModule],
})
export class RenderingWorkModule {}
