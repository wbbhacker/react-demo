import React, { useCallback, useEffect, useRef } from 'react';
import draw_line from './draw_line'

const Webgl_buffergeometry = () => {
  const containerRef = useRef()

  const render = useCallback(() => {


    draw_line(containerRef.current)

  }, [])


  useEffect(() => {
    render()
  }, [])

  return <div ref={containerRef}>
  </div>
}

export default Webgl_buffergeometry





