import * as d3 from 'd3'

// Selecting and appending elements
d3.select('#root')
  .append('h5')
  .append('text')
  .text(`D3 version: ${d3.version}`)

// Loading external data
d3.csv('/data/sample.csv', (error, dataset) => {
  dataset.forEach((data) => {
    console.log(data)
  })
})
