import {
  Component,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  OnInit,
  HostListener,
} from '@angular/core';
import * as d3 from 'd3';
import { StackedChart } from '../StackedChart';



@Component({
  selector: 'app-stack-chart',
  templateUrl: './stack-chart.component.html',
})
export class StackChartComponent implements OnInit {
  @Input() data: StackedChart[] = [];

  private getScreenWidth: any;
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    if(this.getScreenWidth < 500){
      this.w = 400
    } else if(this.getScreenWidth < 800) {
      this.w = 500
    } else {
      this.w = 600
    }
    this.stack = d3.stack().keys(['mh', 'dl', 'rj']);
    this.initScales();
    this.initSvg();
    this.createStack(this.data);
    this.drawAxis();
  }

  private w: number = 600;
  private h: number = 400;
  private margin = { top: 10, right: 50, bottom: 60, left: 100 };
  private width = this.w - this.margin.left - this.margin.right;
  private height = this.h - this.margin.top - this.margin.bottom;

  private x: any;
  private y: any;
  private svg: any;
  private g: any;
  private stack: any;
  private chart: any;
  private layersBarArea: any;
  private layersBar: any;
  private xAxis: any;
  private yAxis: any;
  private legend: any;
  private legendItems: any;
  private tooltip: any;
  private stackedSeries: any;

  private colors = ['#00D7D2', '#313c53', '#7BD500'];

  constructor(private container: ElementRef) {}

  ngOnInit() {
    this.onWindowResize()
  }
 
    // For changing the data on selection of income
  	ngOnChanges(changes: SimpleChanges) {
  		const dataChange = changes['data'];
  		if(dataChange.firstChange === false){
  			this.stack = d3.stack().keys(['mh', 'dl', 'rj']);
        this.initSvg();
  			this.createStack(dataChange.currentValue);
        this.drawAxis();
  		}
  	}

  private initScales() {
    this.x = d3.scaleBand().rangeRound([0, this.width]).padding(0.05);

    this.y = d3.scaleLinear().range([this.height, 0]);
  }

  private initSvg() {


    // If block is used to remove the previous svg from DOM.
    if(this.svg !== undefined) {
      this.svg.remove();
    }

    this.svg = d3
      .select(this.container.nativeElement)
      .select('.chart-container')
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('class', 'chart')
      .attr('width', this.w)
      .attr('height', this.h)
      .attr('viewBox', '0 0 600 400');

    this.chart = this.svg
      .append('g')
      .classed('chart-contents', true)
      .attr(
        'transform',
        'translate(' + this.margin.left + ',' + this.margin.top + ')'
      );

    this.layersBarArea = this.chart.append('g').classed('layers', true);
  }

  private drawAxis() {
    this.xAxis = this.chart
      .append('g')
      .classed('x axis', true)
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(d3.axisBottom(this.x));

    this.chart
      .append('text')
      .attr('y', this.height + 40)
      .attr('x', this.width / 2)
      .classed('axis-title', true)
      .style('text-anchor', 'middle')
      .style('stroke', 'none')
      // .text(this.xTitle);

    this.yAxis = this.chart
      .append('g')
      .classed('y axis', true)
      .call(d3.axisLeft(this.y).ticks(7));

    this.chart
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - 60)
      .attr('x', 0 - this.height / 2)
      .style('text-anchor', 'middle')
      .style('stroke', 'none')
      .classed('axis-title', true)
      // .text(this.yTitle);
  }

  private createStack(stackData: any) {
    this.stackedSeries = this.stack(stackData);
    console.log(this.stackedSeries);
    this.drawChart(this.stackedSeries);
  }

  private drawChart(data: any) {
    this.layersBar = this.layersBarArea
      .selectAll('.layer')
      .data(data)
      .enter()
      .append('g')
      .classed('layer', true)
      .style('fill', (d: any, i: any) => {
        return this.colors[i];
      });

    this.x.domain(
      this.data.map((d: any) => {
        return d.date;
      })
    );

    this.y.domain([
      0,
      d3.max(this.stackedSeries, function (d: any) {
        return d3.max(d, (d: any) => {
          return d[1];
        });
      }),
    ]);

    this.layersBar
      .selectAll('rect')
      .data((d: any) => {
        return d;
      })
      .enter()
      .append('rect')
      .attr('y', (d: any) => {
        return this.y(d[1]);
      })
      .attr('x', (d: any, i: any) => {
        return this.x(d.data.date);
      })
      .attr('width', this.x.bandwidth())
      .attr('height', (d: any, i: any) => {
        return this.y(d[0]) - this.y(d[1]);
      })
     
  }
}
