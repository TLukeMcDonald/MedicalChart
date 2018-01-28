import React, { Component } from 'react';
import '"./../../assets/stylesheets/App.css';
// import { scaleLinear } from 'd3-scale’;
import * as d3 from "d3";
// import { max } from 'd3-array';
// import { select } from 'd3-selection';

class SliderBar extends Component {
   constructor(props){
      super(props)
      this.createSlider = this.createSlider.bind(this)
      // this.brushed = this.brushed.bind(this)
      // this.brushcentered = this.brushcentered.bind(this)
   }
   componentDidMount() {
      this.createSlider()
   }
   componentDidUpdate() {
      this.createSlider()
   }



    createSlider() {
      //create random circles to use; Range is number of circles
     const randomX = d3.randomUniform(0, 10),
        randomY = d3.randomNormal(0.5, 0.12),
        // data plugged into chart, range was 800
        data = d3.range(5).map(function() {
          return [randomX(), randomY()]; });
        // data = [4,.7]
        console.log({'slider data':data})


    // creating initial frame
    var svg = d3.select("#svg1"),
        margin = {top: 194, right: 50, bottom: 214, left: 50},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom,
        g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        console.log({'g':g})

    // creates scale at bottom; domain is numbers
    var x = d3.scaleLinear()
        .domain([0, 10])
        .range([0, width]);

    // creates scale  ; added domain  0-10 no change, 10-0 they started at the top
    var y = d3.scaleLinear()
        .range([height, 0]);


    var brush = d3.brushX()
        .extent([[0, 0], [width, height]])
        .on("start brush", brushed);


    // takes circles and turns it into dots with radius 3.5
    var dot = g.append("g")
        .attr("fill-opacity", 0.2)
      .selectAll("circle")
      .data(data)
      .enter().append("circle")
        .attr("transform", function(d) { return "translate(" + x(d[0]) + "," + y(d[1]) + ")"; })
        .attr("r", 3.5);

    // main function
    g.append("g")
        .call(brush)
        .call(brush.move, [3, 5].map(x))
      .selectAll(".overlay")
        .each(function(d) { d.type = "selection"; }) // Treat overlay interaction as move.
        .on("mousedown touchstart", brushcentered); // Recenter before brushing. //mousedown: Triggered by an element when a mouse button is pressed down over it

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));




    function brushcentered() {
      var dx = x(1) - x(0), // Use a fixed width when recentering.
          cx = d3.mouse(this)[0],
          x0 = cx - dx / 2,
          x1 = cx + dx / 2;
      d3.select(this.parentNode).call(brush.move, x1 > width ? [width - dx, width] : x0 < 0 ? [0, dx] : [x0, x1]);
    };

    // this is what's been selected with the overlay; how do I get it out?
    function brushed() {
      var extent = d3.event.selection.map(x.invert, x);
      dot.classed("selected", function(d) { return extent[0] <= d[0] && d[0] <= extent[1]; });
      // console.log(dot.classed("selected", function(d) { return extent[0] <= d[0] && d[0] <= extent[1]; }))
    }



}



  render() {
    return <div>
      <div className="frame">
      <h1> text </h1>
      </div>
      <div className="frame">
        <svg width="960" height="500" id="svg1">
        </svg>
      </div>
    </div>
  }




}
export default SliderBar
