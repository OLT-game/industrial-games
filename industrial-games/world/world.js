import * as THREE from "three";

export function createWorld(scene){

    // 地面
    const geometry = new THREE.BoxGeometry(200,1,200);

    const material = new THREE.MeshStandardMaterial({

        color:0x5ca94d

    });

    const ground = new THREE.Mesh(geometry,material);

    ground.position.y = -0.5;

    ground.receiveShadow = true;

    scene.add(ground);

}