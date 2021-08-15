import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPostListComponent } from './admin-post-list/admin-post-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminAddPostComponent } from './admin-add-post/admin-add-post.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdatePostComponent } from './update-post/update-post.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AdminPostListComponent,
    AdminAddPostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
})
export class AdminModule { }
