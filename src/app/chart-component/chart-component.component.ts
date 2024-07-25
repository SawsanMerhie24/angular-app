import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrls: ['./chart-component.component.css']
})
export class ChartComponent implements OnInit {

  title = 'Jobathon Submissions Evolution';

  ngOnInit(): void {
    this.initChart();
  }

  initChart(): void {
    const chartDom = document.getElementById('main');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        xAxis: [
          { type: 'category', boundaryGap: false, data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] }
        ],
        yAxis: [
          { type: 'value' }
        ],
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
