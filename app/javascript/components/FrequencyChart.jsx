import React from 'react';

class FrequencyChart extends React.Component {
  constructor(props) {
    super(props);
  }
  drawChart() {
    const div = new ReactFauxDOM.createElement('div');
    // ...
    return div.toReact()
  }

  render () {
    return this.drawChart();
  }
}
module.exports = FrequencyChart;
