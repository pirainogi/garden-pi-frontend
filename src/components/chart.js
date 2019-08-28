import React, { Component } from 'react';
import { connect } from 'react-redux';
import { XY } from "chart.xkcd-react"

const Chart = () => {

  return(
    <div className="chart">
      <p> hopefully I will one day be a chart???</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Chart);
