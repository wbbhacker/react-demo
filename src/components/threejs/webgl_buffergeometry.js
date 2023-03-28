import React, { useCallback, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {nodeIndices,nodeCoords}  from './data'
console.log(nodeIndices.length)
console.log(nodeCoords.length)
let data = []
 nodeCoords.map((item)=>{
  let f = item[0]
  data.push(f[1])
  data.push(f[2])
  data.push(f[3])

})
console.log(data)
const Webgl_buffergeometry = () => {
  const containerRef = useRef()

  const render = useCallback(() => {
    let container;;


    let camera, scene, renderer;

    let mesh;


    init();
    // animate();

    function init() {

      container = containerRef.current

      console.log(container)

      //

      camera = new THREE.PerspectiveCamera(27, window.innerWidth / window.innerHeight, 1, 3500);
      camera.position.z = 750;

      scene = new THREE.Scene();
      // scene.background = new THREE.Color(0x050505);
      // scene.fog = new THREE.Fog(0x050505, 2000, 3500);

      //

      // scene.add(new THREE.AmbientLight(0x444444));

      const light1 = new THREE.DirectionalLight(0xffffff, 0.5);
      light1.position.set(1, 1, 1);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight(0xffffff, 1.5);
      light2.position.set(0, - 1, 0);
      scene.add(light2);

      //

      const geometry = new THREE.BufferGeometry();
      // create a simple square shape. We duplicate the top left and bottom right
      // vertices because each vertex needs to appear once per triangle.
      const vertices = new Float32Array( data );
      
      // itemSize = 3 because there are 3 values (components) per vertex
      geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
      const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
      mesh = new THREE.Mesh( geometry, material );
      scene.add(mesh);

      //

      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;

      container.appendChild(renderer.domElement);



      //

      window.addEventListener('resize', onWindowResize);

    }

    function onWindowResize() {

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);

    }

    //


    // render();
    animate()
    

    function animate() {

      requestAnimationFrame(animate);

      render();

    }

    function render() {

      const time = Date.now() * 0.001;

      mesh.rotation.x = time * 0.25;
      mesh.rotation.y = time * 0.5;
      mesh.rotation.z = time * 0.3;

      renderer.render(scene, camera);

    }
  }, [])


  useEffect(() => {
    render()
  }, [])

  return <div ref={containerRef}>
    webgl_buffergeometry
  </div>
}

export default Webgl_buffergeometry





