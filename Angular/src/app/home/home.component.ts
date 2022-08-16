import { Component, SimpleChanges } from '@angular/core';
import { StackedChart } from '../StackedChart';

import chartData from '../ChartData.json';
import { DataServiceService } from '../data-service/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private dataService: DataServiceService) {}

  Data: StackedChart[] = [];

  cards:string[] = ["Highest", "Lowest"];
  
  incomes = [{company: "", income: 0},{company: "",income: 999999}];
  incomesMan = [{company: "", income: 0},{company: "",income: 999999}];

  selectedIncome: string = 'Household Income';
  selectedBuying: string = 'Buying Households';
  selectedManufacturer: string = '4 PG manufacturer';

  changeIncome(data: any) {
    this.selectedIncome = data;
    this.changeChartData();
  }

  changeBuying(data: any) {
    this.selectedBuying = data;
    this.changeChartData();
  }
  changeManufacturer(data: any) {
    this.selectedManufacturer = data;

    this.changeChartData();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.changeChartData();
  }

  filterdData: StackedChart[] = [];

  changeChartData() {
    this.dataService.chartDataResponse(this.selectedIncome, this.selectedBuying)
    .subscribe((serviceData:any) => {

    this.incomes = [{company: "", income: 0},{company: "",income: 999999}];
    this.incomesMan = [{company: "", income: 0},{company: "",income: 999999}];

    //console.log("ASD "+JSON.stringify(serviceData))


    //First two cards max & min income goes here
    serviceData.map((data: any) => {
      if(data.income > this.incomes[0].income) {
        this.incomes[0].income = data.income;
        this.incomes[0].company = data.company;
      }
      if(data.income < this.incomes[1].income) {
        this.incomes[1].income = data.income;
        this.incomes[1].company = data.company;
      }
    });
    
    
    this.filterdData = serviceData.filter(
      (d: any) => d.manufacturers === this.selectedManufacturer
    );

    //Last two cards max & min income goes here
    this.filterdData.map(data => {
      if(data.income > this.incomesMan[0].income) {
        this.incomesMan[0].income = data.income 
        this.incomesMan[0].company = data.company;
      }

      if(data.income < this.incomesMan[1].income) {
        this.incomesMan[1].income = data.income;
        this.incomesMan[1].company = data.company;

      }
    });
    
    //console.log("12234 "+this.filterdData)
    
    this.Data = this.filterdData;
  })}
}
