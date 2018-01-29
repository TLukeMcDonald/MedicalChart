# MedicalChart

### Objective
[Full Project Proposal Here](https://github.com/TLukeMcDonald/MedicalChart/blob/master/Assets/Project_Docs/Project_Proposal-Medical_Chart%20.pdf)
![Project Proposal](https://git.generalassemb.ly/lukemcdonald/Project4-MedChart/blob/master/Assets/Project_Docs/Screen%20Shot%202018-01-18%20at%2012.32.59%20PM.png) <br>
As a military member I’ve moved frequently. As a project manager I’ve shifted under various health insurance programs and have had to routinely change doctors since they might not be covered under the new insurance.  Medical records don’t always transfer and as a patient you need to take charge of your history and be able to point out previous problems you’ve had that might be related. 

### Solution
Now you can search by body part and time series to easily see trends and patterns. Import your medical records prior to leaving doctors or when you get sick. 

## Wireframes <br>
 [Full set of wireframes can be found here](https://github.com/TLukeMcDonald/MedicalChart/tree/master/Assets/Wireframes) Created with [Basalmiq](https://balsamiq.cloud/srwjz/p6u5k)
- ![Main View with filter shelf out](https://git.generalassemb.ly/lukemcdonald/Project4-MedChart/blob/master/Assets/Wireframes/Filter.png)
- ![Details Page](https://git.generalassemb.ly/lukemcdonald/Project4-MedChart/blob/master/Assets/Wireframes/Detail%20Record.png)
- ![Medicine List](https://git.generalassemb.ly/lukemcdonald/Project4-MedChart/blob/master/Assets/Wireframes/Medicine%20List.png)

## User stories <br>
Tracking of the project and user stories can been seen in the [Projects Tab](https://github.com/TLukeMcDonald/MedicalChart/projects)
1. As a user I would like to login and see only my data.
1. As a user I would like to display medical records in a list.
1. As a user I would like to display medical records as a graphic on the human body.
1. As a user I would like to filter medical records by body part.
1. As a user I would like to filter medical records by time.
1. As a user I would like to scroll through selected records via time and see them highlighted on the body chart.
1. As a user I would like to update my user profile.
1. As a user I would like to track medicines I’ve had and display on list.
1. As a user I would like to sort medicines by effectiveness.
1. As a user I would like to sort medicines by Alphabet.
1. As a user I would like to import medical records by cvs.

## References and Acknowledgement 
https://bl.ocks.org/mbostock
https://leanpub.com/D3-Tips-and-Tricks

## Technologies
- Ruby
- Ruby on Rails
- D3


## Feautured code snippet of a part of the app you're particularly proud of
D3 Creating a bar chart
```
    createBarChart() {
      const node = this.node
      const dataMax = d3.max(this.props.data)
      const yScale = d3.scaleLinear()
         .domain([0, dataMax])
         .range([0, this.props.size[1]])

   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')

   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()

   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => i * 30)
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
      .attr('width', 25)
```

## Future Any things you plan to fix or features you plan to add
- Connecting the charts in D3
- Routing to individual records
- CSS bugs

## Installation <br>
- Fork & clone
- npm i
- yarn install
- foreman start



