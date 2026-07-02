import * as THREE from "three";

export function initLighting(scene){

    const ambient=new THREE.AmbientLight(0xffffff,2);

    scene.add(ambient);

    const sun=new THREE.DirectionalLight(0xffffff,2);

    sun.position.set(20,30,10);

    scene.add(sun);

}