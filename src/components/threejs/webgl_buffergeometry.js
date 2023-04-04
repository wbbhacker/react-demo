import React, { useCallback, useEffect, useRef } from 'react';
import draw_line from './draw_line'
import webgbl_camera from './webgl_camera'

const Webgl_buffergeometry = () => {
  const containerRef = useRef()

  const render = useCallback(() => {


    webgbl_camera(containerRef.current)

  }, [])


  useEffect(() => {
    render()
  }, [])

  return <div ref={containerRef}>
  </div>
}

export default Webgl_buffergeometry





