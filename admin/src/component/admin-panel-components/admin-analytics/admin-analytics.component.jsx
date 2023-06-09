import Chart from 'react-apexcharts'
import React, { Component } from 'react' 
import './admin-analytics.css'

class AdminAnalytics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        name: "New visits",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Site Traffic By Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    
    
    };
  }

  render() {
    return (
      <div style={{margin: 'auto', marginTop: '75px', width: '90%',overflow: 'hidden' }}>
        <div className='sales-chart-container mt-4 mb-3 padding-10'>
          <Chart options={this.state.options} series={this.state.series} type="line" height={320} style={{zIndex: '0'}}  />
        </div>
      </div>
    )
  }
}

export default AdminAnalytics;