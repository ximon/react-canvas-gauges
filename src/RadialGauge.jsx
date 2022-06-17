import React, { useEffect } from 'react'

import {RadialGauge} from 'canvas-gauges'

function ReactRadialGauge(props) {
    let el
    
    useEffect(() => {
        const options = {
            ...props, 
            renderTo: el
        }

        const gauge = new RadialGauge(options).draw()
        gauge.value = props.value
        gauge.update(options)
    })

    return (
      <canvas ref={canvas => { 
        el = canvas
     }} />
    )
  }
  
  export default ReactRadialGauge