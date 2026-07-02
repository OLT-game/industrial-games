import * as THREE from "three";

export function initScene(){

    const scene=new THREE.Scene();

    scene.background=new THREE.Color(0x87ceeb);

    return scene;

}