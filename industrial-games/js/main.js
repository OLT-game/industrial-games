import * as THREE from "three";

const fpsElement = document.getElementById("fps");

let fpsFrame = 0;
let fpsTime = 0;

import {Chunk} from "../world/chunk.js";
import {generateFlat} from "../world/worldGenerator.js";
import { BlockManager } from "../world/blockManager.js";
import { getLookBlock } from "./raycast.js";
import { initScene } from "../render/scene.js";
import { initRenderer } from "../render/renderer.js";
import { initCamera } from "../render/camera.js";
import { initLighting } from "../render/lighting.js";
import { initControls } from "../render/controls.js";
import { createWorld } from "../world/world.js";
import { Player } from "../entities/player.js";

const scene = initScene();
const renderer = initRenderer();
const camera = initCamera();

const controls = initControls(camera, renderer);
const player = new Player(camera,controls);
const blockManager = new BlockManager(scene);
const chunk=new Chunk(scene);

initLighting(scene);
createWorld(scene);
generateFlat(chunk);

const clock = new THREE.Clock();

function animate(){

    requestAnimationFrame(animate);

    const dt = clock.getDelta();

    player.update(dt);

    renderer.render(scene,camera);

    fpsFrame++;
    fpsTime += dt;

    if(fpsTime >= 1){

        fpsElement.textContent = `FPS : ${fpsFrame}`;

        fpsFrame = 0;
        fpsTime = 0;

    }

}

window.addEventListener("mousedown",(e)=>{

    const hit = getLookBlock(

        camera,

        blockManager.blocks

    );

    if(e.button===0){

        if(hit){

            blockManager.remove(hit.object);

        }

    }

});

window.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

    const hit = getLookBlock(

        camera,

        blockManager.blocks

    );

    if(hit){

        const p = hit.object.position.clone();

        p.add(hit.face.normal);

        blockManager.add(

            p,

            hit.object.material

        );

    }

});

animate();