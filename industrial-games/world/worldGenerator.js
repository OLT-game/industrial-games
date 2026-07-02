import * as THREE from "three";

import {textures} from "../render/textures.js";

const material=new THREE.MeshLambertMaterial({

    map:textures.grass

});

export function generateFlat(chunk){

    const geo=new THREE.BoxGeometry(1,1,1);

    for(let x=-20;x<20;x++){

        for(let z=-20;z<20;z++){

            const cube=new THREE.Mesh(

                geo,

                material

            );

            cube.position.set(x,0,z);

            chunk.scene.add(cube);

            chunk.blocks.push(cube);

        }

    }

}