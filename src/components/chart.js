import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import chartXkcd from 'chart.xkcd';
import { XY } from "chart.xkcd-react"

class Chart extends Component {

  state={
    data: []
  }

  componentDidMount(){
    if(this.props.state.currentPlant){
        if(this.props.state.currentPlant.id === 150){
          let data = this.props.state.currentPlant.measurements.map(measurement => {
            let date = new Date(measurement.timestamp * 1000)
            return { x: date, y: parseFloat(measurement.moisture) }
          })
          this.setState({
            data: data
          })
        }
        else {
          return null
        }
      } else {
        return null
      }
  }

  render(){
    console.log('data', this.state.data);
    return(
      <div className="chart">
        <XY
          config={{
            title: 'Plant Health', //optional
            xLabel: 'Time', //optional
            yLabel: 'Health', //optional
            data: {
              datasets: [{
                label: 'Red Begonia',
                data: this.state.data,
            }],
            options: { //optional
              xTickCount: 5,
              yTickCount: 2,
              legendPosition: chartXkcd.config.positionType.upRight,
              showLine: true,
              timeFormat: 'ddd MM DD YYYY HH:mm:ss ZZ',
              //Fri Aug 02 2019 15:30:05 GMT-0400
              dotSize: 1,
            },
          }}}
        />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps, actions)(Chart);
