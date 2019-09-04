import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import chartXkcd from 'chart.xkcd';
import { XY } from "chart.xkcd-react"

const Chart = ({ measurements, dataKey, name, chartTitle, chartLabel }) => {
  if (!measurements) {
    return <p>No plant data available</p>
  }

  return (
    <div style={{ width: "100%" }}>
      <XY
        config={{
          title: chartTitle,
          xLabel: 'Date',
          yLabel: chartLabel,
          data: {
            datasets: [{
              label: name,
              data: measurements.map(m => ({ x: m.label, y: m[dataKey] })),
            }],
          },
          options: {
            xTickCount: 3,
            yTickCount: 4,
            legendPosition: chartXkcd.config.positionType.upLeft,
            showLine: true,
            timeFormat: 'MM/DD/YYYY hh:mm',
            dotSize: 0.5,
          },
        }}
      />
    </div>
  )
}

const mapStateToProps = ({ currentPlant }) => {
  return {
    currentPlant
  }
}

export default connect(mapStateToProps, actions)(Chart);
