import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { StackedChart } from '../StackedChart';

@Component({
  selector: 'app-chart-overview',
  templateUrl: './chart-overview.component.html',
  styleUrls: ['./chart-overview.component.css']
})
export class ChartOverviewComponent implements OnInit {

  @Input() dataOverview: StackedChart[] = []

  isNan(value: string) {
    return isNaN(parseInt(value));
  }
  
  // less30: number = 0;
  // gt30Le60: number = 0;
  // gt60le90: number = 0;
  // gt90: number = 0;
  total: number = 0;
  dataChange: any = [];
  constructor() { }
  overviewValues: {"value": number, "color": string, "name": string}[] = [{
    "value": 0,
    "color": '#00D7D2',
    "name": ""
  },{
    "value": 0,
    "color": '#313c53',
    "name": "",
  },{
    "value": 0,
    "color": '#7BD500',
    "name": ""
  }]//['#00D7D2', '#313c53', '#7BD500'];
  ngOnInit(): void {
    
  }

  res:string[] = [];
  
  ngOnChanges(changes: SimpleChanges) {
    this.overviewValues = [{
      "value": 0,
      "color": '#00D7D2',
      "name": ""
    },{
      "value": 0,
      "color": '#313c53',
      "name": "",
    },{
      "value": 0,
      "color": '#7BD500',
      "name": ""
    }];

    //console.log("DATA OVERVIEW: ", changes['dataOverview']);
    

    this.dataChange = changes['dataOverview'];
    //console.log("BBBB "+JSON.stringify(this.dataChange.currentValue))
    for(let i in this.dataChange.currentValue){
      // console.log("ASD "+ this.overviewValues[0]["value"])
      this.res = Object.keys(this.dataChange.currentValue[i]);
      
        this.overviewValues[0]["name"] = this.res?.find(d => d === "mh") || "";
        this.overviewValues[1]["name"] = this.res?.find(d => d === "dl") || "";
        this.overviewValues[2]["name"] = this.res?.find(d => d === "rj") || "";
      
      // this.overviewValues[1]["name"] = this.dataChange.currentValue[i][""]
      // this.overviewValues[2]["name"] = this.dataChange.currentValue[i][""]
      this.overviewValues[0]["value"] += this.dataChange.currentValue[i]["mh"]
      this.overviewValues[1]["value"] += this.dataChange.currentValue[i]["dl"]
      this.overviewValues[2]["value"] += this.dataChange.currentValue[i]["rj"]
    }
    this.total = this.overviewValues[0]["value"] +
                 this.overviewValues[1]["value"] +
                 this.overviewValues[2]["value"]  
  }

}