import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom components.
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';

// Material.
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatIconModule } from '@angular/material/icon';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    CardComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatIconModule,
  ],
  exports: [
    ListComponent,
    SearchComponent,
    CardComponent,
    LoadingComponent,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatIconModule,
  ],
})
export class SharedModule {}
