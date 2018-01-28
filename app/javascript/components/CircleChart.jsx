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
      console.log({'circleChart':props})
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
         // .attr("cx", 80)
         // .attr("cy", 20)
         .attr("transform", `translate(80,20) scale(${this.props.scale[0]})`)
         .attr("r", 8)
         .style("fill", this.props.color[0])
         .style("stroke", "black")

      // create circle arm #2
      holder.append("circle")
         // .attr("cx", 40)
         // .attr("cy", 100)
         .attr("transform", `translate(40,100) scale(${this.props.scale[1]})`)
         .attr("r", 8)
         .style("fill", this.props.color[1])
         .style("stroke", "black")

      // create circle chest #3
      holder.append("circle")
         // .attr("cx", 80)
         // .attr("cy", 120)
         .attr("transform", `translate(80,120) scale(${this.props.scale[2]})`)
         .attr("r", 8)
         .style("fill", this.props.color[2])
         .style("stroke", "black")

      // create circle Back #4
      holder.append("circle")
         // .attr("cx", 253)
         // .attr("cy", 100)
         .attr("transform", `translate(253,100) scale(${this.props.scale[3]})`)
         .attr("r", 8)
         .style("fill", this.props.color[3])
         .style("stroke", "black")

      // create circle lower Back #5
      holder.append("circle")
         // .attr("cx", 253)
         // .attr("cy", 180)
         .attr("transform", `translate(253,180) scale(${this.props.scale[4]})`)
         .attr("r", 8)
         .style("fill", this.props.color[4])
         .style("stroke", "black")

      // create circle Legs #6
      holder.append("circle")
         // .attr("cx", 60)
         // .attr("cy", 270)
         .attr("transform", `translate(60,270) scale(${this.props.scale[5]})`)
         .attr("r", 8)
         .style("fill", this.props.color[5])
         .style("stroke", "black")

      // create circle Internal #7
      holder.append("circle")
         // .attr("cx", 80)
         // .attr("cy", 175)
         .attr("transform", `translate(80,175) scale(${this.props.scale[6]})`)
         .attr("r", 8)
         .style("fill", this.props.color[6])
         .style("stroke", "black")




      //  const tooltip = d3.select('#tooltip')
      //    position: absolute;
      //    text-align: center;
      //    width: 60px;
      //    height: 28px;
      //    padding: 2px;
      //    font: 12px sans-serif;
      //    background: lightsteelblue;
      //    border: 0px;
      //    border-radius: 8px;
      //    pointer-events: none;
      // }

   }

render() {
   return <div className="tracker holder" id="circleChart">
   <img src={male} className="human1" alt="male" />
      {/*<svg ref={node => this.node = node}
      width={this.props.size[0]} height={this.props.size[1]}>
      </svg> */}
   </div>
   }





}
export default CircleChart
