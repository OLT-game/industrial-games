import * as THREE from "three";

function noise(ctx,color,count){

    for(let i=0;i<count;i++){

        ctx.fillStyle=color;

        ctx.fillRect(

            Math.random()*16,

            Math.random()*16,

            1,

            1

        );

    }

}

function makeTexture(draw){

    const canvas=document.createElement("canvas");

    canvas.width=16;
    canvas.height=16;

    const ctx=canvas.getContext("2d");

    draw(ctx);

    const texture=new THREE.CanvasTexture(canvas);

    texture.magFilter=THREE.NearestFilter;

    texture.minFilter=THREE.NearestFilter;

    return texture;

}

export const textures={

grass:makeTexture(ctx=>{

    ctx.fillStyle="#4caf50";
    ctx.fillRect(0,0,16,16);

    noise(ctx,"#6ddc6d",60);
    noise(ctx,"#2e7d32",40);

}),

dirt:makeTexture(ctx=>{

    ctx.fillStyle="#7b4d22";
    ctx.fillRect(0,0,16,16);

    noise(ctx,"#9b6a3b",40);

}),

stone:makeTexture(ctx=>{

    ctx.fillStyle="#8c8c8c";
    ctx.fillRect(0,0,16,16);

    noise(ctx,"#bcbcbc",50);

    noise(ctx,"#666666",25);

})

};