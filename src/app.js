import * as d3 from 'd3'

(async function () {
  // Selecting and appending elements
  d3.select('#root')
    .append('h5')
    .append('text')
    .text(`D3 version: ${d3.version}`)

  // Loading external data
  const dataset = await d3.csv('/data/sample.csv')
  dataset.forEach((data) => {
    console.log(data)
  })
}) ();