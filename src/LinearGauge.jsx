import React, { useEffect } from 'react'

import {LinearGauge} from 'canvas-gauges'

function ReactRadialGauge(props) {
    let el
    
    useEffect(() => {
        const options = {
            ...props, 
            renderTo: el
        }

        const gauge = new LinearGauge(options).draw()
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