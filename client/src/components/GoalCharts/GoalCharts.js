import React from 'react';
import { Line} from 'react-chartjs-2';
import "./GoalChart.css"



class Chart extends React.Component{
    
    

constructor(props){

   
    super(props);
    



    this.state ={
        chartData:{
                labels: props.chartLabel,
                datasets: [{
                    label: `${props.date1.split("T")[0]} TO ${ props.date2[props.date2.length -1].split("T")[0]}`,
                    data:   this.eachItem(props),
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
   
       
    eachItem = (props) => {
        return props.chartValues;
       
    } 
    render(){
        console.log(this.state);
        return(
           
            <div className="chart">
            <h3 className="text-center"> GOAL STATS</h3>
            <Line 
            id = "chartLine"
            data={this.state.chartData}
            width={10}
            height={6.9}
            options={{ 
                scales: {
                xAxes: [{
                    ticks: {
                        // max: 1,
                        // min: 0,
                        stepSize: 1,
                        fontSize: 10,
                        beginAtZero:true
                    }
                }],
                yAxes:[{
                    ticks: {
                        max: 5,
                        min: 0,
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
