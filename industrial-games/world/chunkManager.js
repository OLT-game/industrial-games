import * as THREE from "three";

export function buildChunkMesh(chunk, material){

    const group = new THREE.Group();

    const geometry = new THREE.BoxGeometry();

    for(let x=0;x<16;x++){

        for(let y=0;y<32;y++){

            for(let z=0;z<16;z++){

                if(chunk.data[x][y][z]==0) continue;

                const mesh = new THREE.Mesh(

                    geometry,

                    material

                );

                mesh.position.set(x,y,z);

                group.add(mesh);

            }

        }

    }

    return group;

}