//import * as THREE from './threejs/three.module'
import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r127/build/three.module.js';

const body = document.querySelector(".body")

var scene = new THREE.Scene()
scene.background = scene.background = new THREE.Color( 0x0C0C0C );
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 1000)

var renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
body.appendChild(renderer.domElement)
window.addEventListener("resize", function() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth/ window.innerHeight
    camera.updateProjectionMatrix()
})

//add control
//control = new THREE.OrbitControls(camera, renderer.domElement)

// create geometry
var geometry = new THREE.BoxGeometry(1,1,1)
//const geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );

//create material 
var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe : true})
//const material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe : true} );

//create item and add to the screen
var cube = new THREE.Mesh(geometry, material);
scene.add(cube)
//const cylinder = new THREE.Mesh( geometry, material );
//scene.add( cylinder );

//move camera
camera.position.z = 5;

//game logic
var update = function () {
    //cylinder.rotation.x += 0.01
    //cylinder.rotation.y += 0.01
}

//draw scene
var render = function () {
    renderer.render(scene, camera)
}

//run game loop (render, update , repeat)
var GameLoop = function () {
    requestAnimationFrame(GameLoop)

    update()
    render()
}


GameLoop();