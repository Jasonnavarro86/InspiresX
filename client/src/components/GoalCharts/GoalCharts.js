import React from 'react';
import { Line} from 'react-chartjs-2';
import "./GoalChart.css"



class Chart extends React.Component{
    
constructor(props){
    super(props);
    this.state ={
        chartData:{
                labels: ["Feel Like Quitting", "Need Help Learning", "Fear", "Joy", "Sadness"],
                datasets: [{
                    label: `${props.date} TO ${props.date}`,
                    data: [1,2,3,4,5],
                    backgroundColor: [
                        
                        'rgba(75, 192, 192, 0.2)',
                       
    
                    ],
                    borderColor: [
                        
                        'rgba(127,188,239, 0.8)',
                        
                    ],
                    borderWidth: 1
                }]
            },
        }
    }

    createSocialChart = () => {}
       

    render(){
        return(
           
            <div className="chart">
            <h6 className="text-center"> GOAL STATS</h6>
            <Line
            data={this.state.chartData}
            width={10}
            height={4}
            options={{ 
                scales: {
                xAxes: [{
                    ticks: {
                        max: 1,
                        min: 0,
                        stepSize: 1,
                        fontSize: 10,
                        beginAtZero:true
                    }
                }],
                yAxes:[{
                    ticks: {
                        stepSize: 1,
                        fontSize: 10
                    }
                }]
            }
              
            }}
         />
            </div>
        )
    }
        
    }


export default Chart;
