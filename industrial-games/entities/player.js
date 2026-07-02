import * as THREE from "three";

export class Player{

    constructor(camera,controls){

        this.camera = camera;
        this.controls = controls;

        this.velocity = new THREE.Vector3();

        this.speed = 6;

        this.jumpPower = 8;

        this.gravity = 18;

        this.onGround = true;

        this.keys = {};

        window.addEventListener("keydown",(e)=>{

            this.keys[e.code]=true;

        });

        window.addEventListener("keyup",(e)=>{

            this.keys[e.code]=false;

        });

    }

    update(dt){

        const move = new THREE.Vector3();

        if(this.keys["KeyW"]) move.z+=1;
        if(this.keys["KeyS"]) move.z-=1;
        if(this.keys["KeyA"]) move.x-=1;
        if(this.keys["KeyD"]) move.x+=1;

        move.normalize();

        if(move.length()>0){

            this.controls.moveRight(move.x*this.speed*dt);

            this.controls.moveForward(move.z*this.speed*dt);

        }

        if(this.keys["Space"]&&this.onGround){

            this.velocity.y=this.jumpPower;

            this.onGround=false;

        }

        this.velocity.y-=this.gravity*dt;

        this.camera.position.y+=this.velocity.y*dt;

        if(this.camera.position.y<2){

            this.camera.position.y=2;

            this.velocity.y=0;

            this.onGround=true;

        }

    }

}