import * as THREE from "three";

export const raycaster = new THREE.Raycaster();

export function getLookBlock(camera,blocks){

    raycaster.setFromCamera(

        new THREE.Vector2(0,0),

        camera

    );

    const hit = raycaster.intersectObjects(blocks);

    if(hit.length){

        return hit[0];

    }

    return null;

}