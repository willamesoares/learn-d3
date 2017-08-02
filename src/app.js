import * as d3 from 'd3'

d3.select('#root')
  .append('h5')
  .append('text')
  .text(`D3 version: ${d3.version}`)
