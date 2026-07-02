import * as THREE from "three";

export function initCamera(){

    const camera=new THREE.PerspectiveCamera(

        75,

        window.innerWidth/window.innerHeight,

        0.1,

        1000

    );

    camera.position.set(0,2,5);

    window.addEventListener("resize",()=>{

        camera.aspect=window.innerWidth/window.innerHeight;

        camera.updateProjectionMatrix();

    });

    return camera;

}