import { Component } from '@angular/core';
import { User } from 'src/app/Model/user';
import { Country } from './Model/country';
import { State } from './Model/state';
import { DataTableService } from './shared/services/data-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  details! : User[];
  countries! : Country[];
  states! : State[];
  test = [];
  headers : any;
  subjects : any;
  targetField : string = ''
  targetValue: any;
  options : any;

  constructor(private _tableData: DataTableService){
  }
  ngOnInit() {
    this._tableData.getCountries().subscribe(countries => {
      this.countries = countries;
      console.log(this.countries);
      
    });

    this._tableData.getStates().subscribe(data => {
      this.states = data;
      console.log(this.states);
      
    });

    this._tableData.getHeaders().subscribe(data => {
      this.headers = data;
    });

    this._tableData.getSubjects().subscribe(data => {
      this.subjects = data;
      console.log(this.subjects);
       
    });

    this._tableData.getData().subscribe(data => {
      this.details = data;
    });
  }

  init(event : any){
    this.targetField = event.field;
    this.targetValue = event.data[this.targetField]
    
  }

  complete(event : any){
    let data = event.data;
    let id = event.data.id;
    let updatedValue = data[this.targetField]
    if(this.targetValue !== updatedValue){
      this._tableData.updateData(data, id).subscribe();
    }
  }

  select( option: string ){
    if(option === 'countries'){
      return this.countries;
    }
    else if(option === 'states'){
      return this.states;
    }
    else if(option === 'subjects'){
      return this.subjects
    }
    else{
      return 
    }
  }

  hey(){
    console.log(this.test);
  }

  onHeaderCheckboxToggle(event: any){
    console.log(this.test);
  }
  
}