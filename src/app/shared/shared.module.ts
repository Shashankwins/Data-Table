import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './components/calendar/calendar.component';
import { HttpClientModule } from '@angular/common/http';
import { TextboxComponent } from './components/textbox/textbox.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NumberComponent } from './components/number/number.component';
import { DisplayComponent } from './components/display/display.component';
import { DataTableService } from './services/data-table.service';



@NgModule({
  declarations: [
    CalendarComponent,
    TextboxComponent,
    DropdownComponent,
    NumberComponent,
    DisplayComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    CalendarModule,
    InputNumberModule,
    DialogModule,
    MultiSelectModule,
    CheckboxModule,
    HttpClientModule
  ],

  providers: [ DataTableService ],

  exports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    DropdownModule,
    TableModule,
    CalendarModule,
    InputNumberModule,
    DialogModule,
    MultiSelectModule,
    CheckboxModule,
    CalendarComponent,
    TextboxComponent,
    DropdownComponent,
    NumberComponent,
    DisplayComponent
  ]
})
export class SharedModule { }
