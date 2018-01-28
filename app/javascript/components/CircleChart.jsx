import React, { Component } from 'react';
import '"./../../assets/stylesheets/App.css';
import '"./../../assets/stylesheets/CircleChart.css';
// import { scaleLinear } from 'd3-scale’;
import * as d3 from "d3";
import male from "./../../assets/images/male.png"

class CircleChart extends Component {
   constructor(props){
      super(props)
      this.createCircleChart = this.createCircleChart.bind(this)
   }
   componentDidMount() {
      this.createCircleChart()
   }
   componentDidUpdate() {
      this.createCircleChart()
   }

   createCircleChart() {
      // create frame
      const holder = d3.select('#circleChart')
         .append("svg")
         .attr("width", 341)
         .attr("height", 418)

       //create circle head #1
      holder.append("circle")
         .attr("cx", 80)
         .attr("cy", 20)
         .attr("r", 8)
         .style("fill", "props.color[1]")

      // create circle arm #2
      holder.append("circle")
         .attr("cx", 40)
         .attr("cy", 100)
         .attr("r", 8)
         .style("fill", "props.color[]")

      // create circle chest #3
      holder.append("circle")
         .attr("cx", 80)
         .attr("cy", 120)
         .attr("r", 8)
         .style("fill", "props.color[]")

      // create circle Back #4
      holder.append("circle")
         .attr("cx", 253)
         .attr("cy", 100)
         .attr("r", 8)
         .style("fill", "props.color[]")

      // create circle lower Back #5
      holder.append("circle")
         .attr("cx", 253)
         .attr("cy", 180)
         .attr("r", 8)
         .style("fill", "props.color[]")

      // create circle Legs #6
      holder.append("circle")
         .attr("cx", 60)
         .attr("cy", 270)
         .attr("r", 8)
         .style("fill", "props.color[]")

      // create circle Internal #7
      holder.append("circle")
         .attr("cx", 80)
         .attr("cy", 175)
         .attr("r", 8)
         .style("fill", "props.color[]")

   }

render() {
   return <div className="tracker holder" id="circleChart">
   <img src={male} className="human" alt="male" />
      {/*<svg ref={node => this.node = node}
      width={this.props.size[0]} height={this.props.size[1]}>
      </svg> */}
   </div>
   }





}
export default CircleChart
