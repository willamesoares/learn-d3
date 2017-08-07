import * as d3 from 'd3'

const svg = d3.select('#root').append('svg')
svg.attr('height', 300).attr('width', 500)

// Computer
svg.append('rect')
  .attr('height', 80)
  .attr('width', 100)

svg.append('rect')
  .attr('height', 50)
  .attr('width', 80)
  .attr('fill', 'white')
  .attr('x', 10)
  .attr('y', 10)

svg.append('rect')
  .attr('height', 10)
  .attr('width', 80)
  .attr('x', 10)
  .attr('y', 90)

// Tablet
svg.append('rect')
  .attr('height', 90)
  .attr('width', 70)
  .attr('x', 150)
  .attr('y', 5)
  .attr('fill', 'white')
  .attr('stroke', 'black')
  .attr('stroke-width', 10)
  .attr('rx', 5)

svg.append('circle')
  .attr('cx', 185)
  .attr('cy', 95)
  .attr('r', 3)
  .attr('fill', 'white')
